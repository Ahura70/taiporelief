/**
 * Image optimization utilities for performance
 */

// Cache for preloaded images
const imageCache = new Set<string>();

/**
 * Preload critical images for faster rendering
 */
export const preloadImage = (src: string): Promise<void> => {
  if (imageCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images in parallel
 */
export const preloadImages = (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

/**
 * Check if browser supports modern image formats
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Calculate optimal image size based on device pixel ratio
 */
export const getOptimalImageSize = (baseSize: number): number => {
  const dpr = window.devicePixelRatio || 1;
  return Math.ceil(baseSize * Math.min(dpr, 2)); // Cap at 2x for performance
};

/**
 * Generate srcset for responsive images
 */
export const generateSrcSet = (baseSrc: string, sizes: number[]): string => {
  return sizes
    .map(size => `${baseSrc}?w=${size} ${size}w`)
    .join(', ');
};

/**
 * Compress and optimize image quality based on connection speed
 */
export const getImageQuality = (): number => {
  // @ts-ignore - NetworkInformation is experimental
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 85; // Default quality

  const effectiveType = connection.effectiveType;
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 60; // Lower quality for slow connections
    case '3g':
      return 75; // Medium quality
    case '4g':
    default:
      return 85; // High quality for fast connections
  }
};

/**
 * Check if user prefers reduced data usage
 */
export const prefersSaveData = (): boolean => {
  // @ts-ignore - saveData is experimental
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return connection?.saveData || false;
};

/**
 * Get connection speed estimation
 */
export const getConnectionSpeed = (): 'slow' | 'medium' | 'fast' => {
  // @ts-ignore
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 'medium';
  
  const effectiveType = connection.effectiveType;
  
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
  if (effectiveType === '3g') return 'medium';
  return 'fast';
};
