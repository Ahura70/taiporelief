import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { SearchBox } from '@/components/SearchBox';
import { QuickActions } from '@/components/QuickActions';
import { ResourceDetail } from '@/components/ResourceDetail';
import { NewsBanner } from '@/components/NewsBanner';
import { Language, translations, resources, Resource } from '@/lib/translations';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('zh');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

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

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header
        title={t.title}
        subtitle={t.subtitle}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <EmergencyBanner text={t.emergency} />

      <main className="max-w-4xl mx-auto px-5 py-6">
        <SearchBox
          label={t.label}
          placeholder={t.placeholder}
          resources={currentResources}
          onSelectResource={setSelectedResource}
          currentLang={currentLang}
          listeningText={t.listening}
        />

        <QuickActions resources={currentResources} onSelectResource={setSelectedResource} />
      </main>

      <NewsBanner title={t.newsTitle} />

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
          shareWhatsAppText={t.shareWhatsApp}
          shareSMSText={t.shareSMS}
          shareLinkText={t.shareLink}
          linkCopiedText={t.linkCopied}
        />
      )}
    </div>
  );
};

export default Index;
