interface NewsTickerProps {
  text: string;
}

export const NewsTicker = ({ text }: NewsTickerProps) => {
  return (
    <div className="w-full bg-red-600 dark:bg-red-700 text-white overflow-hidden relative">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          <span className="ticker-item">{text}</span>
          <span className="ticker-item">{text}</span>
          <span className="ticker-item">{text}</span>
        </div>
      </div>
      <style>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 0.75rem 0;
        }

        .ticker-content {
          display: flex;
          animation: scroll-left 45s linear infinite;
          will-change: transform;
        }

        .ticker-item {
          flex-shrink: 0;
          padding: 0 4rem;
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.875rem;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-content {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .ticker-item {
            font-size: 0.75rem;
            padding: 0 2rem;
          }
        }
      `}</style>
    </div>
  );
};
