import { useEffect, useState } from 'react';

interface ScreenReaderAnnouncementProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

export const ScreenReaderAnnouncement = ({ message, politeness = 'polite' }: ScreenReaderAnnouncementProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-render to trigger announcement
    setKey(prev => prev + 1);
  }, [message]);

  if (!message) return null;

  return (
    <div
      key={key}
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};
