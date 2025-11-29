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
        <a 
          href={`https://wa.me/85292132388`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
          <span>{whatsappText}</span>
        </a>
      </div>
    </div>
  );
};
