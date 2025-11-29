import { FileText, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface DocumentChecklistHelperProps {
  title: string;
  description: string;
  philippinesTitle: string;
  indonesiaTitle: string;
  philippinesCenterNote: string;
  indonesiaClarificationNote: string;
  shareLabel: string;
  shareWhatsApp: string;
  shareLink: string;
  linkCopied: string;
}

export const DocumentChecklistHelper = ({
  title,
  description,
  philippinesTitle,
  indonesiaTitle,
  philippinesCenterNote,
  indonesiaClarificationNote,
  shareLabel,
  shareWhatsApp,
  shareLink,
  linkCopied
}: DocumentChecklistHelperProps) => {
  const { toast } = useToast();

  const handleShare = (method: 'whatsapp' | 'copy') => {
    const url = window.location.href;
    const text = `${title}\n\n${philippinesTitle}:\n${philippinesCenterNote}\n\n${indonesiaTitle}:\n${indonesiaClarificationNote}\n\n${url}`;
    
    if (method === 'whatsapp') {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    } else if (method === 'copy') {
      navigator.clipboard.writeText(text);
      toast({
        description: linkCopied,
      });
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  {shareLabel}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
                  {shareWhatsApp}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('copy')}>
                  {shareLink}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
            <span>🇵🇭</span> {philippinesTitle}
          </h3>
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100 whitespace-pre-line">
              {philippinesCenterNote}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
            <span>🇮🇩</span> {indonesiaTitle}
          </h3>
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="text-sm text-amber-900 dark:text-amber-100 whitespace-pre-line">
              {indonesiaClarificationNote}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
