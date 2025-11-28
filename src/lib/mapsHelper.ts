import { Resource } from './translations';

export const openDirections = (resource: Resource) => {
  if (!resource.coordinates) {
    console.warn('No coordinates available for this resource');
    return;
  }

  const [lat, lng] = resource.coordinates;
  const destination = `${lat},${lng}`;
  const label = encodeURIComponent(resource.title);

  // Detect user's device
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    // Open Apple Maps on iOS
    window.open(`https://maps.apple.com/?daddr=${destination}&q=${label}`, '_blank');
  } else if (isAndroid) {
    // Open Google Maps on Android
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${label}`, '_blank');
  } else {
    // Desktop: offer Google Maps (more universal)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${label}`, '_blank');
  }
};
