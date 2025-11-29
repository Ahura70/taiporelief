import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { MemorialBanner } from '@/components/MemorialBanner';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { NewsTicker } from '@/components/NewsTicker';
import { EmergencyDialButton } from '@/components/EmergencyDialButton';
import { AccessibilityMenu } from '@/components/AccessibilityMenu';
import { LanguageNotification } from '@/components/LanguageNotification';
import { SearchBox } from '@/components/SearchBox';
import { QuickActions } from '@/components/QuickActions';
import { CommunityResources } from '@/components/CommunityResources';
import { EmergencyContactCard } from '@/components/EmergencyContactCard';
import { DocumentChecklistHelper } from '@/components/DocumentChecklistHelper';
import { ResourceDetail } from '@/components/ResourceDetail';
import { ResourceMap } from '@/components/ResourceMap';
import { FeedbackForm } from '@/components/FeedbackForm';
import { InstallPrompt } from '@/components/InstallPrompt';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { ConnectionStatus } from '@/components/ConnectionStatus';
import { ChangelogModal } from '@/components/ChangelogModal';
import { BackToTop } from '@/components/BackToTop';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { translations, resources, Resource } from '@/lib/translations';
import { useLanguage } from '@/hooks/useLanguage';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useNewsUpdates } from '@/hooks/useNewsUpdates';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LAST_SEEN_BUILD_KEY = 'taiporelief_last_seen_build';

