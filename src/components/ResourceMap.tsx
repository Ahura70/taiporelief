import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Resource } from '@/lib/translations';
import { openDirections } from '@/lib/mapsHelper';
import { isResourceOpen } from '@/lib/hoursHelper';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

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
  showOpenOnlyText: string;
  currentLang: string;
}

export const ResourceMap = ({ resources, onResourceClick, mapTitle, showOpenOnlyText, currentLang }: ResourceMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

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
    resources.forEach((resource, index) => {
      if (resource.coordinates) {
        const marker = L.marker(resource.coordinates).addTo(map);
        markersRef.current.set(`${resource.title}-${index}`, marker);
        
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
      markersRef.current.clear();
    };
  }, [resources, onResourceClick]);

  // Filter markers based on open/closed status
  useEffect(() => {
    if (!mapRef.current) return;

    resources.forEach((resource, index) => {
      const markerKey = `${resource.title}-${index}`;
      const marker = markersRef.current.get(markerKey);
      
      if (marker && resource.coordinates) {
        const isOpen = isResourceOpen(resource);
        
        if (showOpenOnly && !isOpen) {
          // Hide closed resources when filter is on
          marker.remove();
        } else {
          // Show all resources when filter is off, or open resources when filter is on
          if (!mapRef.current.hasLayer(marker)) {
            marker.addTo(mapRef.current);
          }
        }
      }
    });
  }, [showOpenOnly, resources]);

  return (
    <div className="w-full bg-card rounded-lg shadow-lg overflow-hidden border border-border">
      <div className="p-4 bg-muted/50 border-b border-border flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">🗺️ {mapTitle}</h2>
        <Button
          variant={showOpenOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setShowOpenOnly(!showOpenOnly)}
          className="gap-2"
        >
          <Filter className="w-4 h-4" />
          {showOpenOnlyText}
        </Button>
      </div>
      <div 
        ref={mapContainerRef} 
        className="w-full h-[500px]"
        style={{ background: 'hsl(var(--muted))' }}
      />
    </div>
  );
};
