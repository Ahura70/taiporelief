interface NewsTickerProps {
  text: string;
}

export const NewsTicker = ({ text }: NewsTickerProps) => {
  return (
    <div className="bg-destructive/10 border-y border-destructive/30 px-5 py-2 overflow-hidden">
      <div className="animate-pulse">
        <p className="text-sm font-medium text-destructive text-center">
          {text}
        </p>
      </div>
    </div>
  );
};
