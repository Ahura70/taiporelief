import { useState, useEffect } from 'react';
import { Resource, Language, languages } from '@/lib/translations';
import { Mic, MicOff, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SearchBoxProps {
  label: string;
  placeholder: string;
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
  currentLang: Language;
  listeningText: string;
  voiceSearchNotSupported: string;
  micPermissionDenied: string;
  voiceSearchError: string;
}

export const SearchBox = ({
  label,
  placeholder,
  resources,
  onSelectResource,
  currentLang,
  listeningText,
  voiceSearchNotSupported,
  micPermissionDenied,
  voiceSearchError,
}: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<Resource[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('');
  const [recognition, setRecognition] = useState<any>(null);
  const { toast } = useToast();

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

  const handleVoiceSearch = async () => {
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setVoiceStatus(voiceSearchNotSupported);
      toast({
        title: voiceSearchNotSupported,
        description: 'Please use the text search instead',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    // Check microphone permission
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      console.error('Microphone permission denied:', err);
      setVoiceStatus(micPermissionDenied);
      toast({
        title: micPermissionDenied,
        description: 'Please allow microphone access in your browser settings',
        variant: 'destructive',
        duration: 4000,
      });
      return;
    }

    if (isListening && recognition) {
      recognition.stop();
      setIsListening(false);
      setVoiceStatus('');
      return;
    }

    const newRecognition = new SpeechRecognition();
    newRecognition.continuous = false;
    newRecognition.interimResults = false;
    newRecognition.lang = languages[currentLang].code;

    newRecognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus(listeningText);
    };

    newRecognition.onend = () => {
      setIsListening(false);
      setVoiceStatus('');
    };

    newRecognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchValue(transcript);
      setIsListening(false);
      setVoiceStatus('');
    };

    newRecognition.onerror = (event: any) => {
      console.error('Voice recognition error:', event.error);
      setIsListening(false);
      setVoiceStatus('');
      
      if (event.error === 'not-allowed') {
        toast({
          title: micPermissionDenied,
          description: 'Please allow microphone access',
          variant: 'destructive',
          duration: 3000,
        });
      } else {
        toast({
          title: voiceSearchError,
          description: 'Please try again',
          variant: 'destructive',
          duration: 3000,
        });
      }
    };

    try {
      newRecognition.start();
      setRecognition(newRecognition);
    } catch (e) {
      console.error('Failed to start recognition:', e);
      newRecognition.stop();
      setIsListening(false);
      setVoiceStatus('');
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
            className={`p-3 rounded-xl transition-all min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative ${
              isListening
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-accent'
            }`}
            aria-label={isListening ? listeningText : "Start voice search"}
          >
            {isListening ? (
              <>
                <MicOff className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </>
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
        </div>
        {voiceStatus && (
          <div className="flex items-center gap-2 text-xs text-primary mt-2 min-h-[18px] animate-pulse">
            <AlertCircle className="w-4 h-4" />
            {voiceStatus}
          </div>
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
