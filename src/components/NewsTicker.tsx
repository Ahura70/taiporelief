interface NewsItem {
  text: string;
  source?: string;
}

interface NewsTickerProps {
  newsItems: NewsItem[];
}

export const NewsTicker = ({ newsItems }: NewsTickerProps) => {
  return (
    <div className="bg-destructive/10 border-y border-destructive/30 py-3 overflow-hidden relative">
      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...newsItems, ...newsItems].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2 px-4">
            <span className="text-sm font-bold text-destructive">🔴</span>
            <span className="text-sm font-medium text-destructive">
              {item.text}
            </span>
            {item.source && (
              <span className="text-xs text-destructive/70 font-semibold">
                [{item.source}]
              </span>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
