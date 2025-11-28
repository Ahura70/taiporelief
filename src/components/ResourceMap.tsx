import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Resource } from '@/lib/translations';
import { openDirections } from '@/lib/mapsHelper';

// Fix default marker icon issue with Leaflet + Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface ResourceMapProps {
  resources: Resource[];
  onResourceClick?: (resource: Resource) => void;
  mapTitle: string;
}

export const ResourceMap = ({ resources, onResourceClick, mapTitle }: ResourceMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map centered on Tai Po
    const map = L.map(mapContainerRef.current).setView([22.4507, 114.1644], 14);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add markers for resources with coordinates
    resources.forEach((resource) => {
      if (resource.coordinates) {
        const marker = L.marker(resource.coordinates).addTo(map);
        
        // Create popup content with directions button
        const popupContent = document.createElement('div');
        popupContent.className = 'p-2';
        popupContent.innerHTML = `
          <h3 class="font-semibold text-sm mb-1">${resource.icon} ${resource.title}</h3>
          <p class="text-xs text-muted-foreground mb-2">${resource.desc}</p>
          ${resource.contacts.slice(0, 2).map(c => `
            <div class="text-xs">
              <strong>${c.l}:</strong> ${c.v}
            </div>
          `).join('')}
          <button class="mt-2 w-full text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded hover:bg-primary/90">
            📍 Get Directions
          </button>
        `;
        
        // Add click handler to directions button
        const directionsBtn = popupContent.querySelector('button');
        if (directionsBtn) {
          directionsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDirections(resource);
          });
        }
        
        marker.bindPopup(popupContent);
        
        // Handle marker click
        if (onResourceClick) {
          marker.on('click', () => onResourceClick(resource));
        }
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [resources, onResourceClick]);

  return (
    <div className="w-full bg-card rounded-lg shadow-lg overflow-hidden border border-border">
      <div className="p-4 bg-muted/50 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">🗺️ {mapTitle}</h2>
      </div>
      <div 
        ref={mapContainerRef} 
        className="w-full h-[500px]"
        style={{ background: 'hsl(var(--muted))' }}
      />
    </div>
  );
};
