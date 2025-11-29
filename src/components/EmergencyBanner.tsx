import { MessageCircle } from 'lucide-react';

interface EmergencyBannerProps {
  text: string;
  whatsappText: string;
}

export const EmergencyBanner = ({ text, whatsappText }: EmergencyBannerProps) => {
  return (
    <div className="bg-warning/20 border-b border-warning/30 px-5 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-sm font-medium text-foreground">
        <span>{text}</span>
        <span className="hidden sm:inline text-warning/50">|</span>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
          <span>{whatsappText}</span>
        </div>
      </div>
    </div>
  );
};
