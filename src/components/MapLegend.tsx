interface MapLegendProps {
  openText: string;
  closedText: string;
  noHoursText: string;
}

export const MapLegend = ({ openText, closedText, noHoursText }: MapLegendProps) => {
  return (
    <div 
      className="bg-card border border-border rounded-lg p-3 shadow-sm"
      role="region"
      aria-label="Map legend"
    >
      <h3 className="text-sm font-semibold mb-2 text-foreground">Legend</h3>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ background: 'hsl(0, 0%, 25%)' }} aria-hidden="true" />
          <span className="text-foreground">{openText}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ background: 'hsl(0, 0%, 45%)' }} aria-hidden="true" />
          <span className="text-foreground">{closedText}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ background: 'hsl(0, 0%, 60%)' }} aria-hidden="true" />
          <span className="text-foreground">{noHoursText}</span>
        </div>
      </div>
    </div>
  );
};
