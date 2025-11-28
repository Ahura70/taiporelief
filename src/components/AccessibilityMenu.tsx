import { useState, useEffect } from 'react';
import { Settings, Type, Contrast, Move, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';

interface AccessibilityMenuProps {
  title: string;
  fontSizeLabel: string;
  highContrastLabel: string;
  reduceMotionLabel: string;
  lineSpacingLabel: string;
}

export const AccessibilityMenu = ({
  title,
  fontSizeLabel,
  highContrastLabel,
  reduceMotionLabel,
  lineSpacingLabel,
}: AccessibilityMenuProps) => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(1.5);

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('a11y-font-size');
    const savedHighContrast = localStorage.getItem('a11y-high-contrast');
    const savedReduceMotion = localStorage.getItem('a11y-reduce-motion');
    const savedLineSpacing = localStorage.getItem('a11y-line-spacing');

    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedReduceMotion) setReduceMotion(savedReduceMotion === 'true');
    if (savedLineSpacing) setLineSpacing(Number(savedLineSpacing));
  }, []);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('a11y-font-size', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('a11y-high-contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    // Apply reduce motion
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    localStorage.setItem('a11y-reduce-motion', reduceMotion.toString());
  }, [reduceMotion]);

  useEffect(() => {
    // Apply line spacing
    document.documentElement.style.setProperty('--line-height-base', lineSpacing.toString());
    localStorage.setItem('a11y-line-spacing', lineSpacing.toString());
  }, [lineSpacing]);

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setReduceMotion(false);
    setLineSpacing(1.5);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-24 right-5 z-40 bg-card shadow-md"
          aria-label={title}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{title}</h3>

          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              {fontSizeLabel}
            </Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                disabled={fontSize <= 80}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center font-mono text-sm">
                {fontSize}%
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                disabled={fontSize >= 150}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast" className="flex items-center gap-2">
              <Contrast className="h-4 w-4" />
              {highContrastLabel}
            </Label>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={setHighContrast}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion" className="flex items-center gap-2">
              <Move className="h-4 w-4" />
              {reduceMotionLabel}
            </Label>
            <Switch
              id="reduce-motion"
              checked={reduceMotion}
              onCheckedChange={setReduceMotion}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              {lineSpacingLabel}
            </Label>
            <Slider
              value={[lineSpacing]}
              onValueChange={([value]) => setLineSpacing(value)}
              min={1.2}
              max={2.5}
              step={0.1}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground text-center">
              {lineSpacing.toFixed(1)}
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={resetSettings}
          >
            Reset to Default
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
