import { Info, DollarSign, Home, Heart, Building, Phone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface LatestUpdatesProps {
  title: string;
  lastUpdated: string;
  casualties: {
    title: string;
    deaths: string;
    injured: string;
    awaiting: string;
    searches: string;
  };
  financialAssistance: {
    title: string;
    emergency: string;
    payments: string;
    additionalSubsidies: string;
    swd: string;
  };
  supportFund: {
    title: string;
    total: string;
    purpose: string;
  };
  housing: {
    title: string;
    hostels: string;
    transitional: string;
    shelters: string;
    visits: string;
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
    distribution: string;
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
    inspections: string;
    netsInspection: string;
    bdChecks: string;
    ldInspections: string;
  };
  investigations: {
    title: string;
    arrests: string;
  };
  funeral: {
    title: string;
    support: string;
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
  casualties,
  financialAssistance,
  supportFund,
  housing,
  socialHealth,
  donations,
  medical,
  identityDocs,
  transport,
  buildingSafety,
  investigations,
  funeral,
  website,
  closingMessage
}: LatestUpdatesProps) => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Info className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30">
        
        <CardContent className="space-y-6">
          {/* Casualties */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-destructive" />
              {casualties.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{casualties.deaths}</li>
              <li>{casualties.injured}</li>
              <li>{casualties.awaiting}</li>
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
              <li>{financialAssistance.payments}</li>
              <li>{financialAssistance.additionalSubsidies}</li>
              <li>{financialAssistance.swd}</li>
            </ul>
          </div>

          {/* Support Fund */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {supportFund.title}
            </h3>
            <p className="text-sm text-muted-foreground ml-6">{supportFund.total}</p>
            <p className="text-sm text-muted-foreground ml-6">{supportFund.purpose}</p>
          </div>

          {/* Housing */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Home className="w-4 h-4 text-primary" />
              {housing.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
              <li>{housing.hostels}</li>
              <li>{housing.transitional}</li>
              <li>{housing.shelters}</li>
              <li>{housing.visits}</li>
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
              <li>{donations.distribution}</li>
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
              <li>{buildingSafety.inspections}</li>
              <li>{buildingSafety.netsInspection}</li>
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
            <p className="text-sm text-muted-foreground ml-6">{investigations.arrests}</p>
          </div>

          {/* Funeral */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              {funeral.title}
            </h3>
            <p className="text-sm text-muted-foreground ml-6">{funeral.support}</p>
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
    </div>;
};