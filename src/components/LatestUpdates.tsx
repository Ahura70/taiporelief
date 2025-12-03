import { Info, DollarSign, Home, Heart, Building, Phone, Globe, Scale, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LatestUpdatesProps {
  title: string;
  lastUpdated: string;
  independentInquiry: {
    title: string;
    committee: string;
    goal: string;
  };
  casualties: {
    title: string;
    deaths: string;
    injured: string;
    identification: string;
    searches: string;
    missing: string;
  };
  financialAssistance: {
    title: string;
    emergency: string;
    deceased: string;
    living: string;
    swd: string;
  };
  supportFund: {
    title: string;
    total: string;
    disbursements: string;
  };
  housing: {
    title: string;
    temporary: string;
    transitional: string;
    shelters: string;
    total: string;
  };
  socialHealth: {
    title: string;
    contacted: string;
    registered: string;
    hotline: string;
  };
  donations: {
    title: string;
    platform: string;
    whatsapp: string;
    distribution: string;
  };
  funeral: {
    title: string;
    assistance: string;
    support: string;
  };
  education: {
    title: string;
    school: string;
    funding: string;
    counseling: string;
  };
  medical: {
    title: string;
    feeWaivers: string;
    residentWaivers: string;
  };
  identityDocs: {
    title: string;
    replacements: string;
    services: string;
  };
  transport: {
    title: string;
    freeTaxis: string;
    details: string;
  };
  buildingSafety: {
    title: string;
    fsdPolice: string;
    wangFuk: string;
    bdChecks: string;
    ldInspections: string;
  };
  investigations: {
    title: string;
    arrests: string;
    icac: string;
  };
  website: {
    title: string;
    url: string;
    description: string;
  };
  closingMessage: string;
}

export const LatestUpdates = ({
  title,
  lastUpdated,
  independentInquiry,
  casualties,
  financialAssistance,
  supportFund,
  housing,
  socialHealth,
  donations,
  funeral,
  education,
  medical,
  identityDocs,
  transport,
  buildingSafety,
  investigations,
  website,
  closingMessage
}: LatestUpdatesProps) => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Info className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30">
        <CardHeader className="pb-2">
          <Badge variant="outline" className="w-fit text-xs">
            {lastUpdated}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Independent Inquiry - NEW */}
          <div className="space-y-2 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Scale className="w-4 h-4 text-destructive" />
              {independentInquiry.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{independentInquiry.committee}</li>
              <li>{independentInquiry.goal}</li>
            </ul>
          </div>

          {/* Casualties */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-destructive" />
              {casualties.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{casualties.deaths}</li>
              <li>{casualties.injured}</li>
              <li>{casualties.identification}</li>
              <li>{casualties.missing}</li>
              <li>{casualties.searches}</li>
            </ul>
          </div>

          {/* Financial Assistance */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              {financialAssistance.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{financialAssistance.emergency}</li>
              <li>{financialAssistance.deceased}</li>
              <li>{financialAssistance.living}</li>
              <li>{financialAssistance.swd}</li>
            </ul>
          </div>

          {/* Support Fund */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {supportFund.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{supportFund.total}</li>
              <li>{supportFund.disbursements}</li>
            </ul>
          </div>

          {/* Housing */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Home className="w-4 h-4 text-primary" />
              {housing.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{housing.temporary}</li>
              <li>{housing.transitional}</li>
              <li>{housing.shelters}</li>
              <li>{housing.total}</li>
            </ul>
          </div>

          {/* Social & Health */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {socialHealth.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{socialHealth.contacted}</li>
              <li>{socialHealth.registered}</li>
              <li>{socialHealth.hotline}</li>
            </ul>
          </div>

          {/* Donations */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              {donations.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{donations.platform}</li>
              <li>{donations.whatsapp}</li>
              <li>{donations.distribution}</li>
            </ul>
          </div>

          {/* Funeral Services */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {funeral.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{funeral.assistance}</li>
              <li>{funeral.support}</li>
            </ul>
          </div>

          {/* Education Support - NEW */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              {education.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{education.school}</li>
              <li>{education.funding}</li>
              <li>{education.counseling}</li>
            </ul>
          </div>

          {/* Medical Services */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {medical.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{medical.feeWaivers}</li>
              <li>{medical.residentWaivers}</li>
            </ul>
          </div>

          {/* Identity Documents */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" />
              {identityDocs.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{identityDocs.replacements}</li>
              <li>{identityDocs.services}</li>
            </ul>
          </div>

          {/* Transport Services */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" />
              {transport.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{transport.freeTaxis}</li>
              <li>{transport.details}</li>
            </ul>
          </div>

          {/* Building Safety */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" />
              {buildingSafety.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{buildingSafety.fsdPolice}</li>
              <li>{buildingSafety.wangFuk}</li>
              <li>{buildingSafety.bdChecks}</li>
              <li>{buildingSafety.ldInspections}</li>
            </ul>
          </div>

          {/* Investigations */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Building className="w-4 h-4 text-destructive" />
              {investigations.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{investigations.arrests}</li>
              <li>{investigations.icac}</li>
            </ul>
          </div>

          {/* Website */}
          <div className="space-y-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              {website.title}
            </h3>
            <p className="text-sm text-muted-foreground">{website.description}</p>
            <button onClick={() => openLink(website.url)} className="text-sm font-semibold text-primary hover:underline">
              {website.url}
            </button>
          </div>

          {/* Closing Message */}
          <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">{closingMessage}</p>
        </CardContent>
      </Card>
    </div>
  );
};
