import { ExternalLink } from 'lucide-react';

interface NewsBannerProps {
  title: string;
}

export const NewsBanner = ({ title }: NewsBannerProps) => {
  const newsLinks = [
    {
      name: 'SCMP',
      url: 'https://www.scmp.com/topics/hong-kongs-tai-po-fire-tragedy?module=breadcrumb&pgtype=article',
      desc: 'Latest News Coverage'
    },
    {
      name: 'Govt Info',
      url: 'https://www.info.gov.hk/',
      desc: 'Official Updates'
    },
    {
      name: 'Hospital Authority',
      url: 'https://www.ha.org.hk/',
      desc: 'Medical Updates'
    }
  ];

  return (
    <div className="bg-card border-b border-border px-5 py-4">
      <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {newsLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-accent p-3 rounded-lg transition-all group"
          >
            <div className="flex-1">
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {link.name}
              </div>
              <div className="text-xs text-muted-foreground">{link.desc}</div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};
