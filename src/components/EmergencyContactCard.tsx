import { Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
interface EmergencyContactCardProps {
  title: string;
  description: string;
  philippinesLabel: string;
  indonesiaLabel: string;
}
export const EmergencyContactCard = ({
  title,
  description,
  philippinesLabel,
  indonesiaLabel
}: EmergencyContactCardProps) => {
  const callNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };
  return <Card className="border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-destructive" />
          <CardTitle className="text-lg text-destructive">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="default" size="lg" className="w-full justify-start gap-3 bg-destructive hover:bg-destructive/90 text-white h-auto py-4" onClick={() => callNumber('+85294514678')}>
          <Phone className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-semibold">{philippinesLabel}</span>
            <span className="text-sm opacity-90">+852 9451 4678</span>
          </div>
        </Button>
        
        <div className="space-y-2">
          <Button variant="default" size="lg" className="w-full justify-start gap-3 bg-destructive hover:bg-destructive/90 text-white h-auto py-4" onClick={() => callNumber('+85252422240')}>
            <Phone className="w-5 h-5" />
            <div className="flex flex-col items-start">
              <span className="font-semibold">Indonesia Consulate Emergency</span>
              <span className="text-sm opacity-90">+852 5242 2240</span>
            </div>
          </Button>
          
          <Button variant="default" size="lg" className="w-full justify-start gap-3 bg-destructive hover:bg-destructive/90 text-white h-auto py-4" onClick={() => callNumber('+85267730466')}>
            <Phone className="w-5 h-5" />
            <div className="flex flex-col items-start">
              <span className="font-semibold">Support</span>
              <span className="text-sm opacity-90">+852 6773 0466</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>;
};