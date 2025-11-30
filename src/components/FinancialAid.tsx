import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { DollarSign, Home, Heart, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import { z } from 'zod';

// Form validation schemas
const emergencyCashSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  hkid: z.string().trim().min(8, 'Invalid HKID').max(11),
  phone: z.string().trim().min(8).max(20),
  email: z.string().trim().email('Invalid email').max(255),
  address: z.string().trim().min(10).max(500),
  householdSize: z.string().trim().min(1),
  additionalInfo: z.string().max(1000).optional(),
});

const deceasedSubsidySchema = z.object({
  applicantName: z.string().trim().min(2).max(100),
  applicantHkid: z.string().trim().min(8).max(11),
  applicantPhone: z.string().trim().min(8).max(20),
  applicantEmail: z.string().trim().email().max(255),
  deceasedName: z.string().trim().min(2).max(100),
  deceasedHkid: z.string().trim().min(8).max(11),
  relationship: z.string().trim().min(2).max(50),
  deathCertificate: z.string().trim().min(5).max(100),
  bankAccount: z.string().trim().min(5).max(50),
  additionalInfo: z.string().max(1000).optional(),
});

const livingAllowanceSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  hkid: z.string().trim().min(8).max(11),
  phone: z.string().trim().min(8).max(20),
  email: z.string().trim().email().max(255),
  currentAddress: z.string().trim().min(10).max(500),
  affectedAddress: z.string().trim().min(10).max(500),
  householdMembers: z.string().trim().min(1),
  bankAccount: z.string().trim().min(5).max(50),
  additionalInfo: z.string().max(1000).optional(),
});

type FormType = 'emergency' | 'deceased' | 'living';

interface FinancialAidProps {
  title: string;
}

