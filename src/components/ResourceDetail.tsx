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

          {resource.contacts.map((contact, idx) => (
            <button
              key={idx}
              onClick={() => handleCopy(contact.v, idx)}
              className="w-full bg-secondary hover:bg-accent rounded-xl p-4 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-xs uppercase text-muted-foreground mb-1">
                    {contact.l}
                  </div>
                  <div className="font-semibold text-card-foreground">{contact.v}</div>
                </div>
                <div
                  className={`text-sm font-bold px-3 py-1 rounded-full transition-colors ${
                    copiedIndex === idx
                      ? 'bg-success text-white'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {copiedIndex === idx ? copiedText : copyText}
                </div>
              </div>
            </button>
          ))}

          <Button onClick={onClose} variant="secondary" className="w-full">
            {closeText}
          </Button>
        </div>
      </div>
    </div>
  );
};
