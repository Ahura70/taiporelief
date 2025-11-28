import { useState } from 'react';
import { Resource } from '@/lib/translations';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceDetailProps {
  resource: Resource | null;
  onClose: () => void;
  copyText: string;
  copiedText: string;
  closeText: string;
}

export const ResourceDetail = ({
  resource,
  onClose,
  copyText,
  copiedText,
  closeText
}: ResourceDetailProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-card w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-auto animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-4xl">{resource.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-card-foreground">{resource.title}</h2>
              <p className="text-sm text-muted-foreground">{resource.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
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

          <Button onClick={onClose} variant="secondary" className="w-full">
            {closeText}
          </Button>
        </div>
      </div>
    </div>
  );
};
