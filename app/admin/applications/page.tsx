import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const applications = [
  {
    id: '1',
    projectTitle: 'AI-Powered Healthcare Assistant',
    applicant: 'John Doe',
    challengeId: '1',
    status: 'UNDER_REVIEW',
    submittedAt: '2024-01-15',
  },
  // Add more mock data as needed
];

const getStatusColor = (status: string) => {
  const colors = {
    DRAFT: 'bg-gray-500',
    SUBMITTED: 'bg-blue-500',
    UNDER_REVIEW: 'bg-yellow-500',
    ACCEPTED: 'bg-green-500',
    REJECTED: 'bg-red-500',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-500';
};

export default function ApplicationsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
        <div className="flex gap-4">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Title</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Challenge</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.projectTitle}</TableCell>
                <TableCell>{app.applicant}</TableCell>
                <TableCell>Challenge {app.challengeId}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell>{app.submittedAt}</TableCell>
                <TableCell>
                  <Link href={`/admin/applications/${app.id}`}>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}