const Index = () => {
  const { currentLang, changeLanguage } = useLanguage();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  // Fetch dynamic news updates
  const { data: dynamicNews } = useNewsUpdates(currentLang);

  // Check if build timestamp has changed
  useEffect(() => {
    const lastSeenBuild = localStorage.getItem(LAST_SEEN_BUILD_KEY);
    const currentBuild = __BUILD_TIMESTAMP__;

    if (lastSeenBuild && lastSeenBuild !== currentBuild) {
      // Build has changed, show changelog
      setShowChangelog(true);
    }

    // Update last seen build
    localStorage.setItem(LAST_SEEN_BUILD_KEY, currentBuild);
  }, []);

  const handleCloseChangelog = () => {
    setShowChangelog(false);
  };

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: '/',
      callback: () => {
        searchBoxRef.current?.querySelector('input')?.focus();
      },
      description: 'Focus search box'
    },
    {
      key: 'Escape',
      callback: () => {
        if (selectedResource) setSelectedResource(null);
        if (showFeedbackForm) setShowFeedbackForm(false);
      },
      description: 'Close modals'
    }
  ]);

  const t = translations[currentLang];
  const currentResources = resources[currentLang];

  // Combine static news with dynamic news from database
  const allNews = [
    ...t.newsItems,
    ...(dynamicNews || [])
  ];

  // Format build timestamp based on language
  const formatBuildTimestamp = (isoString: string) => {
    const date = new Date(isoString);
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    switch (currentLang) {
      case 'zh':
        return date.toLocaleString('zh-HK', options);
      case 'tl':
        return date.toLocaleString('tl-PH', options);
      case 'id':
        return date.toLocaleString('id-ID', options);
      default:
        return date.toLocaleString('en-US', options);
    }
  };

  const buildTimestamp = formatBuildTimestamp(__BUILD_TIMESTAMP__);

  return (
    <div className="min-h-screen bg-background pb-20">
      <ScrollProgressBar />
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>
      <OfflineIndicator />
      <ConnectionStatus />
      <InstallPrompt />
      <Header
        title={t.title}
        subtitle={t.subtitle}
        currentLang={currentLang}
        onLanguageChange={changeLanguage}
      />
      <div className="fixed top-20 right-5 z-40">
        <DarkModeToggle />
      </div>
      <AccessibilityMenu
        title={t.accessibilityTitle}
        fontSizeLabel={t.fontSizeLabel}
        highContrastLabel={t.highContrastLabel}
        reduceMotionLabel={t.reduceMotionLabel}
        lineSpacingLabel={t.lineSpacingLabel}
      />
      <MemorialBanner message={t.memorialMessage} />
      <EmergencyBanner text={t.emergency} whatsappText={t.whatsappRegister} />

      <main id="main-content" className="max-w-4xl mx-auto px-5 py-6">
        <NewsTicker newsItems={allNews} />
        
        <div ref={searchBoxRef} className="mt-6">
          <SearchBox
            label={t.label}
            placeholder={t.placeholder}
            resources={currentResources}
            onSelectResource={setSelectedResource}
            currentLang={currentLang}
            listeningText={t.listening}
          />
        </div>

        <QuickActions resources={currentResources} onSelectResource={setSelectedResource} />

        <div className="mt-8">
          <CommunityResources
            title={t.communityResourcesTitle}
            safetyTrackingTitle={t.safetyTrackingTitle}
            safetyTrackingDesc={t.safetyTrackingDesc}
            volunteerTitle={t.volunteerCoordTitle}
            volunteerDesc={t.volunteerCoordDesc}
            reportSafetyLabel={t.reportSafetyLabel}
            reportMissingLabel={t.reportMissingLabel}
            suppliesMapLabel={t.suppliesMapLabel}
            govtWebsiteLabel={t.govtWebsiteLabel}
            mainWebsiteLabel={t.mainWebsiteLabel}
            volunteerEnglishLabel={t.volunteerEnglishLabel}
            volunteerTelegramLabel={t.volunteerTelegramLabel}
            dropOffLabel={t.dropOffLabel}
            statusLabel={t.statusSuspended}
            safeReportsLabel={t.safeReportsLabel}
            missingReportsLabel={t.missingReportsLabel}
            liveStatusLabel={t.liveStatusLabel}
          />
        </div>

        {/* Emergency Contact & Document Checklist */}
        <div className="mt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <EmergencyContactCard
              title={t.emergencyContactTitle}
              description={t.emergencyContactDesc}
              philippinesLabel={t.philippinesEmergency}
              indonesiaLabel={t.indonesiaEmergency}
            />
            <DocumentChecklistHelper
              title={t.documentChecklistTitle}
              description={t.documentChecklistDesc}
              philippinesTitle={t.philippinesPassport}
              indonesiaTitle={t.indonesiaPassport}
              currentLang={currentLang}
            />
          </div>
        </div>

        <div className="mt-8">
          <ResourceMap
            resources={currentResources} 
            onResourceClick={setSelectedResource}
            mapTitle={t.mapTitle}
            showOpenOnlyText={t.showOpenOnly}
            currentLang={currentLang}
            legendOpen={t.legendOpen}
            legendClosed={t.legendClosed}
            legendNoHours={t.legendNoHours}
          />
        </div>

      </main>

        <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mt-6 text-xs text-muted-foreground space-y-1">
          <div>{t.wcagCompliance}</div>
          <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground/80">
            <span aria-hidden="true">⏱</span>
            <button
              onClick={() => setShowChangelog(true)}
              className="hover:text-primary transition-colors cursor-pointer underline decoration-dotted"
              title={currentLang === 'zh' ? '查看更新內容' : currentLang === 'tl' ? 'Tingnan ang mga update' : currentLang === 'id' ? 'Lihat pembaruan' : 'View updates'}
            >
              {currentLang === 'zh' && `最後更新：${buildTimestamp}`}
              {currentLang === 'en' && `Last Updated: ${buildTimestamp}`}
              {currentLang === 'tl' && `Huling Update: ${buildTimestamp}`}
              {currentLang === 'id' && `Terakhir Diperbarui: ${buildTimestamp}`}
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => setShowFeedbackForm(true)}
            variant="outline"
            className="gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            {t.feedback}
          </Button>
        </div>
      </div>

      {selectedResource && (
        <ResourceDetail
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
          copyText={t.copy}
          copiedText={t.copied}
          closeText={t.close}
          shareText={t.share}
          shareWhatsAppText={t.shareWhatsApp}
          shareSMSText={t.shareSMS}
          shareLinkText={t.shareLink}
          linkCopiedText={t.linkCopied}
          getDirectionsText={t.getDirections}
          bookmarkText={t.bookmark}
          bookmarkedText={t.bookmarked}
          qrCodeText={t.qrCode}
        />
      )}

      {showFeedbackForm && (
        <FeedbackForm
          onClose={() => setShowFeedbackForm(false)}
          translations={{
            feedbackTitle: t.feedbackTitle,
            feedbackType: t.feedbackType,
            feedbackTypeUpdate: t.feedbackTypeUpdate,
            feedbackTypeNew: t.feedbackTypeNew,
            feedbackTypeGeneral: t.feedbackTypeGeneral,
            resourceName: t.resourceName,
            resourceNamePlaceholder: t.resourceNamePlaceholder,
            category: t.category,
            categoryPlaceholder: t.categoryPlaceholder,
            contactInfo: t.contactInfo,
            contactInfoPlaceholder: t.contactInfoPlaceholder,
            description: t.description,
            descriptionPlaceholder: t.descriptionPlaceholder,
            yourName: t.yourName,
            yourEmail: t.yourEmail,
            submit: t.submit,
            submitting: t.submitting,
            close: t.close,
            feedbackSuccess: t.feedbackSuccess,
            feedbackSuccessDesc: t.feedbackSuccessDesc,
          }}
        />
      )}
      
      <EmergencyDialButton
        casualtyLabel={t.casualtyEnquiry}
        mentalHealthLabel={t.mentalHealthSupport}
        emergencyTitle={t.emergencyDialTitle}
        emergencyDescription={t.emergencyDialDescription}
      />
      
      <LanguageNotification 
        message={t.languageNotification}
        currentLang={currentLang}
      />

      <ChangelogModal
        open={showChangelog}
        onClose={handleCloseChangelog}
        currentLang={currentLang}
      />

      <BackToTop label={t.backToTop} />
    </div>
  );
};

export default Index;
