import { useState } from 'react';
import { FileText, CheckCircle2, Circle, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface DocumentChecklistHelperProps {
  title: string;
  description: string;
  philippinesTitle: string;
  indonesiaTitle: string;
  philippinesCenterNote: string;
  indonesiaClarificationNote: string;
  currentLang: string;
  shareLabel: string;
  shareWhatsApp: string;
  shareLink: string;
  linkCopied: string;
}

const checklistItems = {
  philippines: {
    zh: [
      '填寫菲律賓護照申請表格',
      '準備2張護照尺寸照片 (白色背景)',
      '舊護照或警方遺失報告',
      '香港身份證副本',
      '僱傭合約副本',
      '繳付護照費用 (港幣 370 元)',
      '預約領事館會面'
    ],
    en: [
      'Complete Philippine passport application form',
      'Prepare 2 passport-sized photos (white background)',
      'Old passport or police loss report',
      'HKID copy',
      'Employment contract copy',
      'Pay passport fee (HKD 370)',
      'Schedule consulate appointment'
    ],
    tl: [
      'Kumpletuhin ang Philippine passport application form',
      'Maghanda ng 2 passport-sized photos (puting background)',
      'Lumang passport o police loss report',
      'HKID kopya',
      'Kopya ng employment contract',
      'Bayaran ang passport fee (HKD 370)',
      'Mag-schedule ng consulate appointment'
    ],
    id: [
      'Lengkapi formulir aplikasi paspor Filipina',
      'Siapkan 2 foto ukuran paspor (latar putih)',
      'Paspor lama atau laporan kehilangan polisi',
      'Salinan HKID',
      'Salinan kontrak kerja',
      'Bayar biaya paspor (HKD 370)',
      'Jadwalkan janji temu konsulat'
    ]
  },
  indonesia: {
    zh: [
      '填寫印尼護照申請表格',
      '準備6張護照尺寸照片 (紅色或藍色背景)',
      '舊護照或警方遺失報告',
      '香港身份證副本',
      '僱傭合約副本',
      'KITAS/KTKLN 副本',
      '繳付護照費用 (港幣 600-800 元)',
      '預約領事館會面',
      '提供指紋及簽名'
    ],
    en: [
      'Complete Indonesian passport application form',
      'Prepare 6 passport-sized photos (red or blue background)',
      'Old passport or police loss report',
      'HKID copy',
      'Employment contract copy',
      'KITAS/KTKLN copy',
      'Pay passport fee (HKD 600-800)',
      'Schedule consulate appointment',
      'Provide fingerprints and signature'
    ],
    tl: [
      'Kumpletuhin ang Indonesian passport application form',
      'Maghanda ng 6 passport-sized photos (pula o asul na background)',
      'Lumang passport o police loss report',
      'HKID kopya',
      'Kopya ng employment contract',
      'KITAS/KTKLN kopya',
      'Bayaran ang passport fee (HKD 600-800)',
      'Mag-schedule ng consulate appointment',
      'Magbigay ng fingerprints at signature'
    ],
    id: [
      'Lengkapi formulir aplikasi paspor Indonesia',
      'Siapkan 6 foto ukuran paspor (latar merah atau biru)',
      'Paspor lama atau laporan kehilangan polisi',
      'Salinan HKID',
      'Salinan kontrak kerja',
      'Salinan KITAS/KTKLN',
      'Bayar biaya paspor (HKD 600-800)',
      'Jadwalkan janji temu konsulat',
      'Berikan sidik jari dan tanda tangan'
    ]
  }
};

export const DocumentChecklistHelper = ({
  title,
  description,
  philippinesTitle,
  indonesiaTitle,
  philippinesCenterNote,
  indonesiaClarificationNote,
  currentLang,
  shareLabel,
  shareWhatsApp,
  shareLink,
  linkCopied
}: DocumentChecklistHelperProps) => {
  const { toast } = useToast();
  const [philippinesChecked, setPhilippinesChecked] = useState<boolean[]>(
    new Array(checklistItems.philippines[currentLang as keyof typeof checklistItems.philippines].length).fill(false)
  );
  const [indonesiaChecked, setIndonesiaChecked] = useState<boolean[]>(
    new Array(checklistItems.indonesia[currentLang as keyof typeof checklistItems.indonesia].length).fill(false)
  );

  const togglePhilippinesItem = (index: number) => {
    const newChecked = [...philippinesChecked];
    newChecked[index] = !newChecked[index];
    setPhilippinesChecked(newChecked);
  };

  const toggleIndonesiaItem = (index: number) => {
    const newChecked = [...indonesiaChecked];
    newChecked[index] = !newChecked[index];
    setIndonesiaChecked(newChecked);
  };

  const resetChecklists = () => {
    setPhilippinesChecked(new Array(philippinesChecked.length).fill(false));
    setIndonesiaChecked(new Array(indonesiaChecked.length).fill(false));
  };

  const philippinesList = checklistItems.philippines[currentLang as keyof typeof checklistItems.philippines];
  const indonesiaList = checklistItems.indonesia[currentLang as keyof typeof checklistItems.indonesia];
  const philippinesProgress = philippinesChecked.filter(Boolean).length;
  const indonesiaProgress = indonesiaChecked.filter(Boolean).length;

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
            <Button variant="ghost" size="sm" onClick={resetChecklists}>
              {currentLang === 'zh' ? '重設' : currentLang === 'tl' ? 'I-reset' : currentLang === 'id' ? 'Reset' : 'Reset'}
            </Button>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="philippines">
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full pr-4">
                <span>🇵🇭 {philippinesTitle}</span>
                <span className="text-sm text-muted-foreground">
                  {philippinesProgress}/{philippinesList.length}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100 whitespace-pre-line">
                  {philippinesCenterNote}
                </p>
              </div>
              <div className="space-y-3 pt-2">
                {philippinesList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => togglePhilippinesItem(index)}
                  >
                    <Checkbox
                      checked={philippinesChecked[index]}
                      onCheckedChange={() => togglePhilippinesItem(index)}
                      className="mt-0.5"
                    />
                    <span className={`text-sm flex-1 ${philippinesChecked[index] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {item}
                    </span>
                    {philippinesChecked[index] && (
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="indonesia">
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full pr-4">
                <span>🇮🇩 {indonesiaTitle}</span>
                <span className="text-sm text-muted-foreground">
                  {indonesiaProgress}/{indonesiaList.length}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-900 dark:text-amber-100 whitespace-pre-line">
                  {indonesiaClarificationNote}
                </p>
              </div>
              <div className="space-y-3 pt-2">
                {indonesiaList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => toggleIndonesiaItem(index)}
                  >
                    <Checkbox
                      checked={indonesiaChecked[index]}
                      onCheckedChange={() => toggleIndonesiaItem(index)}
                      className="mt-0.5"
                    />
                    <span className={`text-sm flex-1 ${indonesiaChecked[index] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {item}
                    </span>
                    {indonesiaChecked[index] && (
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
