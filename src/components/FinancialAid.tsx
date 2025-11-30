import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Home, Heart, CheckCircle2, AlertCircle, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

interface FinancialAidProps {
  title: string;
}

export const FinancialAid = ({ title }: FinancialAidProps) => {
  const { currentLang } = useLanguage();
  const t = translations[currentLang];

  return (
    <div className="space-y-6" id="financial-aid">
      <div className="flex items-center gap-3">
        <DollarSign className="w-7 h-7 text-primary" />
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            {t.financialAidOverview}
          </CardTitle>
          <CardDescription>{t.financialAidDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.emergencyCashTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$10,000</p>
              <p className="text-sm text-muted-foreground">{t.perHousehold}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.deceasedSubsidyTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$200,000</p>
              <p className="text-sm text-muted-foreground">{t.perDeceased}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.livingAllowanceTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$50,000</p>
              <p className="text-sm text-muted-foreground">{t.perHousehold}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium mb-1">{t.needHelp}</p>
              <p className="text-muted-foreground">{t.financialAidHotline}: <a href="tel:18111" className="text-primary hover:underline">18111</a></p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="emergency" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="emergency">{t.emergencyCash}</TabsTrigger>
          <TabsTrigger value="deceased">{t.deceasedSubsidy}</TabsTrigger>
          <TabsTrigger value="living">{t.livingAllowance}</TabsTrigger>
        </TabsList>

        {/* Emergency Cash Subsidy */}
        <TabsContent value="emergency">
          <Card>
            <CardHeader>
              <CardTitle>{t.emergencyCashTitle}</CardTitle>
              <CardDescription>{t.emergencyCashDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.emergencyCashEligibility1}</li>
                  <li>{t.emergencyCashEligibility2}</li>
                  <li>{t.emergencyCashEligibility3}</li>
                </ul>
              </div>

              <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <ExternalLink className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-2 text-primary">
                    {currentLang === 'zh' ? '如何申請' :
                     currentLang === 'tl' ? 'Paano Mag-apply' :
                     currentLang === 'id' ? 'Cara Mendaftar' :
                     'How to Apply'}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {currentLang === 'zh' ? '請致電援助熱線或親臨政府服務中心申請：' :
                     currentLang === 'tl' ? 'Tumawag sa aid hotline o bisitahin ang government service center para mag-apply:' :
                     currentLang === 'id' ? 'Hubungi hotline bantuan atau kunjungi pusat layanan pemerintah untuk mendaftar:' :
                     'Call the aid hotline or visit the government service center to apply:'}
                  </p>
                  <p className="font-medium">
                    <a href="tel:18111" className="text-primary hover:underline">18111</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Deceased Subsidy */}
        <TabsContent value="deceased">
          <Card>
            <CardHeader>
              <CardTitle>{t.deceasedSubsidyTitle}</CardTitle>
              <CardDescription>{t.deceasedSubsidyDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.deceasedSubsidyEligibility1}</li>
                  <li>{t.deceasedSubsidyEligibility2}</li>
                  <li>{t.deceasedSubsidyEligibility3}</li>
                </ul>
              </div>

              <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <ExternalLink className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-2 text-primary">
                    {currentLang === 'zh' ? '如何申請' :
                     currentLang === 'tl' ? 'Paano Mag-apply' :
                     currentLang === 'id' ? 'Cara Mendaftar' :
                     'How to Apply'}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {currentLang === 'zh' ? '請致電援助熱線或親臨政府服務中心申請：' :
                     currentLang === 'tl' ? 'Tumawag sa aid hotline o bisitahin ang government service center para mag-apply:' :
                     currentLang === 'id' ? 'Hubungi hotline bantuan atau kunjungi pusat layanan pemerintah untuk mendaftar:' :
                     'Call the aid hotline or visit the government service center to apply:'}
                  </p>
                  <p className="font-medium">
                    <a href="tel:18111" className="text-primary hover:underline">18111</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Living Allowance */}
        <TabsContent value="living">
          <Card>
            <CardHeader>
              <CardTitle>{t.livingAllowanceTitle}</CardTitle>
              <CardDescription>{t.livingAllowanceDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.livingAllowanceEligibility1}</li>
                  <li>{t.livingAllowanceEligibility2}</li>
                  <li>{t.livingAllowanceEligibility3}</li>
                </ul>
              </div>

              <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <ExternalLink className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-2 text-primary">
                    {currentLang === 'zh' ? '如何申請' :
                     currentLang === 'tl' ? 'Paano Mag-apply' :
                     currentLang === 'id' ? 'Cara Mendaftar' :
                     'How to Apply'}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {currentLang === 'zh' ? '請致電援助熱線或親臨政府服務中心申請：' :
                     currentLang === 'tl' ? 'Tumawag sa aid hotline o bisitahin ang government service center para mag-apply:' :
                     currentLang === 'id' ? 'Hubungi hotline bantuan atau kunjungi pusat layanan pemerintah untuk mendaftar:' :
                     'Call the aid hotline or visit the government service center to apply:'}
                  </p>
                  <p className="font-medium">
                    <a href="tel:18111" className="text-primary hover:underline">18111</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
