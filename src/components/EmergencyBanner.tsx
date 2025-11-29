import { MessageCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface EmergencyBannerProps {
  text: string;
  whatsappText: string;
}

export const EmergencyBanner = ({ text, whatsappText }: EmergencyBannerProps) => {
  const whatsappUrl = 'https://wa.me/85292132388';
  
  return (
    <div className="bg-warning/20 border-b border-warning/30 px-5 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-sm font-medium text-foreground">
        <span>{text}</span>
        <span className="hidden sm:inline text-warning/50">|</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            <span>{whatsappText}</span>
          </div>
          <div className="bg-white p-1 rounded border border-border">
            <QRCodeSVG 
              value={whatsappUrl}
              size={40}
              level="M"
              includeMargin={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
