import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';

interface Organization {
  name: string;
  purpose: string;
  donationMethods: string[];
  deadline: string;
  link?: string;
}

interface OrganizationsTableProps {
  title: string;
  organizations: Organization[];
  headers: {
    organization: string;
    purpose: string;
    donationMethods: string;
    deadline: string;
  };
}

export const OrganizationsTable = ({
  title,
  organizations,
  headers,
}: OrganizationsTableProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">{headers.organization}</TableHead>
              <TableHead className="font-bold">{headers.purpose}</TableHead>
              <TableHead className="font-bold">{headers.donationMethods}</TableHead>
              <TableHead className="font-bold">{headers.deadline}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((org, index) => (
              <TableRow key={index} className="hover:bg-accent/50">
                <TableCell className="font-semibold">
                  {org.link ? (
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {org.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    org.name
                  )}
                </TableCell>
                <TableCell className="text-sm">{org.purpose}</TableCell>
                <TableCell className="text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    {org.donationMethods.map((method, idx) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-sm">{org.deadline}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground">
          💡 {headers.organization.includes('Organization') 
            ? 'Always verify donation details directly with organizations before contributing' 
            : '捐款前請直接向機構核實詳情'}
        </p>
      </div>
    </div>
  );
};
