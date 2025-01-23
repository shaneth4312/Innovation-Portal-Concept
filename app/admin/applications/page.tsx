'use client';

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
import { applications } from '@/app/challenges/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState, useMemo } from 'react';
import { cn } from "@/lib/utils";

const getStatusColor = (status: string) => {
  const colors = {
    DRAFT: 'bg-gray-500',
    SUBMITTED: 'bg-blue-500',
    UNDER_REVIEW: 'bg-yellow-500',
    ACCEPTED: 'bg-green-500',
    REJECTED: 'bg-red-500',
  };
  return colors[status.toUpperCase() as keyof typeof colors] || 'bg-gray-500';
};

export default function ApplicationsPage() {
  // Transform applications object into array and extract challenge ID from title
  const allApplications = Object.values(applications).map(app => ({
    id: app.id,
    projectTitle: app.projectTitle,
    applicant: app.applicant,
    challengeId: app.challenge.includes('Accelerate') ? '1' : '2',
    status: app.status.toUpperCase().replace(' ', '_'),
    submittedAt: app.submittedAt
  }));

  // Filter states
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [selectedApplicants, setSelectedApplicants] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Get unique values for filters
  const uniqueProjects = Array.from(new Set(allApplications.map(app => app.projectTitle)));
  const uniqueApplicants = Array.from(new Set(allApplications.map(app => app.applicant)));
  const uniqueStatuses = Array.from(new Set(allApplications.map(app => app.status)));

  // Filter applications based on selected filters
  const filteredApplications = useMemo(() => {
    return allApplications.filter(app => {
      const projectMatch = selectedProjects.length === 0 || selectedProjects.includes(app.projectTitle);
      const applicantMatch = selectedApplicants.length === 0 || selectedApplicants.includes(app.applicant);
      const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(app.status);
      return projectMatch && applicantMatch && statusMatch;
    });
  }, [allApplications, selectedProjects, selectedApplicants, selectedStatuses]);

  // Add open states for dropdowns
  const [projectOpen, setProjectOpen] = useState(false);
  const [applicantOpen, setApplicantOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
        <div className="flex gap-4">
          <DropdownMenu open={projectOpen} onOpenChange={setProjectOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                Project
                {selectedProjects.length > 0 && ` (${selectedProjects.length})`}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  projectOpen && "-rotate-180"
                )} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Project</DropdownMenuLabel>
              {uniqueProjects.map((project) => (
                <DropdownMenuCheckboxItem
                  key={project}
                  checked={selectedProjects.includes(project)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={(checked) => {
                    setSelectedProjects(
                      checked
                        ? [...selectedProjects, project]
                        : selectedProjects.filter((p) => p !== project)
                    );
                  }}
                >
                  {project}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={applicantOpen} onOpenChange={setApplicantOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                Applicant
                {selectedApplicants.length > 0 && ` (${selectedApplicants.length})`}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  applicantOpen && "-rotate-180"
                )} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Applicant</DropdownMenuLabel>
              {uniqueApplicants.map((applicant) => (
                <DropdownMenuCheckboxItem
                  key={applicant}
                  checked={selectedApplicants.includes(applicant)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={(checked) => {
                    setSelectedApplicants(
                      checked
                        ? [...selectedApplicants, applicant]
                        : selectedApplicants.filter((a) => a !== applicant)
                    );
                  }}
                >
                  {applicant}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={statusOpen} onOpenChange={setStatusOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                Status
                {selectedStatuses.length > 0 && ` (${selectedStatuses.length})`}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  statusOpen && "-rotate-180"
                )} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              {uniqueStatuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={selectedStatuses.includes(status)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={(checked) => {
                    setSelectedStatuses(
                      checked
                        ? [...selectedStatuses, status]
                        : selectedStatuses.filter((s) => s !== status)
                    );
                  }}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            {filteredApplications.map((app) => (
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