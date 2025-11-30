import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { currentLang } = useLanguage();

  const homeLabels = {
    en: 'Home',
    'zh-Hant': '首頁',
    tl: 'Home',
    id: 'Beranda',
  };

  const homeLabel = homeLabels[currentLang as keyof typeof homeLabels] || homeLabels.en;

  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: window.location.origin + '/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: window.location.origin + item.href,
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Visual Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-2 px-5 sticky top-16 z-30"
      >
        <ol className="flex items-center gap-2 text-sm max-w-4xl mx-auto">
          <li className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={homeLabel}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">{homeLabel}</span>
            </a>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              {item.current ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