export const FinancialAid = ({ title }: FinancialAidProps) => {
  const { currentLang } = useLanguage();
  const t = translations[currentLang];
  const [submitting, setSubmitting] = useState<FormType | null>(null);

  const handleEmergencyCashSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting('emergency');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      hkid: formData.get('hkid') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      address: formData.get('address') as string,
      householdSize: formData.get('householdSize') as string,
      additionalInfo: formData.get('additionalInfo') as string,
    };

    try {
      emergencyCashSchema.parse(data);

      const { error } = await supabase.from('financial_aid_applications').insert({
        application_type: 'emergency_cash',
        applicant_name: data.fullName,
        applicant_hkid: data.hkid,
        applicant_phone: data.phone,
        applicant_email: data.email,
        household_address: data.address,
        household_size: parseInt(data.householdSize),
        additional_info: data.additionalInfo,
      });

      if (error) throw error;

      toast.success(t.applicationSuccess);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(t.applicationError);
      }
    } finally {
      setSubmitting(null);
    }
  };

  const handleDeceasedSubsidySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting('deceased');

    const formData = new FormData(e.currentTarget);
    const data = {
      applicantName: formData.get('applicantName') as string,
      applicantHkid: formData.get('applicantHkid') as string,
      applicantPhone: formData.get('applicantPhone') as string,
      applicantEmail: formData.get('applicantEmail') as string,
      deceasedName: formData.get('deceasedName') as string,
      deceasedHkid: formData.get('deceasedHkid') as string,
      relationship: formData.get('relationship') as string,
      deathCertificate: formData.get('deathCertificate') as string,
      bankAccount: formData.get('bankAccount') as string,
      additionalInfo: formData.get('additionalInfo') as string,
    };

    try {
      deceasedSubsidySchema.parse(data);

      const { error } = await supabase.from('financial_aid_applications').insert({
        application_type: 'deceased_subsidy',
        applicant_name: data.applicantName,
        applicant_hkid: data.applicantHkid,
        applicant_phone: data.applicantPhone,
        applicant_email: data.applicantEmail,
        deceased_name: data.deceasedName,
        deceased_hkid: data.deceasedHkid,
        relationship_to_deceased: data.relationship,
        death_certificate_number: data.deathCertificate,
        bank_account_number: data.bankAccount,
        additional_info: data.additionalInfo,
      });

      if (error) throw error;

      toast.success(t.applicationSuccess);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(t.applicationError);
      }
    } finally {
      setSubmitting(null);
    }
  };

  const handleLivingAllowanceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting('living');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      hkid: formData.get('hkid') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      currentAddress: formData.get('currentAddress') as string,
      affectedAddress: formData.get('affectedAddress') as string,
      householdMembers: formData.get('householdMembers') as string,
      bankAccount: formData.get('bankAccount') as string,
      additionalInfo: formData.get('additionalInfo') as string,
    };

    try {
      livingAllowanceSchema.parse(data);

      const { error } = await supabase.from('financial_aid_applications').insert({
        application_type: 'living_allowance',
        applicant_name: data.fullName,
        applicant_hkid: data.hkid,
        applicant_phone: data.phone,
        applicant_email: data.email,
        current_address: data.currentAddress,
        household_address: data.affectedAddress,
        household_size: parseInt(data.householdMembers),
        bank_account_number: data.bankAccount,
        additional_info: data.additionalInfo,
      });

      if (error) throw error;

      toast.success(t.applicationSuccess);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(t.applicationError);
      }
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <div className="space-y-6" id="financial-aid">
      <div className="flex items-center gap-3">
        <DollarSign className="w-7 h-7 text-primary" />
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            {t.financialAidOverview}
          </CardTitle>
          <CardDescription>{t.financialAidDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.emergencyCashTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$10,000</p>
              <p className="text-sm text-muted-foreground">{t.perHousehold}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.deceasedSubsidyTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$200,000</p>
              <p className="text-sm text-muted-foreground">{t.perDeceased}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t.livingAllowanceTitle}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">HK$50,000</p>
              <p className="text-sm text-muted-foreground">{t.perHousehold}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium mb-1">{t.needHelp}</p>
              <p className="text-muted-foreground">{t.financialAidHotline}: <a href="tel:18111" className="text-primary hover:underline">18111</a></p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="emergency" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="emergency">{t.emergencyCash}</TabsTrigger>
          <TabsTrigger value="deceased">{t.deceasedSubsidy}</TabsTrigger>
          <TabsTrigger value="living">{t.livingAllowance}</TabsTrigger>
        </TabsList>

        {/* Emergency Cash Subsidy */}
        <TabsContent value="emergency">
          <Card>
            <CardHeader>
              <CardTitle>{t.emergencyCashTitle}</CardTitle>
              <CardDescription>{t.emergencyCashDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.emergencyCashEligibility1}</li>
                  <li>{t.emergencyCashEligibility2}</li>
                  <li>{t.emergencyCashEligibility3}</li>
                </ul>
              </div>

              <form onSubmit={handleEmergencyCashSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.fullName} *</Label>
                    <Input id="fullName" name="fullName" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hkid">{t.hkidNumber} *</Label>
                    <Input id="hkid" name="hkid" required maxLength={11} placeholder="A123456(7)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phoneNumber} *</Label>
                    <Input id="phone" name="phone" type="tel" required maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.emailAddress} *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t.affectedAddress} *</Label>
                  <Input id="address" name="address" required maxLength={500} placeholder={t.addressPlaceholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="householdSize">{t.householdSize} *</Label>
                  <Input id="householdSize" name="householdSize" type="number" min="1" max="50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">{t.additionalInformation}</Label>
                  <Textarea id="additionalInfo" name="additionalInfo" maxLength={1000} rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={submitting === 'emergency'}>
                  {submitting === 'emergency' ? t.submitting : t.submitApplication}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Deceased Subsidy */}
        <TabsContent value="deceased">
          <Card>
            <CardHeader>
              <CardTitle>{t.deceasedSubsidyTitle}</CardTitle>
              <CardDescription>{t.deceasedSubsidyDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.deceasedSubsidyEligibility1}</li>
                  <li>{t.deceasedSubsidyEligibility2}</li>
                  <li>{t.deceasedSubsidyEligibility3}</li>
                </ul>
              </div>

              <form onSubmit={handleDeceasedSubsidySubmit} className="space-y-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">{t.applicantInformation}</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="applicantName">{t.applicantName} *</Label>
                      <Input id="applicantName" name="applicantName" required maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applicantHkid">{t.applicantHkid} *</Label>
                      <Input id="applicantHkid" name="applicantHkid" required maxLength={11} placeholder="A123456(7)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applicantPhone">{t.phoneNumber} *</Label>
                      <Input id="applicantPhone" name="applicantPhone" type="tel" required maxLength={20} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applicantEmail">{t.emailAddress} *</Label>
                      <Input id="applicantEmail" name="applicantEmail" type="email" required maxLength={255} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-sm">{t.deceasedInformation}</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="deceasedName">{t.deceasedName} *</Label>
                      <Input id="deceasedName" name="deceasedName" required maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deceasedHkid">{t.deceasedHkid} *</Label>
                      <Input id="deceasedHkid" name="deceasedHkid" required maxLength={11} placeholder="A123456(7)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">{t.relationshipToDeceased} *</Label>
                      <Input id="relationship" name="relationship" required maxLength={50} placeholder={t.relationshipPlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deathCertificate">{t.deathCertificateNumber} *</Label>
                      <Input id="deathCertificate" name="deathCertificate" required maxLength={100} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankAccount">{t.bankAccountNumber} *</Label>
                  <Input id="bankAccount" name="bankAccount" required maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">{t.additionalInformation}</Label>
                  <Textarea id="additionalInfo" name="additionalInfo" maxLength={1000} rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={submitting === 'deceased'}>
                  {submitting === 'deceased' ? t.submitting : t.submitApplication}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Living Allowance */}
        <TabsContent value="living">
          <Card>
            <CardHeader>
              <CardTitle>{t.livingAllowanceTitle}</CardTitle>
              <CardDescription>{t.livingAllowanceDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t.eligibilityCriteria}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>{t.livingAllowanceEligibility1}</li>
                  <li>{t.livingAllowanceEligibility2}</li>
                  <li>{t.livingAllowanceEligibility3}</li>
                </ul>
              </div>

              <form onSubmit={handleLivingAllowanceSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.fullName} *</Label>
                    <Input id="fullName" name="fullName" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hkid">{t.hkidNumber} *</Label>
                    <Input id="hkid" name="hkid" required maxLength={11} placeholder="A123456(7)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phoneNumber} *</Label>
                    <Input id="phone" name="phone" type="tel" required maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.emailAddress} *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentAddress">{t.currentAddress} *</Label>
                  <Input id="currentAddress" name="currentAddress" required maxLength={500} placeholder={t.currentAddressPlaceholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="affectedAddress">{t.affectedAddress} *</Label>
                  <Input id="affectedAddress" name="affectedAddress" required maxLength={500} placeholder={t.addressPlaceholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="householdMembers">{t.householdMembers} *</Label>
                  <Input id="householdMembers" name="householdMembers" type="number" min="1" max="50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankAccount">{t.bankAccountNumber} *</Label>
                  <Input id="bankAccount" name="bankAccount" required maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">{t.additionalInformation}</Label>
                  <Textarea id="additionalInfo" name="additionalInfo" maxLength={1000} rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={submitting === 'living'}>
                  {submitting === 'living' ? t.submitting : t.submitApplication}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
