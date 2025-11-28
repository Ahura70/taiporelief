import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface QuickCopyButtonProps {
  text: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  successMessage?: string;
}

export const QuickCopyButton = ({
  text,
  label,
  variant = 'default',
  size = 'sm',
  successMessage = 'Copied!',
}: QuickCopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: successMessage,
        description: text,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      toast({
        title: 'Copy failed',
        description: 'Please try again',
        variant: 'destructive',
        duration: 2000,
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      size={size}
      className="gap-2 min-h-[44px]"
      aria-label={`Copy ${label || text}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          {label && <span>{successMessage}</span>}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {label && <span>{label}</span>}
        </>
      )}
    </Button>
  );
};
