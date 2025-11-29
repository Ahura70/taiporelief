import { ExternalLink, Users, MapPin, FileSearch, Globe, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafetyReports } from '@/hooks/useSafetyReports';
import { Skeleton } from '@/components/ui/skeleton';

interface CommunityResourcesProps {
  title: string;
  safetyTrackingTitle: string;
  safetyTrackingDesc: string;
  volunteerTitle: string;
  volunteerDesc: string;
  reportSafetyLabel: string;
  reportMissingLabel: string;
  suppliesMapLabel: string;
  govtWebsiteLabel: string;
  mainWebsiteLabel: string;
  volunteerEnglishLabel: string;
  volunteerTelegramLabel: string;
  dropOffLabel: string;
  statusLabel: string;
  safeReportsLabel: string;
  missingReportsLabel: string;
  liveStatusLabel: string;
}

export const CommunityResources = ({
  title,
  safetyTrackingTitle,
  safetyTrackingDesc,
  volunteerTitle,
  volunteerDesc,
  reportSafetyLabel,
  reportMissingLabel,
  suppliesMapLabel,
  govtWebsiteLabel,
  mainWebsiteLabel,
  volunteerEnglishLabel,
  volunteerTelegramLabel,
  dropOffLabel,
  statusLabel,
  safeReportsLabel,
  missingReportsLabel,
  liveStatusLabel
}: CommunityResourcesProps) => {
  const { currentLang } = useLanguage();
  const { counts, isLoading } = useSafetyReports();

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Users className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Wang Fuk Court Safety Tracking */}
        <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">{safetyTrackingTitle}</CardTitle>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {currentLang === 'zh' ? '即時' : currentLang === 'tl' ? 'Real-time' : currentLang === 'id' ? 'Real-time' : 'Real-time'}
              </Badge>
            </div>
            <CardDescription>{safetyTrackingDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Live Status Indicators */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{safeReportsLabel}</span>
                  {isLoading ? (
                    <Skeleton className="h-6 w-12" />
                  ) : (
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {counts.safe}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{missingReportsLabel}</span>
                  {isLoading ? (
                    <Skeleton className="h-6 w-12" />
                  ) : (
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {counts.missing}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-1 mt-1 pt-2 border-t border-border/50">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">{liveStatusLabel}</span>
              </div>
            </div>
            
            <Button
              variant="default"
              className="w-full justify-start gap-2"
              onClick={() => openLink('https://taipo-fire.web.app/')}
            >
              <Globe className="w-4 h-4" />
              {mainWebsiteLabel}
              <ExternalLink className="w-3 h-3 ml-auto" />
            </Button>
            
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => openLink('https://docs.google.com/forms/d/e/1FAIpQLSc64NpaVIcAkg92fanI5W34xXwpoTnxXu0QozccOiRf3cAZYw/viewform')}
              >
                <FileSearch className="w-4 h-4" />
                {reportSafetyLabel}
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => openLink('https://forms.gle/RpSpL7KiXcuD3eN89')}
              >
                <FileSearch className="w-4 h-4" />
                {reportMissingLabel}
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => openLink('https://experience.arcgis.com/experience/22b9d309e69548f28d2f4055d4de5ace')}
              >
                <MapPin className="w-4 h-4" />
                {suppliesMapLabel}
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => openLink('https://www.taipofire.gov.hk/')}
              >
                <Globe className="w-4 h-4" />
                {govtWebsiteLabel}
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Volunteer Coordination */}
        <Card className="border-accent/20 bg-gradient-to-br from-background to-accent/10">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <CardTitle className="text-lg">{volunteerTitle}</CardTitle>
              </div>
            </div>
            <CardDescription>{volunteerDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="default"
              className="w-full justify-start gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white"
              onClick={() => openLink('https://chat.whatsapp.com/ELpksjt4CCM2Is4GTswO8u')}
            >
              <MessageCircle className="w-4 h-4" />
              {volunteerEnglishLabel}
              <ExternalLink className="w-3 h-3 ml-auto" />
            </Button>

            <div className="p-3 rounded-lg bg-muted/50 border border-border text-sm space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{dropOffLabel}:</div>
                  <div className="text-muted-foreground">The Hive Causeway Bay 9/F</div>
                  <div className="text-muted-foreground">V-Point, 18 Tang Lung Street</div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => openLink('https://t.me/+7PObuQ5xWiI2ZGFl')}
            >
              <Send className="w-4 h-4" />
              {volunteerTelegramLabel}
              <ExternalLink className="w-3 h-3 ml-auto" />
            </Button>

            <div className="flex items-center gap-2 p-2 rounded bg-warning/10 border border-warning/30 text-xs">
              <span className="text-warning font-semibold">⚠️</span>
              <span className="text-warning/90">{statusLabel}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
