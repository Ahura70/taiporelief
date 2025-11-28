import { Resource } from './translations';

export const isResourceOpen = (resource: Resource): boolean => {
  if (!resource.hours) {
    // If no hours specified, assume always open
    return true;
  }

  const { open, close, days } = resource.hours;

  // Check if it's 24/7
  if (days === '24/7') {
    return true;
  }

  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes

  // Check day restrictions
  if (days) {
    const isDayOpen = checkDayOpen(currentDay, days);
    if (!isDayOpen) {
      return false;
    }
  }

  // Parse open and close times
  const [openHour, openMin] = open.split(':').map(Number);
  const [closeHour, closeMin] = close.split(':').map(Number);
  
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  // Check if current time is within operating hours
  return currentTime >= openTime && currentTime < closeTime;
};

const checkDayOpen = (currentDay: number, daysString: string): boolean => {
  // Handle "Daily" or "Everyday"
  if (daysString.toLowerCase().includes('daily') || daysString.toLowerCase().includes('everyday')) {
    return true;
  }

  // Handle "Mon-Fri" or similar ranges
  const rangeMatch = daysString.match(/(\w+)-(\w+)/);
  if (rangeMatch) {
    const dayMap: { [key: string]: number } = {
      'sun': 0, 'sunday': 0,
      'mon': 1, 'monday': 1,
      'tue': 2, 'tuesday': 2,
      'wed': 3, 'wednesday': 3,
      'thu': 4, 'thursday': 4,
      'fri': 5, 'friday': 5,
      'sat': 6, 'saturday': 6,
    };

    const startDay = dayMap[rangeMatch[1].toLowerCase()];
    const endDay = dayMap[rangeMatch[2].toLowerCase()];

    if (startDay !== undefined && endDay !== undefined) {
      if (startDay <= endDay) {
        return currentDay >= startDay && currentDay <= endDay;
      } else {
        // Wraps around week (e.g., Sat-Mon)
        return currentDay >= startDay || currentDay <= endDay;
      }
    }
  }

  return true; // Default to open if we can't parse
};

export const getStatusText = (resource: Resource, translations: {
  open: string;
  closed: string;
  opensAt: string;
  closesAt: string;
  open24h: string;
}): string => {
  if (!resource.hours) {
    return '';
  }

  if (resource.hours.days === '24/7') {
    return translations.open24h;
  }

  const isOpen = isResourceOpen(resource);
  
  if (isOpen) {
    return `${translations.open} • ${translations.closesAt} ${resource.hours.close}`;
  } else {
    return `${translations.closed} • ${translations.opensAt} ${resource.hours.open}`;
  }
};
