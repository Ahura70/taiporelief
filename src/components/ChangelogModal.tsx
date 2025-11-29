import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sparkles, X } from 'lucide-react';
import { Language } from '@/lib/translations';
import { changelog, getChangelogTitle, getChangelogSubtitle } from '@/lib/changelog';

interface ChangelogModalProps {
  open: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ChangelogModal = ({ open, onClose, currentLang }: ChangelogModalProps) => {
  const closeText = currentLang === 'zh' ? '關閉' : currentLang === 'tl' ? 'Isara' : currentLang === 'id' ? 'Tutup' : 'Close';
  const gotItText = currentLang === 'zh' ? '知道了' : currentLang === 'tl' ? 'Naintindihan ko' : currentLang === 'id' ? 'Mengerti' : 'Got it';

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">{getChangelogTitle(currentLang)}</DialogTitle>
                <DialogDescription className="text-sm">
                  {getChangelogSubtitle(currentLang)}
                </DialogDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
              aria-label={closeText}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="px-6 pb-6 max-h-[calc(80vh-140px)]">
          <div className="space-y-6">
            {changelog.map((entry, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-3 pb-2 border-b border-border">
                  <span className="text-lg font-bold text-primary">{entry.version}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(entry.date).toLocaleDateString(
                      currentLang === 'zh' ? 'zh-HK' : 
                      currentLang === 'tl' ? 'tl-PH' : 
                      currentLang === 'id' ? 'id-ID' : 'en-US',
                      { year: 'numeric', month: 'short', day: 'numeric' }
                    )}
                  </span>
                </div>
                <ul className="space-y-2">
                  {entry.changes[currentLang].map((change, changeIdx) => (
                    <li key={changeIdx} className="text-sm leading-relaxed pl-6 relative">
                      <span className="absolute left-0 top-0">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-6 pt-4 border-t border-border bg-muted/30">
          <Button onClick={onClose} className="w-full" size="lg">
            {gotItText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
