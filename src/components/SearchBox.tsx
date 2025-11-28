import { useState, useEffect } from 'react';
import { Resource, Language, languages } from '@/lib/translations';
import { Mic } from 'lucide-react';

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
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceStatus('Voice search not supported');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = languages[currentLang].code;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus(listeningText);
    };

    recognition.onend = () => {
      setIsListening(false);
      setVoiceStatus('');
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchValue(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setVoiceStatus('');
    };

    try {
      recognition.start();
    } catch (e) {
      recognition.stop();
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
          />
          <button
            onClick={handleVoiceSearch}
            className={`p-3 rounded-xl transition-all min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
              isListening
                ? 'bg-primary text-primary-foreground animate-pulse'
                : 'bg-secondary text-foreground hover:bg-accent'
            }`}
            aria-label={isListening ? listeningText : "Start voice search"}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
        {voiceStatus && (
          <div className="text-xs text-primary mt-2 min-h-[18px]">{voiceStatus}</div>
        )}
        {suggestions.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResource(suggestion);
                  setSearchValue('');
                  setSuggestions([]);
                }}
                className="w-full px-4 py-3 text-left flex items-start gap-3 hover:bg-secondary transition-colors border-b border-border last:border-0"
              >
                <span className="text-2xl flex-shrink-0">{suggestion.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground">{suggestion.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{suggestion.desc}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
