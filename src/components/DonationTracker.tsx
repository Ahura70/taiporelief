import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Milestone {
  amount: number;
  label: string;
  reached: boolean;
}

interface DonationTrackerProps {
  title: string;
  raised: string;
  goal: string;
  currency: string;
  milestones: Array<{ label: string }>;
}

export const DonationTracker = ({
  title,
  raised,
  goal,
  currency,
  milestones: milestoneLabels,
}: DonationTrackerProps) => {
  // Example data - in production this would come from an API
  const raisedAmount = 28500000; // HKD 28.5M
  const goalAmount = 50000000; // HKD 50M goal
  const percentage = Math.min((raisedAmount / goalAmount) * 100, 100);
  
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const milestones: Milestone[] = [
    { amount: 25, label: milestoneLabels[0]?.label || '25%', reached: percentage >= 25 },
    { amount: 50, label: milestoneLabels[1]?.label || '50%', reached: percentage >= 50 },
    { amount: 75, label: milestoneLabels[2]?.label || '75%', reached: percentage >= 75 },
    { amount: 100, label: milestoneLabels[3]?.label || '100%', reached: percentage >= 100 },
  ];

  const formatAmount = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    }
    return amount.toLocaleString();
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border rounded-2xl p-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">
            {currency}{formatAmount(raisedAmount)}
          </span>
          <span className="text-sm text-muted-foreground">
            / {currency}{formatAmount(goalAmount)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {raised} • {percentage.toFixed(1)}% {goal}
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Progress 
            value={animatedProgress} 
            className="h-4 bg-secondary"
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg transition-all duration-700 ease-out"
            style={{ left: `calc(${animatedProgress}% - 6px)` }}
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                milestone.reached
                  ? 'bg-primary/10 scale-105'
                  : 'bg-secondary/50'
              }`}
            >
              {milestone.reached ? (
                <CheckCircle2 className="w-6 h-6 text-primary animate-scale-in" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground" />
              )}
              <span
                className={`text-xs font-semibold ${
                  milestone.reached ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-card rounded-lg border border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          💝 {raised.includes('Raised') ? 'Every donation helps families rebuild their lives' : '每筆捐款都能幫助家庭重建生活'}
        </p>
      </div>
    </div>
  );
};
