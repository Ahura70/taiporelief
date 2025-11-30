import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Eye, RefreshCw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const OGImagePreview = () => {
  const { currentLang } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const generatePreview = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-og-image?lang=${currentLang}&t=${Date.now()}`;
      setImageUrl(url);
      setShowPreview(true);
      toast({
        title: 'Preview Generated',
        description: 'Social media preview image loaded',
      });
    } catch (error) {
      console.error('Failed to generate preview:', error);
      toast({
        title: 'Preview Failed',
        description: 'Could not generate preview image',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `taiporelief-og-${currentLang}.png`;
      link.click();
    }
  };

  const labels = {
    en: {
      title: 'Social Media Preview',
      description: 'See how your link appears when shared',
      generate: 'Generate Preview',
      download: 'Download Image',
      regenerate: 'Regenerate',
    },
    'zh-Hant': {
      title: '社交媒體預覽',
      description: '查看分享連結的顯示效果',
      generate: '生成預覽',
      download: '下載圖片',
      regenerate: '重新生成',
    },
    tl: {
      title: 'Social Media Preview',
      description: 'Tingnan kung paano lalabas ang iyong link kapag ibinahagi',
      generate: 'Generate Preview',
      download: 'I-download ang Larawan',
      regenerate: 'I-regenerate',
    },
    id: {
      title: 'Pratinjau Media Sosial',
      description: 'Lihat bagaimana tautan Anda muncul saat dibagikan',
      generate: 'Buat Pratinjau',
      download: 'Unduh Gambar',
      regenerate: 'Buat Ulang',
    },
  };

  const t = labels[currentLang as keyof typeof labels] || labels.en;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          {t.title}
        </CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showPreview ? (
          <Button onClick={generatePreview} disabled={loading} className="w-full">
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" />
                {t.generate}
              </>
            )}
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden bg-muted">
              <img
                src={imageUrl}
                alt="Social media preview"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={generatePreview} disabled={loading} variant="outline" className="flex-1">
                <RefreshCw className="h-4 w-4 mr-2" />
                {t.regenerate}
              </Button>
              <Button onClick={downloadImage} variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                {t.download}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
