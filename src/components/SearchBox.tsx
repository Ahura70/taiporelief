import { useState, useEffect, useCallback } from 'react';
import { Resource, Language, languages } from '@/lib/translations';
import { Mic, AlertCircle, HelpCircle, Volume2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<Resource[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('');
  const [voiceError, setVoiceError] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [voiceMatchedIndex, setVoiceMatchedIndex] = useState<number | null>(null);
  const [isVoiceMatch, setIsVoiceMatch] = useState(false);
  const [showCommandsHelp, setShowCommandsHelp] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [showPermissionRequest, setShowPermissionRequest] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isReadingAll, setIsReadingAll] = useState(false);
  const [currentReadingIndex, setCurrentReadingIndex] = useState(0);

  // Voice commands for tooltip
  const getVoiceCommandsHelp = () => {
    switch (currentLang) {
      case 'zh':
        return {
          title: '語音指令快捷鍵',
          commands: [
            { category: '捐款', examples: ['捐款', '紅十字', '明愛'] },
            { category: '義工', examples: ['義工', '志願者'] },
            { category: '支援', examples: ['幫助', '支援', '住宿', '食物', '輔導'] },
            { category: '緊急', examples: ['緊急', '熱線'] },
            { category: '播放全部', examples: ['播放全部', '全部播放'] },
            { category: '停止', examples: ['停止', '停止播放'] }
          ]
        };
      case 'tl':
        return {
          title: 'Voice Command Shortcuts',
          commands: [
            { category: 'Donasyon', examples: ['donate', 'magbigay', 'pulang krus'] },
            { category: 'Boluntaryo', examples: ['volunteer', 'boluntaryo'] },
            { category: 'Tulong', examples: ['help', 'tulong', 'tirahan', 'pagkain'] },
            { category: 'Emerhensya', examples: ['emergency', 'emerhensya', 'telepono'] },
            { category: 'Basahin Lahat', examples: ['basahin lahat', 'basahin lahat'] },
            { category: 'Ihinto', examples: ['ihinto', 'ihinto na'] }
          ]
        };
      case 'id':
        return {
          title: 'Pintasan Perintah Suara',
          commands: [
            { category: 'Donasi', examples: ['donate', 'donasi', 'palang merah'] },
            { category: 'Sukarelawan', examples: ['volunteer', 'sukarelawan'] },
            { category: 'Bantuan', examples: ['help', 'bantuan', 'tempat tinggal', 'makanan'] },
            { category: 'Darurat', examples: ['emergency', 'darurat', 'saluran'] },
            { category: 'Baca Semua', examples: ['baca semua', 'baca semuanya'] },
            { category: 'Hentikan', examples: ['hentikan', 'berhenti'] }
          ]
        };
      default:
        return {
          title: 'Voice Command Shortcuts',
          commands: [
            { category: 'Donations', examples: ['donate', 'red cross', 'caritas'] },
            { category: 'Volunteer', examples: ['volunteer', 'help out'] },
            { category: 'Support', examples: ['help', 'support', 'shelter', 'food', 'counseling'] },
            { category: 'Emergency', examples: ['emergency', 'urgent', 'hotline'] },
            { category: 'Read All', examples: ['read all', 'read everything'] },
            { category: 'Stop', examples: ['stop', 'stop reading'] }
          ]
        };
    }
  };

  const commandsHelp = getVoiceCommandsHelp();

  // Animated hints for voice commands
  const getVoiceHints = () => {
    switch (currentLang) {
      case 'zh':
        return [
          '試試說："捐款"',
          '試試說："紅十字"',
          '試試說："義工"',
          '試試說："幫助"',
          '試試說："緊急"',
          '試試說："住宿"'
        ];
      case 'tl':
        return [
          'Subukan: "donate"',
          'Subukan: "red cross"',
          'Subukan: "volunteer"',
          'Subukan: "help"',
          'Subukan: "emergency"',
          'Subukan: "shelter"'
        ];
      case 'id':
        return [
          'Coba: "donasi"',
          'Coba: "palang merah"',
          'Coba: "sukarelawan"',
          'Coba: "bantuan"',
          'Coba: "darurat"',
          'Coba: "tempat tinggal"'
        ];
      default:
        return [
          'Try saying: "donate"',
          'Try saying: "red cross"',
          'Try saying: "volunteer"',
          'Try saying: "help"',
          'Try saying: "emergency"',
          'Try saying: "shelter"'
        ];
    }
  };

  const hints = getVoiceHints();

  // Text-to-speech function for voice confirmation
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = languages[currentLang].code;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        if (onEnd) onEnd();
      };
      
      window.speechSynthesis.speak(utterance);
    } else if (onEnd) {
      onEnd();
    }
  }, [currentLang]);

  // Stop all speech
  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsReadingAll(false);
    setCurrentReadingIndex(0);
  }, []);

  // Read all emergency contacts sequentially
  const readAllContacts = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      toast({
        title: currentLang === 'zh' ? '不支援' : currentLang === 'tl' ? 'Hindi suportado' : currentLang === 'id' ? 'Tidak didukung' : 'Not supported',
        description: currentLang === 'zh' 
          ? '您的瀏覽器不支援語音播放。'
          : currentLang === 'tl'
          ? 'Ang iyong browser ay hindi sumusuporta sa voice playback.'
          : currentLang === 'id'
          ? 'Browser Anda tidak mendukung pemutaran suara.'
          : 'Your browser does not support voice playback.',
        variant: 'destructive',
      });
      return;
    }

    setIsReadingAll(true);
    setCurrentReadingIndex(0);

    // Filter emergency contacts (red cross, caritas, emergency lines, etc.)
    const emergencyResources = resources.filter(r => 
      r.icon === '✚' || 
      r.icon === '🙏' || 
      r.icon === '🚨' ||
      r.icon === '🧠' ||
      r.keywords.some(k => k.toLowerCase().includes('emergency') || k.toLowerCase().includes('緊急') || k.toLowerCase().includes('emerhensya') || k.toLowerCase().includes('darurat'))
    );

    const introMsg = currentLang === 'zh'
      ? `正在播放 ${emergencyResources.length} 個緊急聯絡資訊`
      : currentLang === 'tl'
      ? `Nagbabasa ng ${emergencyResources.length} emergency contact`
      : currentLang === 'id'
      ? `Membaca ${emergencyResources.length} kontak darurat`
      : `Reading ${emergencyResources.length} emergency contacts`;

    toast({
      title: currentLang === 'zh' ? '緊急聯絡資訊' : currentLang === 'tl' ? 'Emergency Contacts' : currentLang === 'id' ? 'Kontak Darurat' : 'Emergency Contacts',
      description: introMsg,
      duration: 3000,
    });

    const readNext = (index: number) => {
      if (index >= emergencyResources.length) {
        setIsReadingAll(false);
        setCurrentReadingIndex(0);
        const doneMsg = currentLang === 'zh'
          ? '已完成播放所有緊急聯絡資訊'
          : currentLang === 'tl'
          ? 'Natapos na ang pagbabasa ng lahat ng emergency contact'
          : currentLang === 'id'
          ? 'Selesai membaca semua kontak darurat'
          : 'Finished reading all emergency contacts';
        speak(doneMsg);
        return;
      }

      setCurrentReadingIndex(index);
      const resource = emergencyResources[index];
      
      // Build message
      const contactParts: string[] = [];
      resource.contacts.forEach((contact, idx) => {
        if (idx < 3) { // Read first 3 contacts only
          contactParts.push(`${contact.l}: ${contact.v}`);
        }
      });

      const message = currentLang === 'zh'
        ? `${resource.title}。${contactParts.join('。')}`
        : currentLang === 'tl'
        ? `${resource.title}. ${contactParts.join('. ')}`
        : currentLang === 'id'
        ? `${resource.title}. ${contactParts.join('. ')}`
        : `${resource.title}. ${contactParts.join('. ')}`;

      speak(message, () => {
        // Brief pause between contacts
        setTimeout(() => readNext(index + 1), 800);
      });
    };

    // Start with intro then first contact
    speak(introMsg, () => {
      setTimeout(() => readNext(0), 500);
    });
  }, [resources, currentLang, speak, toast]);

  // Request microphone permission
  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setShowPermissionRequest(false);
      setVoiceError('');
      
      const successMsg = currentLang === 'zh' 
        ? '✓ 麥克風權限已授予。請再次點擊語音按鈕。'
        : currentLang === 'tl'
        ? '✓ Binigyan ng microphone permission. I-click ang voice button muli.'
        : currentLang === 'id'
        ? '✓ Izin mikrofon diberikan. Klik tombol suara lagi.'
        : '✓ Microphone permission granted. Click the voice button again.';
      
      toast({
        title: currentLang === 'zh' ? '成功' : currentLang === 'tl' ? 'Tagumpay' : currentLang === 'id' ? 'Berhasil' : 'Success',
        description: successMsg,
      });
    } catch (error) {
      const errorMsg = currentLang === 'zh'
        ? '無法獲得麥克風權限。請檢查瀏覽器設定。'
        : currentLang === 'tl'
        ? 'Hindi makuha ang microphone permission. Suriin ang browser settings.'
        : currentLang === 'id'
        ? 'Tidak dapat memperoleh izin mikrofon. Periksa pengaturan browser.'
        : 'Unable to obtain microphone permission. Please check browser settings.';
      
      setVoiceError(errorMsg);
    }
  };

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

  // Animated hints rotation
  useEffect(() => {
    // Only show hints when idle (no search value, no suggestions, not listening, no voice match)
    const isIdle = !searchValue && suggestions.length === 0 && !isListening && !isVoiceMatch;
    
    if (!isIdle) {
      setShowHint(false);
      return;
    }

    // Initial delay before showing first hint
    const initialDelay = setTimeout(() => {
      setShowHint(true);
    }, 1000);

    // Rotate hints every 4 seconds
    const interval = setInterval(() => {
      setShowHint(false);
      
      setTimeout(() => {
        setCurrentHint((prev) => (prev + 1) % hints.length);
        setShowHint(true);
      }, 300); // Brief pause during transition
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [searchValue, suggestions.length, isListening, isVoiceMatch, hints.length]);

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
      const val = transcript.toLowerCase().trim();
      
      // Check for "read all" command first
      const readAllKeywords = ['read all', 'read everything', '播放全部', '全部播放', 'basahin lahat', 'baca semua'];
      if (readAllKeywords.some(keyword => val.includes(keyword))) {
        const confirmMsg = currentLang === 'zh'
          ? '正在播放所有緊急聯絡資訊'
          : currentLang === 'tl'
          ? 'Babasahin ang lahat ng emergency contact'
          : currentLang === 'id'
          ? 'Membaca semua kontak darurat'
          : 'Reading all emergency contacts';
        
        setVoiceStatus(confirmMsg);
        setTimeout(() => {
          readAllContacts();
          setVoiceStatus('');
        }, 500);
        return;
      }

      // Check for "stop" command
      const stopKeywords = ['stop', 'stop reading', '停止', '停止播放', 'ihinto', 'hentikan'];
      if (stopKeywords.some(keyword => val.includes(keyword))) {
        stopSpeaking();
        const stoppedMsg = currentLang === 'zh'
          ? '已停止播放'
          : currentLang === 'tl'
          ? 'Tumigil na'
          : currentLang === 'id'
          ? 'Berhenti'
          : 'Stopped';
        setVoiceStatus(stoppedMsg);
        setTimeout(() => setVoiceStatus(''), 2000);
        return;
      }
      
      // Voice confirmation - speak back what was heard
      const heardMsg = currentLang === 'zh' 
        ? `聽到：${transcript}`
        : currentLang === 'tl'
        ? `Narinig: ${transcript}`
        : currentLang === 'id'
        ? `Mendengar: ${transcript}`
        : `I heard: ${transcript}`;
      speak(heardMsg);
      
      // Define voice command shortcuts (multilingual)
      const commandMap: Record<string, string[]> = {
        // Donation commands
        'donate': ['donate', 'donation', '捐款', '捐贈', 'magbigay', 'donasyon', 'donasi', 'menyumbang'],
        'red cross': ['red cross', 'redcross', '紅十字', '红十字', 'pulang krus', 'palang merah'],
        'caritas': ['caritas', '明愛', '明爱', 'caritas'],
        
        // Volunteer commands
        'volunteer': ['volunteer', 'help out', '義工', '义工', '志願者', 'boluntaryo', 'sukarelawan', 'relawan'],
        
        // Support commands
        'help': ['help', 'support', 'assistance', '幫助', '帮助', '支援', 'tulong', 'bantuan'],
        'shelter': ['shelter', 'housing', '住宿', '庇護', '临时住所', 'tirahan', 'tempat tinggal'],
        'food': ['food', 'meal', '食物', '膳食', 'pagkain', 'makanan'],
        'counseling': ['counseling', 'mental health', 'therapy', '輔導', '心理', 'konsultasyon', 'konseling'],
        
        // Emergency commands
        'emergency': ['emergency', 'urgent', '緊急', '紧急', 'emerhensya', 'darurat'],
        'hotline': ['hotline', 'call', '熱線', '热线', 'telepono', 'saluran'],
      };
      
      // Check if the transcript matches any command
      let matchedResource: Resource | null = null;
      let commandMatch = false;
      
      for (const [commandType, keywords] of Object.entries(commandMap)) {
        if (keywords.some(keyword => val.includes(keyword))) {
          // Find resource that matches this command type
          const resource = resources.find(r => 
            r.keywords.some(k => k.toLowerCase().includes(commandType)) ||
            r.title.toLowerCase().includes(commandType)
          );
          
          if (resource) {
            matchedResource = resource;
            commandMatch = true;
            break;
          }
        }
      }
      
      // If direct command match found, execute immediately
      if (commandMatch && matchedResource) {
        const commandText = currentLang === 'zh' 
          ? '✓ 語音指令已識別'
          : currentLang === 'tl'
          ? '✓ Nakita ang voice command'
          : currentLang === 'id'
          ? '✓ Perintah suara terdeteksi'
          : '✓ Voice command recognized';
          
        setVoiceStatus(commandText);
        setSearchValue('');
        setIsVoiceMatch(false);
        
        // Speak resource name and first contact
        const firstContact = matchedResource.contacts[0];
        const contactMsg = currentLang === 'zh'
          ? `打開 ${matchedResource.title}。${firstContact ? `${firstContact.l}：${firstContact.v}` : ''}`
          : currentLang === 'tl'
          ? `Binuksan ang ${matchedResource.title}. ${firstContact ? `${firstContact.l}: ${firstContact.v}` : ''}`
          : currentLang === 'id'
          ? `Membuka ${matchedResource.title}. ${firstContact ? `${firstContact.l}: ${firstContact.v}` : ''}`
          : `Opening ${matchedResource.title}. ${firstContact ? `${firstContact.l}: ${firstContact.v}` : ''}`;
        
        setTimeout(() => speak(contactMsg), 800);
        
        // Execute command immediately
        setTimeout(() => {
          onSelectResource(matchedResource!);
          setVoiceStatus('');
          setVoiceMatchedIndex(null);
        }, 800);
        
        return;
      }
      
      // Otherwise, proceed with normal search
      setSearchValue(transcript);
      setVoiceError('');
      setIsVoiceMatch(true);
      
      // Find best match and highlight it
      const matches = resources.filter(
        (r) =>
          r.title.toLowerCase().includes(val) ||
          r.keywords.some((k) => k.toLowerCase().includes(val))
      );
      
      if (matches.length > 0) {
        // Highlight the first (best) match
        setVoiceMatchedIndex(0);
        
        // Auto-select if there's only one match after a brief delay
        if (matches.length === 1) {
          setTimeout(() => {
            onSelectResource(matches[0]);
            setSearchValue('');
            setSuggestions([]);
            setVoiceMatchedIndex(null);
            setIsVoiceMatch(false);
          }, 1500);
        } else {
          // Clear highlight after 3 seconds if multiple matches
          setTimeout(() => {
            setVoiceMatchedIndex(null);
            setIsVoiceMatch(false);
          }, 3000);
        }
      }
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      setVoiceStatus('');
      
      let errorMsg = '';
      let showPermission = false;
      
      if (event.error === 'no-speech') {
        errorMsg = currentLang === 'zh' 
          ? '未檢測到語音。請再試一次。'
          : currentLang === 'tl'
          ? 'Walang narinig na salita. Subukan muli.'
          : currentLang === 'id'
          ? 'Tidak ada ucapan yang terdeteksi. Coba lagi.'
          : 'No speech detected. Please try again.';
      } else if (event.error === 'not-allowed') {
        showPermission = true;
        errorMsg = currentLang === 'zh'
          ? '需要麥克風權限才能使用語音搜尋。'
          : currentLang === 'tl'
          ? 'Kailangan ng microphone permission para sa voice search.'
          : currentLang === 'id'
          ? 'Izin mikrofon diperlukan untuk pencarian suara.'
          : 'Microphone permission is required for voice search.';
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
      setShowPermissionRequest(showPermission);
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
            className="flex-1 px-4 py-3 bg-secondary border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:shadow-md transition-all duration-200 hover:bg-muted hover:border-muted-foreground/20"
            aria-label={label}
          />
          
          <Popover open={showCommandsHelp} onOpenChange={setShowCommandsHelp}>
            <PopoverTrigger asChild>
              <button
                className="p-3 rounded-xl transition-all duration-200 bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground hover:shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
                aria-label={currentLang === 'zh' ? '查看語音指令' : currentLang === 'tl' ? 'Tingnan ang voice commands' : currentLang === 'id' ? 'Lihat perintah suara' : 'View voice commands'}
                title={currentLang === 'zh' ? '可用的語音指令' : currentLang === 'tl' ? 'Available voice commands' : currentLang === 'id' ? 'Perintah suara yang tersedia' : 'Available voice commands'}
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-card border-2 border-border shadow-xl" align="end">
              <div className="space-y-3">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  {commandsHelp.title}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {currentLang === 'zh' 
                    ? '說出以下任何關鍵詞以快速打開資源：'
                    : currentLang === 'tl'
                    ? 'Sabihin ang alinman sa mga keyword upang mabilis na buksan:'
                    : currentLang === 'id'
                    ? 'Ucapkan salah satu kata kunci untuk membuka cepat:'
                    : 'Say any of these keywords to quickly open resources:'
                  }
                </div>
                <div className="space-y-3">
                  {commandsHelp.commands.map((cmd, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-sm text-primary">{cmd.category}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {cmd.examples.map((example, exIdx) => (
                          <span
                            key={exIdx}
                            className="inline-block px-2 py-1 bg-secondary text-foreground text-xs rounded-md font-mono"
                          >
                            "{example}"
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                  {currentLang === 'zh' 
                    ? '💡 提示：也可以輸入資源名稱進行搜尋'
                    : currentLang === 'tl'
                    ? '💡 Tip: Maaari ka ring mag-type ng resource name para maghanap'
                    : currentLang === 'id'
                    ? '💡 Tips: Anda juga bisa mengetik nama resource untuk mencari'
                    : '💡 Tip: You can also type resource names to search'
                  }
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <button
            onClick={handleVoiceSearch}
            className={`p-4 rounded-xl transition-all duration-200 min-w-[52px] min-h-[52px] flex items-center justify-center ${
              isListening
                ? 'bg-primary text-primary-foreground animate-pulse shadow-md'
                : isSpeaking
                ? 'bg-accent text-accent-foreground'
                : 'bg-secondary text-foreground hover:bg-accent hover:shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring'
            } active:scale-95`}
            aria-label={
              isListening 
                ? (currentLang === 'zh' ? '聆聽中' : currentLang === 'tl' ? 'Nakikinig' : currentLang === 'id' ? 'Mendengarkan' : 'Listening')
                : isSpeaking
                ? (currentLang === 'zh' ? '播放中' : currentLang === 'tl' ? 'Nagsasalita' : currentLang === 'id' ? 'Berbicara' : 'Speaking')
                : (currentLang === 'zh' ? '開始語音搜尋' : currentLang === 'tl' ? 'Simulan ang voice search' : currentLang === 'id' ? 'Mulai pencarian suara' : 'Start voice search')
            }
            aria-live="polite"
            aria-atomic="true"
            title={currentLang === 'zh' ? '點擊開始語音搜尋' : currentLang === 'tl' ? 'I-click upang simulan ang voice search' : currentLang === 'id' ? 'Klik untuk memulai pencarian suara' : 'Click to start voice search'}
          >
            {isSpeaking ? <Volume2 className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Animated Voice Command Hints */}
        {!searchValue && suggestions.length === 0 && !isListening && !isVoiceMatch && (
          <div 
            className={`mt-3 flex items-center gap-2 text-xs text-muted-foreground transition-all duration-300 ${
              showHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <Mic className="w-3.5 h-3.5 flex-shrink-0 animate-pulse-subtle text-primary" />
            <span className="font-medium">{hints[currentHint]}</span>
          </div>
        )}
        
        {voiceStatus && (
          <div className="text-xs text-primary mt-2 min-h-[18px] font-medium animate-pulse" role="status" aria-live="polite">
            {voiceStatus}
          </div>
        )}

        {isReadingAll && (
          <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-lg" role="status" aria-live="polite">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1">
                <Volume2 className="w-4 h-4 text-primary animate-pulse" />
                <div className="text-xs font-medium text-foreground">
                  {currentLang === 'zh' 
                    ? `正在播放緊急聯絡 ${currentReadingIndex + 1}`
                    : currentLang === 'tl'
                    ? `Binabasa ang emergency contact ${currentReadingIndex + 1}`
                    : currentLang === 'id'
                    ? `Membaca kontak darurat ${currentReadingIndex + 1}`
                    : `Reading emergency contact ${currentReadingIndex + 1}`
                  }
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={stopSpeaking}
                className="h-7 text-xs"
              >
                {currentLang === 'zh' ? '停止' : currentLang === 'tl' ? 'Ihinto' : currentLang === 'id' ? 'Hentikan' : 'Stop'}
              </Button>
            </div>
          </div>
        )}
        
        {isVoiceMatch && suggestions.length > 0 && (
          <div className="text-xs text-primary mt-2 font-medium" role="status" aria-live="polite">
            {currentLang === 'zh' 
              ? `找到 ${suggestions.length} 個匹配項${suggestions.length === 1 ? ' - 自動選擇...' : ''}`
              : currentLang === 'tl'
              ? `${suggestions.length} tugma natagpuan${suggestions.length === 1 ? ' - Kusang pipiliin...' : ''}`
              : currentLang === 'id'
              ? `${suggestions.length} kecocokan ditemukan${suggestions.length === 1 ? ' - Memilih otomatis...' : ''}`
              : `${suggestions.length} match${suggestions.length !== 1 ? 'es' : ''} found${suggestions.length === 1 ? ' - Auto-selecting...' : ''}`
            }
          </div>
        )}
        
        {voiceError && (
          <Alert variant="destructive" className="mt-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm space-y-3">
              <div>{voiceError}</div>
              {showPermissionRequest && (
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    onClick={requestMicrophonePermission}
                    size="sm"
                    className="w-full text-sm font-semibold"
                    variant="default"
                  >
                    {currentLang === 'zh' 
                      ? '🎤 允許麥克風存取'
                      : currentLang === 'tl'
                      ? '🎤 Payagan ang Microphone Access'
                      : currentLang === 'id'
                      ? '🎤 Izinkan Akses Mikrofon'
                      : '🎤 Allow Microphone Access'
                    }
                  </Button>
                  <div className="text-xs text-muted-foreground space-y-1">
                    {currentLang === 'zh' ? (
                      <>
                        <p className="font-semibold">如何啟用：</p>
                        <p>1. 點擊上方按鈕</p>
                        <p>2. 在彈出視窗中選擇「允許」</p>
                        <p>3. 或前往瀏覽器設定 → 隱私權 → 麥克風</p>
                      </>
                    ) : currentLang === 'tl' ? (
                      <>
                        <p className="font-semibold">Paano paganahin:</p>
                        <p>1. I-click ang button sa itaas</p>
                        <p>2. Piliin "Allow" sa popup</p>
                        <p>3. O pumunta sa browser settings → Privacy → Microphone</p>
                      </>
                    ) : currentLang === 'id' ? (
                      <>
                        <p className="font-semibold">Cara mengaktifkan:</p>
                        <p>1. Klik tombol di atas</p>
                        <p>2. Pilih "Allow" di popup</p>
                        <p>3. Atau buka pengaturan browser → Privasi → Mikrofon</p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold">How to enable:</p>
                        <p>1. Click the button above</p>
                        <p>2. Select "Allow" in the popup</p>
                        <p>3. Or go to browser settings → Privacy → Microphone</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </AlertDescription>
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
                  setVoiceMatchedIndex(null);
                  setIsVoiceMatch(false);
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200 border-b border-border last:border-0 ${
                  voiceMatchedIndex === idx && isVoiceMatch
                    ? 'bg-primary/10 shadow-md scale-[1.05] ring-2 ring-primary animate-pulse'
                    : hoveredIndex === idx 
                    ? 'bg-accent shadow-sm scale-[1.02]' 
                    : hoveredIndex !== null || (voiceMatchedIndex !== null && voiceMatchedIndex !== idx)
                    ? 'opacity-30' 
                    : 'hover:bg-accent hover:shadow-sm'
                } focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none`}
                role="option"
                aria-selected={hoveredIndex === idx}
              >
                <span className="text-2xl" aria-hidden="true">
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
