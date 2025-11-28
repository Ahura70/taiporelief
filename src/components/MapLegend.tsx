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
          <div className="w-4 h-4 rounded-full bg-[#22c55e] border-2 border-white shadow-sm" aria-hidden="true" />
          <span className="text-foreground">{openText}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full bg-[#ef4444] border-2 border-white shadow-sm" aria-hidden="true" />
          <span className="text-foreground">{closedText}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full bg-[#3b82f6] border-2 border-white shadow-sm" aria-hidden="true" />
          <span className="text-foreground">{noHoursText}</span>
        </div>
      </div>
    </div>
  );
};
