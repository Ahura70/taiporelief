import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FeedbackFormProps {
  title: string;
  placeholder: string;
  submitText: string;
  successText: string;
  closeText: string;
  reportText: string;
  suggestText: string;
}

export const FeedbackForm = ({
  title,
  placeholder,
  submitText,
  successText,
  closeText,
  reportText,
  suggestText
}: FeedbackFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [type, setType] = useState<'report' | 'suggest'>('report');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) return;

    // Store feedback in localStorage (could be enhanced to send to backend)
    const existingFeedback = localStorage.getItem('user_feedback');
    const feedbackList = existingFeedback ? JSON.parse(existingFeedback) : [];
    
    feedbackList.push({
      type,
      message: feedback,
      timestamp: new Date().toISOString()
    });
    
    localStorage.setItem('user_feedback', JSON.stringify(feedbackList));

    toast({
      title: successText,
      description: "Thank you for helping us improve",
      duration: 3000,
    });

    setFeedback('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button with improved touch target */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-40"
        aria-label="Open feedback form"
      >
        <MessageSquare className="w-6 h-6 mx-auto" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-card w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-auto animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
            <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors w-10 h-10 flex items-center justify-center"
                aria-label={closeText}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={type === 'report' ? 'default' : 'outline'}
                  onClick={() => setType('report')}
                  className="flex-1 min-h-[44px]"
                >
                  {reportText}
                </Button>
                <Button
                  type="button"
                  variant={type === 'suggest' ? 'default' : 'outline'}
                  onClick={() => setType('suggest')}
                  className="flex-1 min-h-[44px]"
                >
                  {suggestText}
                </Button>
              </div>

              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={placeholder}
                className="w-full min-h-[120px] px-4 py-3 bg-secondary border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />

              <Button
                type="submit"
                className="w-full gap-2 min-h-[44px]"
                disabled={!feedback.trim()}
              >
                <Send className="w-4 h-4" />
                {submitText}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
