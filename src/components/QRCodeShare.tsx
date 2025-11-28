import { QRCodeSVG } from 'qrcode.react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Resource } from '@/lib/translations';

interface QRCodeShareProps {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const QRCodeShare = ({ resource, isOpen, onClose, title }: QRCodeShareProps) => {
  // Create a shareable text with resource details
  const shareText = `${resource.icon} ${resource.title}\n${resource.desc}\n\n${resource.contacts.map(c => `${c.l}: ${c.v}`).join('\n')}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" aria-describedby="qr-description">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div id="qr-description" className="sr-only">
          QR code for {resource.title}. Scan this code to share resource information.
        </div>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG 
              value={shareText}
              size={256}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Scan this QR code to share resource information
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
