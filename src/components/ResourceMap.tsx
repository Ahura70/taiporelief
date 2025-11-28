import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Resource } from '@/lib/translations';
import { openDirections } from '@/lib/mapsHelper';
import { isResourceOpen, getStatusText } from '@/lib/hoursHelper';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

// Create custom marker icons with status badges
const createCustomIcon = (isOpen: boolean, hasHours: boolean) => {
  const color = !hasHours ? '#3b82f6' : isOpen ? '#22c55e' : '#ef4444'; // blue for no hours, green for open, red for closed
  const statusText = !hasHours ? '' : isOpen ? 'OPEN' : 'CLOSED';
  
  const html = `
    <div style="position: relative; display: flex; align-items: center; justify-content: center;">
      <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26c0-8.837-7.163-16-16-16z" 
              fill="${color}" stroke="#fff" stroke-width="2"/>
        <circle cx="16" cy="16" r="6" fill="#fff"/>
      </svg>
      ${statusText ? `
        <div style="
          position: absolute;
          top: -8px;
          right: -12px;
          background: ${color};
          color: white;
          font-size: 8px;
          font-weight: bold;
          padding: 2px 4px;
          border-radius: 4px;
          border: 1px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          white-space: nowrap;
        ">${statusText}</div>
      ` : ''}
    </div>
  `;
  
  return L.divIcon({
    html,
    className: 'custom-marker-icon',
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42]
  });
};

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
        const isOpen = isResourceOpen(resource);
        const hasHours = !!resource.hours;
        const customIcon = createCustomIcon(isOpen, hasHours);
        
        const marker = L.marker(resource.coordinates, { icon: customIcon }).addTo(map);
        markersRef.current.set(`${resource.title}-${index}`, marker);
        
        // Create popup content with status and directions button
        const popupContent = document.createElement('div');
        popupContent.className = 'p-2';
        
        const statusBadge = hasHours ? `
          <div style="
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 8px;
            background: ${isOpen ? '#22c55e' : '#ef4444'};
            color: white;
          ">
            ${isOpen ? '● OPEN' : '● CLOSED'}
          </div>
        ` : '';
        
        popupContent.innerHTML = `
          ${statusBadge}
          <h3 class="font-semibold text-sm mb-1">${resource.icon} ${resource.title}</h3>
          <p class="text-xs text-muted-foreground mb-2">${resource.desc}</p>
          ${hasHours ? `
            <div class="text-xs mb-2" style="color: ${isOpen ? '#22c55e' : '#ef4444'}; font-weight: 600;">
              ${isOpen ? `Closes at ${resource.hours!.close}` : `Opens at ${resource.hours!.open}`}
            </div>
          ` : ''}
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

  // Filter markers based on open/closed status and update marker icons
  useEffect(() => {
    if (!mapRef.current) return;

    resources.forEach((resource, index) => {
      const markerKey = `${resource.title}-${index}`;
      const marker = markersRef.current.get(markerKey);
      
      if (marker && resource.coordinates) {
        const isOpen = isResourceOpen(resource);
        const hasHours = !!resource.hours;
        
        // Update marker icon to reflect current status
        const customIcon = createCustomIcon(isOpen, hasHours);
        marker.setIcon(customIcon);
        
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
