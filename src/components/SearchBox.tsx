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
            className={`p-3 rounded-xl transition-all ${
              isListening
                ? 'bg-primary text-primary-foreground animate-pulse'
                : 'bg-secondary text-foreground hover:bg-accent'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
        {voiceStatus && (
          <div className="text-xs text-primary mt-2 min-h-[18px]">{voiceStatus}</div>
        )}
        {suggestions.length > 0 && (
          <div className="mt-2 bg-card border border-border rounded-xl shadow-md overflow-hidden">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResource(suggestion);
                  setSearchValue('');
                  setSuggestions([]);
                }}
                className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-secondary transition-colors border-b border-border last:border-0"
              >
                <span className="text-2xl">{suggestion.icon}</span>
                <span className="text-sm font-medium">{suggestion.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
