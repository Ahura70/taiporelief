import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Home, Package, Heart, Building2 } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  type: 'support' | 'housing' | 'collection' | 'medical';
  coordinates: [number, number];
  address: string;
  contact?: string;
  hours?: string;
}

interface MapProps {
  apiKeyPlaceholder: string;
  filterAll: string;
  filterSupport: string;
  filterHousing: string;
  filterCollection: string;
  filterMedical: string;
  enterApiKey: string;
  setApiKey: string;
}

export const Map = ({
  apiKeyPlaceholder,
  filterAll,
  filterSupport,
  filterHousing,
  filterCollection,
  filterMedical,
  enterApiKey,
  setApiKey,
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [apiKey, setApiKeyState] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const locations: Location[] = [
    {
      id: '1',
      name: 'EdUHK Support Centre',
      type: 'support',
      coordinates: [114.2055, 22.4380],
      address: 'EdUHK Block E Sports Hall, Tai Po',
      hours: '08:30 - 18:30',
    },
    {
      id: '2',
      name: 'Caritas Fu Heng Home',
      type: 'support',
      coordinates: [114.1835, 22.4502],
      address: 'G/F & 1/F, Heng Wing House, Fu Heng Estate, Tai Po',
      contact: '2660 6125',
    },
    {
      id: '3',
      name: 'Wang Fuk Court',
      type: 'housing',
      coordinates: [114.1723, 22.4456],
      address: 'Wang Fuk Court, Tai Po',
    },
    {
      id: '4',
      name: 'Government Collection Point',
      type: 'collection',
      coordinates: [114.1650, 22.4450],
      address: 'Tai Po Community Centre',
      contact: '9213 2388',
    },
    {
      id: '5',
      name: 'Alice Ho Miu Ling Nethersole Hospital',
      type: 'medical',
      coordinates: [114.1738, 22.4432],
      address: '11 Chuen On Road, Tai Po',
    },
  ];

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'support':
        return '#3b82f6'; // blue
      case 'housing':
        return '#10b981'; // green
      case 'collection':
        return '#f59e0b'; // amber
      case 'medical':
        return '#ef4444'; // red
      default:
        return '#6366f1'; // indigo
    }
  };

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [114.1723, 22.4456], // Centered on Tai Po
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      addMarkers();
      setMapInitialized(true);
    });
  };

  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach((marker) => marker.remove());
    markers.current = [];

    locations
      .filter((loc) => activeFilter === 'all' || loc.type === activeFilter)
      .forEach((location) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = getMarkerColor(location.type);
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${location.name}</h3>
            <p style="font-size: 12px; margin: 2px 0;">${location.address}</p>
            ${location.contact ? `<p style="font-size: 12px; margin: 2px 0;">📞 ${location.contact}</p>` : ''}
            ${location.hours ? `<p style="font-size: 12px; margin: 2px 0;">🕐 ${location.hours}</p>` : ''}
          </div>
        `);

        const marker = new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        markers.current.push(marker);
      });
  };

  useEffect(() => {
    if (mapInitialized) {
      addMarkers();
    }
  }, [activeFilter, mapInitialized]);

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  const filterButtons = [
    { id: 'all', label: filterAll, icon: MapPin },
    { id: 'support', label: filterSupport, icon: Heart },
    { id: 'housing', label: filterHousing, icon: Home },
    { id: 'collection', label: filterCollection, icon: Package },
    { id: 'medical', label: filterMedical, icon: Building2 },
  ];

  return (
    <div className="space-y-4">
      {!mapInitialized && (
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-3">{enterApiKey}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get your free token at{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder={apiKeyPlaceholder}
              value={apiKey}
              onChange={(e) => setApiKeyState(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSetApiKey}>{setApiKey}</Button>
          </div>
        </div>
      )}

      {mapInitialized && (
        <div className="flex flex-wrap gap-2 p-4 bg-card border border-border rounded-xl">
          {filterButtons.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeFilter === id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(id)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>
      )}

      <div
        ref={mapContainer}
        className="w-full h-[500px] rounded-xl border border-border shadow-lg animate-fade-in"
      />
    </div>
  );
};
