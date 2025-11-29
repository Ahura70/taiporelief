import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useHousingHistory } from '@/hooks/useHousingHistory';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { format, parseISO } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface HousingAnalyticsProps {
  locationNames: string[];
  title?: string;
  description?: string;
}

export const HousingAnalytics = ({ 
  locationNames, 
  title = 'Housing Occupancy Trends',
  description = 'Track occupancy rates and availability over time'
}: HousingAnalyticsProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(locationNames[0] || 'all');
  const [timeRange, setTimeRange] = useState<number>(7);
  
  const { history, loading } = useHousingHistory(
    selectedLocation === 'all' ? undefined : selectedLocation,
    timeRange
  );

  // Calculate statistics
  const calculateStats = () => {
    if (history.length === 0) return null;

    const currentData = history[history.length - 1];
    const previousData = history.length > 1 ? history[history.length - 2] : null;

    let trend: 'up' | 'down' | 'stable' = 'stable';
    let trendValue = 0;

    if (previousData) {
      trendValue = currentData.occupancy_rate - previousData.occupancy_rate;
      if (Math.abs(trendValue) < 0.5) {
        trend = 'stable';
      } else if (trendValue > 0) {
        trend = 'up';
      } else {
        trend = 'down';
      }
    }

    const avgOccupancyRate = history.reduce((sum, record) => sum + record.occupancy_rate, 0) / history.length;
    const avgAvailable = history.reduce((sum, record) => sum + record.available_units, 0) / history.length;

    return {
      current: currentData,
      trend,
      trendValue: Math.abs(trendValue),
      avgOccupancyRate: avgOccupancyRate.toFixed(1),
      avgAvailable: Math.round(avgAvailable)
    };
  };

  const stats = calculateStats();

  // Format data for charts
  const chartData = history.map(record => ({
    time: format(parseISO(record.recorded_at), 'MMM dd HH:mm'),
    occupancyRate: record.occupancy_rate,
    available: record.available_units,
    occupied: record.occupied_units,
    location: record.location_name
  }));

  // Group by location if showing all
  const groupedData = selectedLocation === 'all' 
    ? history.reduce((acc, record) => {
        const timeKey = format(parseISO(record.recorded_at), 'MMM dd HH:mm');
        if (!acc[timeKey]) {
          acc[timeKey] = { time: timeKey };
        }
        acc[timeKey][record.location_name] = record.occupancy_rate;
        return acc;
      }, {} as Record<string, any>)
    : {};

  const multiLocationData = Object.values(groupedData);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locationNames.map(name => (
                  <SelectItem key={name} value={name}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={timeRange.toString()} onValueChange={(v) => setTimeRange(Number(v))}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">24 Hours</SelectItem>
                <SelectItem value="7">7 Days</SelectItem>
                <SelectItem value="30">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {stats && selectedLocation !== 'all' && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Current Occupancy</div>
              <div className="text-2xl font-bold">{stats.current.occupancy_rate.toFixed(1)}%</div>
              <div className="flex items-center gap-1 text-xs mt-1">
                {stats.trend === 'up' && <TrendingUp className="h-3 w-3 text-red-500" />}
                {stats.trend === 'down' && <TrendingDown className="h-3 w-3 text-green-500" />}
                {stats.trend === 'stable' && <Minus className="h-3 w-3 text-muted-foreground" />}
                <span className={stats.trend === 'up' ? 'text-red-500' : stats.trend === 'down' ? 'text-green-500' : 'text-muted-foreground'}>
                  {stats.trendValue.toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Available Units</div>
              <div className="text-2xl font-bold">{stats.current.available_units}</div>
              <div className="text-xs text-muted-foreground mt-1">
                of {stats.current.total_units} total
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Avg Occupancy</div>
              <div className="text-2xl font-bold">{stats.avgOccupancyRate}%</div>
              <div className="text-xs text-muted-foreground mt-1">
                ~{stats.avgAvailable} units avg
              </div>
            </div>
          </div>
        )}

        {history.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No historical data available yet. Data will be collected over time.
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Occupancy Rate Over Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                {selectedLocation === 'all' ? (
                  <LineChart data={multiLocationData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="time" className="text-xs" />
                    <YAxis domain={[0, 100]} className="text-xs" />
                    <Tooltip 
                      contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                      formatter={(value: number) => `${value.toFixed(1)}%`}
                    />
                    <Legend />
                    {locationNames.map((name, index) => (
                      <Line 
                        key={name}
                        type="monotone" 
                        dataKey={name}
                        stroke={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                    ))}
                  </LineChart>
                ) : (
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="time" className="text-xs" />
                    <YAxis domain={[0, 100]} className="text-xs" />
                    <Tooltip 
                      contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                      formatter={(value: number) => `${value.toFixed(1)}%`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="occupancyRate" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>

            {selectedLocation !== 'all' && (
              <div>
                <h3 className="text-sm font-semibold mb-3">Available vs Occupied Units</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="time" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="available" 
                      stackId="1"
                      stroke="#22c55e" 
                      fill="#22c55e" 
                      fillOpacity={0.6}
                      name="Available"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="occupied" 
                      stackId="1"
                      stroke="#ef4444" 
                      fill="#ef4444" 
                      fillOpacity={0.6}
                      name="Occupied"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
