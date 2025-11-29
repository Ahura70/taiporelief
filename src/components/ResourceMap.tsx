import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Resource } from '@/lib/translations';
import { openDirections } from '@/lib/mapsHelper';
import { isResourceOpen, getStatusText } from '@/lib/hoursHelper';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { MapLegend } from './MapLegend';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Create custom marker icons with status badges and resource icons
const createCustomIcon = (isOpen: boolean, hasHours: boolean, resourceIcon: string) => {
  // Using grayscale colors: lighter gray for no hours, dark gray for open, medium gray for closed
  const color = !hasHours ? 'hsl(0, 0%, 60%)' : isOpen ? 'hsl(0, 0%, 25%)' : 'hsl(0, 0%, 45%)';
  const statusText = !hasHours ? '' : isOpen ? 'OPEN' : 'CLOSED';
  
  const html = `
    <div style="position: relative; display: flex; align-items: center; justify-content: center;">
      <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26c0-8.837-7.163-16-16-16z" 
              fill="${color}" stroke="#fff" stroke-width="2"/>
      </svg>
      <div style="
        position: absolute;
        top: 4px;
        font-size: 16px;
        filter: grayscale(100%);
      ">${resourceIcon}</div>
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

// Category mapping based on resource icons
const getResourceCategory = (resource: Resource): string => {
  const icon = resource.icon;
  if (icon === '🏥' || icon === '❤️') return 'emergency';
  if (icon === '👩') return 'migrant';
  if (icon === '🐾') return 'animal';
  if (icon === '🤝' || icon === '📋') return 'volunteer';
  if (icon === '🏠') return 'shelter';
  if (icon === '📦' || icon === '🏦') return 'supplies';
  if (icon === '🌐') return 'information';
  if (icon === '🚨' || icon === '☎️') return 'hotline';
  return 'other';
};

interface ResourceMapProps {
  resources: Resource[];
  onResourceClick?: (resource: Resource) => void;
  mapTitle: string;
  showOpenOnlyText: string;
  currentLang: string;
  legendOpen?: string;
  legendClosed?: string;
  legendNoHours?: string;
  filterCategoriesText?: string;
  allCategoriesText?: string;
  categoryEmergency?: string;
  categoryMigrant?: string;
  categoryAnimal?: string;
  categoryVolunteer?: string;
  categoryShelter?: string;
  categorySupplies?: string;
  categoryInformation?: string;
  categoryHotline?: string;
}

export const ResourceMap = ({ 
  resources, 
  onResourceClick, 
  mapTitle, 
  showOpenOnlyText, 
  currentLang,
  legendOpen = 'Open Now',
  legendClosed = 'Closed',
  legendNoHours = 'Always Available',
  filterCategoriesText = 'Filter Categories',
  allCategoriesText = 'All Categories',
  categoryEmergency = 'Emergency Relief',
  categoryMigrant = 'Migrant Worker Support',
  categoryAnimal = 'Animal Welfare',
  categoryVolunteer = 'Volunteer Groups',
  categoryShelter = 'Shelter Services',
  categorySupplies = 'Supplies & Donations',
  categoryInformation = 'Information Hub',
  categoryHotline = 'Hotlines'
}: ResourceMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const categories = [
    { id: 'emergency', label: categoryEmergency },
    { id: 'migrant', label: categoryMigrant },
    { id: 'animal', label: categoryAnimal },
    { id: 'volunteer', label: categoryVolunteer },
    { id: 'shelter', label: categoryShelter },
    { id: 'supplies', label: categorySupplies },
    { id: 'information', label: categoryInformation },
    { id: 'hotline', label: categoryHotline },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

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
        const customIcon = createCustomIcon(isOpen, hasHours, resource.icon);
        
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

  // Filter markers based on open/closed status, categories, and update marker icons
  useEffect(() => {
    if (!mapRef.current) return;

    resources.forEach((resource, index) => {
      const markerKey = `${resource.title}-${index}`;
      const marker = markersRef.current.get(markerKey);
      
      if (marker && resource.coordinates) {
        const isOpen = isResourceOpen(resource);
        const hasHours = !!resource.hours;
        const resourceCategory = getResourceCategory(resource);
        
        // Update marker icon to reflect current status
        const customIcon = createCustomIcon(isOpen, hasHours, resource.icon);
        marker.setIcon(customIcon);
        
        // Determine if marker should be visible
        const shouldShow = 
          (!showOpenOnly || isOpen) && 
          (selectedCategories.length === 0 || selectedCategories.includes(resourceCategory));
        
        if (!shouldShow) {
          marker.remove();
        } else {
          if (!mapRef.current.hasLayer(marker)) {
            marker.addTo(mapRef.current);
          }
        }
      }
    });
  }, [showOpenOnly, selectedCategories, resources]);

  return (
    <div className="w-full bg-card rounded-lg shadow-lg overflow-hidden border border-border relative z-0">
      <div className="p-4 bg-muted/50 border-b border-border flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-bold text-foreground" id="map-title">🗺️ {mapTitle}</h2>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Filter className="w-4 h-4" aria-hidden="true" />
                {filterCategoriesText}
                {selectedCategories.length > 0 && (
                  <span className="ml-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {selectedCategories.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border-border z-50">
              {categories.map(category => (
                <DropdownMenuCheckboxItem
                  key={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                  className="cursor-pointer"
                >
                  {category.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={showOpenOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowOpenOnly(!showOpenOnly)}
            className="gap-2"
            aria-pressed={showOpenOnly}
            aria-label={`Filter: ${showOpenOnlyText}`}
          >
            <Filter className="w-4 h-4" aria-hidden="true" />
            {showOpenOnlyText}
          </Button>
        </div>
      </div>
      <div className="relative z-0">
        <div 
          ref={mapContainerRef} 
          className="w-full h-[500px] relative z-0"
          style={{ background: 'hsl(var(--muted))' }}
          role="application"
          aria-label="Interactive map of emergency resources"
          aria-describedby="map-title"
        />
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <MapLegend 
            openText={legendOpen}
            closedText={legendClosed}
            noHoursText={legendNoHours}
          />
        </div>
      </div>
    </div>
  );
};
