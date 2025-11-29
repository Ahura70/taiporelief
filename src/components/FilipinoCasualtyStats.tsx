import { Users, Heart, AlertTriangle, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FilipinoCasualtyStatsProps {
  title: string;
  safeLabel: string;
  injuredLabel: string;
  missingLabel: string;
  verificationLabel: string;
  sourceLabel: string;
  lastUpdatedLabel: string;
}

export const FilipinoCasualtyStats = ({
  title,
  safeLabel,
  injuredLabel,
  missingLabel,
  verificationLabel,
  sourceLabel,
  lastUpdatedLabel
}: FilipinoCasualtyStatsProps) => {
  // Data from Philippine Consulate (HKPCG-ADV-76-11-25, 28 November 2025)
  const stats = [
    {
      icon: Heart,
      label: safeLabel,
      value: 63,
      description: 'Displaced but no injury and danger to life',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30'
    },
    {
      icon: AlertTriangle,
      label: injuredLabel,
      value: 1,
      description: 'Requires medical assistance',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    },
    {
      icon: Users,
      label: missingLabel,
      value: 1,
      description: 'Reported missing and cannot be contacted',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30'
    },
    {
      icon: HelpCircle,
      label: verificationLabel,
      value: 28,
      description: 'Likely residents, not reported missing but whereabouts unknown',
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-50 dark:bg-gray-950/30'
    }
  ];

  return (
    <Card className="w-full bg-card border-border overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-red-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇵🇭</span>
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>
        <p className="text-xs text-white/90 mt-1">
          {sourceLabel}: Philippine Consulate General Hong Kong
        </p>
        <p className="text-xs text-white/80">
          {lastUpdatedLabel}: 28 November 2025
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`${stat.bgColor} rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105`}
            >
              <div className="flex items-start gap-3">
                <div className={`${stat.color} mt-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 pb-4 text-xs text-muted-foreground text-center border-t border-border pt-3 mt-2">
        ℹ️ Data based on Philippine Consulate Advisory HKPCG-ADV-76-11-25
      </div>
    </Card>
  );
};