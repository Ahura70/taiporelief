import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { SearchBox } from '@/components/SearchBox';
import { QuickActions } from '@/components/QuickActions';
import { ResourceDetail } from '@/components/ResourceDetail';
import { NewsBanner } from '@/components/NewsBanner';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { NotificationToggle } from '@/components/NotificationToggle';
import { SkipToContent } from '@/components/SkipToContent';
import { FeedbackForm } from '@/components/FeedbackForm';
import { DonationTracker } from '@/components/DonationTracker';
import { Map } from '@/components/Map';
import { LiveUpdatesFeed } from '@/components/LiveUpdatesFeed';
import { OrganizationsTable } from '@/components/OrganizationsTable';
import { Language, translations, resources, Resource } from '@/lib/translations';
import { useAnalytics } from '@/hooks/useAnalytics';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('zh');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const { trackResourceView, getMostAccessed } = useAnalytics();

  useEffect(() => {
    // Auto-detect language
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang.includes('en')) setCurrentLang('en');
    else if (userLang.includes('zh')) setCurrentLang('zh');
    else if (userLang.includes('tl') || userLang.includes('fil')) setCurrentLang('tl');
    else if (userLang.includes('id')) setCurrentLang('id');
  }, []);

  const t = translations[currentLang];
  const currentResources = resources[currentLang];
  const popularResources = getMostAccessed(currentResources, 3);

  const handleSelectResource = (resource: Resource) => {
    trackResourceView(resource);
    setSelectedResource(resource);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <SkipToContent text={t.skipToContent} />
      <OfflineIndicator text={t.offlineMode} />
      <Header
        title={t.title}
        subtitle={t.subtitle}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <EmergencyBanner text={t.emergency} />

      <main id="main-content" className="max-w-4xl mx-auto px-5 py-6" tabIndex={-1}>
        <SearchBox
          label={t.label}
          placeholder={t.placeholder}
          resources={currentResources}
          onSelectResource={handleSelectResource}
          currentLang={currentLang}
          listeningText={t.listening}
        />

        {popularResources.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              ⭐ {t.popular}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {popularResources.map((resource, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectResource(resource)}
                  className="bg-card hover:bg-accent border border-primary/20 rounded-xl p-4 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px]"
                  aria-label={`${resource.title}: ${resource.desc}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{resource.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{resource.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <QuickActions resources={currentResources} onSelectResource={handleSelectResource} />

        <div className="mt-6">
          <DonationTracker
            title={t.donationTitle}
            raised={t.donationRaised}
            goal={t.donationGoal}
            currency={t.donationCurrency}
            milestones={t.donationMilestones}
          />
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.mapTitle}</h2>
          <Map
            apiKeyPlaceholder={t.mapApiKeyPlaceholder}
            filterAll={t.mapFilterAll}
            filterSupport={t.mapFilterSupport}
            filterHousing={t.mapFilterHousing}
            filterCollection={t.mapFilterCollection}
            filterMedical={t.mapFilterMedical}
            enterApiKey={t.mapEnterApiKey}
            setApiKey={t.mapSetApiKey}
          />
        </div>

        <div className="mt-6">
          <LiveUpdatesFeed
            title={t.liveUpdatesTitle}
            donationType={t.liveUpdatesDonation}
            volunteerType={t.liveUpdatesVolunteer}
            alertType={t.liveUpdatesAlert}
            timeAgo={{
              justNow: t.liveUpdatesTimeJustNow,
              minutesAgo: t.liveUpdatesTimeMinutes,
              hoursAgo: t.liveUpdatesTimeHours,
            }}
          />
        </div>

        <div className="mt-6">
          <NotificationToggle
            enableText={t.notifyEnable}
            disableText={t.notifyDisable}
            enabledText={t.notifyEnabled}
            disabledText={t.notifyDisabled}
            permissionDeniedText={t.notifyDenied}
            testNotificationTitle={t.notifyTestTitle}
            testNotificationBody={t.notifyTestBody}
          />
        </div>

        <div className="mt-6">
          <OrganizationsTable
            title={t.organizationsTitle}
            organizations={t.organizations}
            headers={t.organizationsHeaders}
          />
        </div>
      </main>

      <NewsBanner title={t.newsTitle} newsLinks={t.newsLinks} />

      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mt-6 text-xs text-muted-foreground space-y-1">
          <div>{t.lastUpdate}</div>
          <div>{t.wcagCompliance}</div>
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
          whatsappText={t.whatsapp}
          smsText={t.sms}
          copyLinkText={t.copyLink}
        />
      )}

      <PWAInstallPrompt
        installText={t.installTitle}
        installDesc={t.installDesc}
        installBtn={t.installBtn}
      />

      <FeedbackForm
        title={t.feedbackTitle}
        placeholder={t.feedbackPlaceholder}
        submitText={t.feedbackSubmit}
        successText={t.feedbackSuccess}
        closeText={t.feedbackClose}
        reportText={t.feedbackReport}
        suggestText={t.feedbackSuggest}
      />
    </div>
  );
};

export default Index;
