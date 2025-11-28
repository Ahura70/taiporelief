interface EmergencyBannerProps {
  text: string;
}

export const EmergencyBanner = ({ text }: EmergencyBannerProps) => {
  return (
    <div className="bg-warning/20 border-b border-warning/30 px-5 py-3 text-center text-sm font-medium text-foreground">
      {text}
    </div>
  );
};
