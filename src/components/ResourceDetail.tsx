import { useState } from 'react';
import { Resource } from '@/lib/translations';
import { X, Share2, MessageCircle, Mail, Link2, Navigation, QrCode, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { openDirections } from '@/lib/mapsHelper';
import { QRCodeShare } from './QRCodeShare';
import { useBookmarks } from '@/hooks/useBookmarks';
import { OptimizedImage } from './OptimizedImage';

interface ResourceDetailProps {
  resource: Resource | null;
  onClose: () => void;
  copyText: string;
  copiedText: string;
  closeText: string;
  shareText: string;
  shareWhatsAppText: string;
  shareSMSText: string;
  shareLinkText: string;
  linkCopiedText: string;
  getDirectionsText: string;
  bookmarkText: string;
  bookmarkedText: string;
  qrCodeText: string;
}

export const ResourceDetail = ({
  resource,
  onClose,
  copyText,
  copiedText,
  closeText,
  shareText,
  shareWhatsAppText,
  shareSMSText,
  shareLinkText,
  linkCopiedText,
  getDirectionsText,
  bookmarkText,
  bookmarkedText,
  qrCodeText
}: ResourceDetailProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQR, setShowQR] = useState(false);
  const { toast } = useToast();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!resource) return null;

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const createShareText = () => {
    const contactsList = resource.contacts
      .map(c => `${c.l}: ${c.v}`)
      .join('\n');
    return `${resource.title}\n${resource.desc}\n\n${contactsList}\n\n${window.location.href}`;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(createShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleShareSMS = () => {
    const text = encodeURIComponent(createShareText());
    window.location.href = `sms:?body=${text}`;
  };

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: linkCopiedText,
        duration: 2000,
      });
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const formatContactLink = (value: string, label: string) => {
    // Phone numbers - enable tel: links
    if (/^\d{4}\s?\d{3,4}$/.test(value) || /^\+?\d{3,4}\s?\d{4}\s?\d{4}$/.test(value)) {
      const cleanNumber = value.replace(/\s/g, '');
      return { type: 'tel', href: `tel:${cleanNumber}`, display: value };
    }
    
    // WhatsApp numbers (check label or format)
    if (label.toLowerCase().includes('whatsapp') || label.toLowerCase().includes('fps')) {
      const cleanNumber = value.replace(/\s/g, '').replace('+', '');
      return { type: 'whatsapp', href: `https://wa.me/${cleanNumber}`, display: value };
    }
    
    // Telegram numbers (check label)
    if (label.toLowerCase().includes('telegram')) {
      const cleanNumber = value.replace(/\s/g, '').replace('+', '');
      return { type: 'telegram', href: `https://t.me/${cleanNumber}`, display: value };
    }
    
    // Default - no link
    return { type: 'text', href: null, display: value };
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-title"
    >
      <div className="bg-card w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-auto animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            {resource.iconImage ? (
              <OptimizedImage
                src={resource.iconImage}
                alt=""
                className="w-12 h-12 flex-shrink-0"
                fallback={resource.icon}
              />
            ) : (
              <div 
                className={`text-4xl flex-shrink-0 ${resource.icon === '✚' ? 'text-red-600' : ''}`} 
                aria-hidden="true"
              >
                {resource.icon}
              </div>
            )}
            <div>
              <h2 id="resource-title" className="text-xl font-bold text-card-foreground">{resource.title}</h2>
              <p className="text-sm text-muted-foreground">{resource.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors flex-shrink-0"
            aria-label={closeText}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {resource.info && (
            <div className="bg-warning/20 border border-warning/30 rounded-xl p-4 text-sm">
              {resource.info.map((info, idx) => (
                <p key={idx}>{info}</p>
              ))}
            </div>
          )}

          {resource.contacts.map((contact, idx) => {
            const linkInfo = formatContactLink(contact.v, contact.l);
            
            return (
              <div key={idx} className="w-full bg-secondary hover:bg-accent rounded-xl p-4 transition-all">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-xs uppercase text-muted-foreground mb-1">
                      {contact.l}
                    </div>
                    {linkInfo.href ? (
                      <a
                        href={linkInfo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-card-foreground hover:text-primary underline"
                      >
                        {linkInfo.display}
                      </a>
                    ) : (
                      <div className="font-semibold text-card-foreground">{linkInfo.display}</div>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopy(contact.v, idx)}
                    className={`text-sm font-bold px-3 py-1 rounded-full transition-colors ${
                      copiedIndex === idx
                        ? 'bg-success text-white'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {copiedIndex === idx ? copiedText : copyText}
                  </button>
                </div>
              </div>
            );
          })}

          {resource.coordinates && (
            <div className="mb-4">
              <Button
                onClick={() => openDirections(resource)}
                className="w-full gap-2 bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Navigation className="w-5 h-5" />
                {getDirectionsText}
              </Button>
            </div>
          )}

          <div className="border-t border-border pt-4 mt-4">
            <div className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Share2 className="w-4 h-4" aria-hidden="true" />
              {shareText}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <Button
                onClick={handleShareWhatsApp}
                variant="outline"
                className="flex flex-col items-center gap-1 h-auto py-3"
                aria-label={`Share via ${shareWhatsAppText}`}
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs">{shareWhatsAppText}</span>
              </Button>
              <Button
                onClick={handleShareSMS}
                variant="outline"
                className="flex flex-col items-center gap-1 h-auto py-3"
                aria-label={`Share via ${shareSMSText}`}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs">{shareSMSText}</span>
              </Button>
              <Button
                onClick={handleShareLink}
                variant="outline"
                className="flex flex-col items-center gap-1 h-auto py-3"
                aria-label={shareLinkText}
              >
                <Link2 className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs">{shareLinkText}</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => setShowQR(true)}
                variant="outline"
                className="flex items-center gap-2"
                aria-label={qrCodeText}
              >
                <QrCode className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">{qrCodeText}</span>
              </Button>
              <Button
                onClick={() => {
                  toggleBookmark(resource);
                  toast({
                    title: isBookmarked(resource) ? bookmarkedText : bookmarkText,
                    duration: 2000,
                  });
                }}
                variant={isBookmarked(resource) ? "default" : "outline"}
                className="flex items-center gap-2"
                aria-label={isBookmarked(resource) ? bookmarkedText : bookmarkText}
                aria-pressed={isBookmarked(resource)}
              >
                <Bookmark className="w-4 h-4" aria-hidden="true" fill={isBookmarked(resource) ? "currentColor" : "none"} />
                <span className="text-sm">{isBookmarked(resource) ? bookmarkedText : bookmarkText}</span>
              </Button>
            </div>
          </div>

          <Button onClick={onClose} variant="secondary" className="w-full">
            {closeText}
          </Button>
        </div>
      </div>
      
      {resource && (
        <QRCodeShare
          resource={resource}
          isOpen={showQR}
          onClose={() => setShowQR(false)}
          title={qrCodeText}
        />
      )}
    </div>
  );
};
