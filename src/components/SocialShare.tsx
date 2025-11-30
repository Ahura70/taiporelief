import { Share2, Facebook, Twitter, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const SocialShare = () => {
  const { toast } = useToast();
  const { currentLang } = useLanguage();
  
  const shareTexts = {
    en: {
      title: 'Tai Po Fire Relief - Hong Kong Fire Emergency Support',
      text: '24/7 multilingual emergency support hub for fire victims. Financial aid, housing, counseling available.',
      copied: 'Link copied to clipboard!',
      shared: 'Opening share options...',
      shareButton: 'Share',
    },
    'zh-Hant': {
      title: '大埔火災援助 - 香港火災緊急支援',
      text: '24/7多語言緊急支援中心，為火災受害者提供財政援助、住房、輔導服務。',
      copied: '連結已複製到剪貼簿！',
      shared: '正在打開分享選項...',
      shareButton: '分享',
    },
    tl: {
      title: 'Tai Po Fire Relief - Hong Kong Fire Emergency Support',
      text: '24/7 multilingual na emergency support hub para sa mga biktima ng sunog. May financial aid, housing, at counseling.',
      copied: 'Nakopya na ang link sa clipboard!',
      shared: 'Binubuksan ang mga pagpipilian sa pagbabahagi...',
      shareButton: 'Ibahagi',
    },
    id: {
      title: 'Bantuan Kebakaran Tai Po - Dukungan Darurat Kebakaran Hong Kong',
      text: 'Hub dukungan darurat multibahasa 24/7 untuk korban kebakaran. Tersedia bantuan keuangan, perumahan, konseling.',
      copied: 'Tautan disalin ke clipboard!',
      shared: 'Membuka opsi berbagi...',
      shareButton: 'Bagikan',
    },
  };

  const currentText = shareTexts[currentLang as keyof typeof shareTexts] || shareTexts.en;
  const shareUrl = window.location.href;

  const handleShare = async (platform?: string) => {
    const shareData = {
      title: currentText.title,
      text: currentText.text,
      url: shareUrl,
    };

    if (platform === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentText.text)}&url=${encodeURIComponent(shareUrl)}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else if (platform === 'whatsapp') {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${currentText.text} ${shareUrl}`)}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else if (platform === 'telegram') {
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(currentText.text)}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: currentText.copied,
          duration: 2000,
        });
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else {
      // Use native share if available
      if (navigator.share) {
        try {
          await navigator.share(shareData);
          toast({
            title: currentText.shared,
            duration: 2000,
          });
        } catch (err) {
          if ((err as Error).name !== 'AbortError') {
            console.error('Error sharing:', err);
          }
        }
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50"
        >
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">{currentText.shareButton}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => handleShare('facebook')} className="cursor-pointer gap-2">
          <Facebook className="h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('twitter')} className="cursor-pointer gap-2">
          <Twitter className="h-4 w-4" />
          X (Twitter)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('whatsapp')} className="cursor-pointer gap-2">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('telegram')} className="cursor-pointer gap-2">
          <Send className="h-4 w-4" />
          Telegram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('copy')} className="cursor-pointer gap-2">
          <LinkIcon className="h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
        {navigator.share && (
          <DropdownMenuItem onClick={() => handleShare()} className="cursor-pointer gap-2">
            <Share2 className="h-4 w-4" />
            More Options
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
