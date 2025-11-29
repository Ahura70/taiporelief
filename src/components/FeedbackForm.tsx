import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const feedbackSchema = z.object({
  feedbackType: z.enum(['resource_update', 'new_resource', 'general'], {
    required_error: 'Please select a feedback type',
  }),
  resourceName: z.string().trim().max(200, 'Resource name must be less than 200 characters').optional(),
  category: z.string().trim().max(100, 'Category must be less than 100 characters').optional(),
  contactInfo: z.string().trim().max(500, 'Contact info must be less than 500 characters').optional(),
  description: z.string()
    .trim()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  submitterName: z.string().trim().max(100, 'Name must be less than 100 characters').optional(),
  submitterEmail: z.string().trim().email('Invalid email').max(255, 'Email must be less than 255 characters').optional().or(z.literal('')),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

interface FeedbackFormProps {
  onClose: () => void;
  translations: {
    feedbackTitle: string;
    feedbackType: string;
    feedbackTypeUpdate: string;
    feedbackTypeNew: string;
    feedbackTypeGeneral: string;
    resourceName: string;
    resourceNamePlaceholder: string;
    category: string;
    categoryPlaceholder: string;
    contactInfo: string;
    contactInfoPlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    yourName: string;
    yourEmail: string;
    submit: string;
    submitting: string;
    close: string;
    feedbackSuccess: string;
    feedbackSuccessDesc: string;
  };
}

export const FeedbackForm = ({ onClose, translations: t }: FeedbackFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const feedbackType = watch('feedbackType');

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('feedback').insert({
        feedback_type: data.feedbackType,
        resource_name: data.resourceName || null,
        category: data.category || null,
        contact_info: data.contactInfo || null,
        description: data.description,
        submitter_name: data.submitterName || null,
        submitter_email: data.submitterEmail || null,
      });

      if (error) throw error;

      toast({
        title: t.feedbackSuccess,
        description: t.feedbackSuccessDesc,
        duration: 4000,
      });
      onClose();
    } catch (error) {
      console.error('Failed to submit feedback');
      toast({
        title: 'Error',
        description: 'Failed to submit feedback. Please try again.',
        variant: 'destructive',
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-card w-full sm:max-w-2xl rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-auto animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-card-foreground">{t.feedbackTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent hover:shadow-sm rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div>
            <Label htmlFor="feedbackType" className="text-sm font-semibold mb-2 block">
              {t.feedbackType} *
            </Label>
            <Select
              onValueChange={(value) => setValue('feedbackType', value as any)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t.feedbackType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="resource_update">{t.feedbackTypeUpdate}</SelectItem>
                <SelectItem value="new_resource">{t.feedbackTypeNew}</SelectItem>
                <SelectItem value="general">{t.feedbackTypeGeneral}</SelectItem>
              </SelectContent>
            </Select>
            {errors.feedbackType && (
              <p className="text-sm text-destructive mt-1">{errors.feedbackType.message}</p>
            )}
          </div>

          {(feedbackType === 'resource_update' || feedbackType === 'new_resource') && (
            <>
              <div>
                <Label htmlFor="resourceName" className="text-sm font-semibold mb-2 block">
                  {t.resourceName}
                </Label>
                <Input
                  id="resourceName"
                  placeholder={t.resourceNamePlaceholder}
                  {...register('resourceName')}
                  className="w-full"
                />
                {errors.resourceName && (
                  <p className="text-sm text-destructive mt-1">{errors.resourceName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="category" className="text-sm font-semibold mb-2 block">
                  {t.category}
                </Label>
                <Input
                  id="category"
                  placeholder={t.categoryPlaceholder}
                  {...register('category')}
                  className="w-full"
                />
                {errors.category && (
                  <p className="text-sm text-destructive mt-1">{errors.category.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="contactInfo" className="text-sm font-semibold mb-2 block">
                  {t.contactInfo}
                </Label>
                <Input
                  id="contactInfo"
                  placeholder={t.contactInfoPlaceholder}
                  {...register('contactInfo')}
                  className="w-full"
                />
                {errors.contactInfo && (
                  <p className="text-sm text-destructive mt-1">{errors.contactInfo.message}</p>
                )}
              </div>
            </>
          )}

          <div>
            <Label htmlFor="description" className="text-sm font-semibold mb-2 block">
              {t.description} *
            </Label>
            <Textarea
              id="description"
              placeholder={t.descriptionPlaceholder}
              {...register('description')}
              className="w-full min-h-[120px]"
            />
            {errors.description && (
              <p className="text-sm text-destructive mt-1">{errors.description.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="submitterName" className="text-sm font-semibold mb-2 block">
              {t.yourName}
            </Label>
            <Input
              id="submitterName"
              {...register('submitterName')}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="submitterEmail" className="text-sm font-semibold mb-2 block">
              {t.yourEmail}
            </Label>
            <Input
              id="submitterEmail"
              type="email"
              {...register('submitterEmail')}
              className="w-full"
            />
            {errors.submitterEmail && (
              <p className="text-sm text-destructive mt-1">{errors.submitterEmail.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
            >
              {t.close}
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? t.submitting : t.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};