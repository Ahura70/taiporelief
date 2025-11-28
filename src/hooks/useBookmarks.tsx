import { useState, useEffect } from 'react';
import { Resource } from '@/lib/translations';

const BOOKMARKS_KEY = 'taiporelief_bookmarks';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookmarks', e);
      }
    }
  }, []);

  const toggleBookmark = (resource: Resource) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(resource.title);
      const newBookmarks = isBookmarked
        ? prev.filter((title) => title !== resource.title)
        : [...prev, resource.title];
      
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const isBookmarked = (resource: Resource) => {
    return bookmarks.includes(resource.title);
  };

  const getBookmarkedResources = (resources: Resource[]) => {
    return resources.filter((r) => bookmarks.includes(r.title));
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    getBookmarkedResources,
  };
};
