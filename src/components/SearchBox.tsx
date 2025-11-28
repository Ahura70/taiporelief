import { useState, useEffect } from 'react';
import { Resource, Language, languages } from '@/lib/translations';
import { Mic, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SearchBoxProps {
  label: string;
  placeholder: string;
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
  currentLang: Language;
  listeningText: string;
}

export const SearchBox = ({
  label,
  placeholder,
  resources,
  onSelectResource,
  currentLang,
  listeningText
}: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<Resource[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('');
  const [voiceError, setVoiceError] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!searchValue) {
      setSuggestions([]);
      return;
    }

    const val = searchValue.toLowerCase();
    const matches = resources.filter(
      (r) =>
        r.title.toLowerCase().includes(val) ||
        r.keywords.some((k) => k.toLowerCase().includes(val))
    );
    setSuggestions(matches);
  }, [searchValue, resources]);

  const handleVoiceSearch = () => {
    setVoiceError('');
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      const errorMsg = currentLang === 'zh' 
        ? '您的瀏覽器不支援語音搜尋。請使用 Chrome、Edge 或 Safari。'
        : currentLang === 'tl'
        ? 'Hindi sinusuportahan ng iyong browser ang voice search. Gumamit ng Chrome, Edge, o Safari.'
        : currentLang === 'id'
        ? 'Browser Anda tidak mendukung pencarian suara. Gunakan Chrome, Edge, atau Safari.'
        : 'Voice search not supported on your browser. Please use Chrome, Edge, or Safari.';
      setVoiceError(errorMsg);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = languages[currentLang].code;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus(listeningText);
      setVoiceError('');
    };

    recognition.onend = () => {
      setIsListening(false);
      setVoiceStatus('');
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchValue(transcript);
      setVoiceError('');
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      setVoiceStatus('');
      
      let errorMsg = '';
      if (event.error === 'no-speech') {
        errorMsg = currentLang === 'zh' 
          ? '未檢測到語音。請再試一次。'
          : currentLang === 'tl'
          ? 'Walang narinig na salita. Subukan muli.'
          : currentLang === 'id'
          ? 'Tidak ada ucapan yang terdeteksi. Coba lagi.'
          : 'No speech detected. Please try again.';
      } else if (event.error === 'not-allowed') {
        errorMsg = currentLang === 'zh'
          ? '需要麥克風權限。請在瀏覽器設定中啟用。'
          : currentLang === 'tl'
          ? 'Kailangan ng microphone permission. Paganahin sa browser settings.'
          : currentLang === 'id'
          ? 'Izin mikrofon diperlukan. Aktifkan di pengaturan browser.'
          : 'Microphone permission required. Enable in browser settings.';
      } else {
        errorMsg = currentLang === 'zh'
          ? '語音搜尋失敗。請重試或使用文字輸入。'
          : currentLang === 'tl'
          ? 'Nabigo ang voice search. Subukan muli o gumamit ng text.'
          : currentLang === 'id'
          ? 'Pencarian suara gagal. Coba lagi atau gunakan teks.'
          : 'Voice search failed. Please try again or use text input.';
      }
      setVoiceError(errorMsg);
    };

    try {
      recognition.start();
    } catch (e) {
      recognition.stop();
      setTimeout(() => {
        try {
          recognition.start();
        } catch (err) {
          setVoiceError(currentLang === 'zh' 
            ? '無法啟動語音搜尋。請使用文字輸入。'
            : currentLang === 'tl'
            ? 'Hindi masimulan ang voice search. Gumamit ng text.'
            : currentLang === 'id'
            ? 'Tidak dapat memulai pencarian suara. Gunakan teks.'
            : 'Could not start voice search. Please use text input.');
        }
      }, 100);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg p-6">
      <label className="block text-sm font-semibold mb-3 text-card-foreground">{label}</label>
      <div className="relative">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 bg-secondary border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            aria-label={label}
          />
          <button
            onClick={handleVoiceSearch}
            className={`p-3 rounded-xl transition-all ${
              isListening
                ? 'bg-primary text-primary-foreground animate-pulse'
                : 'bg-secondary text-foreground hover:bg-accent'
            }`}
            aria-label={currentLang === 'zh' ? '語音搜尋' : currentLang === 'tl' ? 'Voice search' : currentLang === 'id' ? 'Pencarian suara' : 'Voice search'}
            title={currentLang === 'zh' ? '語音搜尋 (Chrome/Safari)' : currentLang === 'tl' ? 'Voice search (Chrome/Safari)' : currentLang === 'id' ? 'Pencarian suara (Chrome/Safari)' : 'Voice search (Chrome/Safari)'}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
        
        {voiceStatus && (
          <div className="text-xs text-primary mt-2 min-h-[18px]" role="status" aria-live="polite">
            {voiceStatus}
          </div>
        )}
        
        {voiceError && (
          <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{voiceError}</AlertDescription>
          </Alert>
        )}
        
        {suggestions.length > 0 && (
          <div className="mt-2 bg-card border border-border rounded-xl shadow-md overflow-hidden" role="listbox">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResource(suggestion);
                  setSearchValue('');
                  setSuggestions([]);
                  setHoveredIndex(null);
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all border-b border-border last:border-0 ${
                  hoveredIndex === idx 
                    ? 'bg-secondary scale-[1.02]' 
                    : hoveredIndex !== null 
                    ? 'opacity-40' 
                    : 'hover:bg-secondary'
                }`}
                role="option"
                aria-selected={hoveredIndex === idx}
              >
                <span 
                  className={`text-2xl ${suggestion.icon === '✚' ? 'text-red-600' : ''}`} 
                  aria-hidden="true"
                >
                  {suggestion.icon}
                </span>
                <span className="text-sm font-medium">{suggestion.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
