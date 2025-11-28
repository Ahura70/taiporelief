import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { toast } from 'sonner';
import { languages } from '@/lib/translations';

export default function VoiceTest() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState<keyof typeof languages>('en');

  const testVoiceInput = () => {
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      toast.error('Voice input not supported on this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = languages[language].code;

    recognition.onstart = () => {
      setIsListening(true);
      toast.info('Listening... Speak now!');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1];
      const transcriptText = result[0].transcript;
      setTranscript(transcriptText);
      
      if (result.isFinal) {
        toast.success('Captured: ' + transcriptText);
      }
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      toast.error('Error: ' + event.error);
    };

    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (e) {
        recognition.stop();
        setTimeout(() => recognition.start(), 100);
      }
    }
  };

  const testTextToSpeech = () => {
    if (!transcript) {
      toast.error('No text to speak. Try voice input first!');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = languages[language].code;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => toast.info('Speaking...');
    utterance.onend = () => toast.success('Finished speaking');
    utterance.onerror = () => toast.error('Text-to-speech failed');
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Voice Input Test</h1>
          <p className="text-muted-foreground">Test speech recognition and text-to-speech</p>
        </div>

        <Card className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
              className="w-full p-2 border border-border rounded-lg bg-background"
            >
              {Object.entries(languages).map(([code, lang]) => (
                <option key={code} value={code}>
                  {lang.name} ({lang.code})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={testVoiceInput}
              className={`flex-1 ${isListening ? 'animate-pulse' : ''}`}
              variant={isListening ? 'default' : 'outline'}
            >
              {isListening ? <MicOff className="w-5 h-5 mr-2" /> : <Mic className="w-5 h-5 mr-2" />}
              {isListening ? 'Stop Listening' : 'Start Voice Input'}
            </Button>

            <Button
              onClick={testTextToSpeech}
              variant="outline"
              disabled={!transcript}
            >
              <Volume2 className="w-5 h-5 mr-2" />
              Speak Text
            </Button>
          </div>

          {transcript && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Transcript:</p>
              <p className="text-lg">{transcript}</p>
            </div>
          )}
        </Card>

        <Card className="p-6 space-y-2">
          <h3 className="font-semibold">How to test:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Click "Start Voice Input" and speak clearly</li>
            <li>Your speech will be transcribed in real-time</li>
            <li>Click "Speak Text" to hear the transcribed text</li>
            <li>Try different languages to test multilingual support</li>
          </ol>
        </Card>

        <Card className="p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Browser Compatibility</h3>
          <div className="text-sm space-y-1">
            <p>✅ Chrome/Edge: Full support</p>
            <p>✅ Safari: Full support</p>
            <p>⚠️ Firefox: Limited support</p>
            <p className="text-xs text-muted-foreground mt-2">
              Note: On mobile, you may need to grant microphone permissions
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
