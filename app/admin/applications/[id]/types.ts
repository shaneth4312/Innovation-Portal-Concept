export interface KeyComponent {
  title: string;
  items: string[];
}

export interface Budget {
  header: string;
  title: string;
  items: string[];
  title2: string;
  items2: string[];
  title3: string;
  items3: string[];
}

export interface ApplicationData {
  id: string;
  title: string;
  status: string;
  submittedAt: string;
  challenge: string;
  applicant: string;
  referralSource: string;
  projectTitle: string;
  summary: string;
  description: string;
  keyComponents: KeyComponent;
  technicalApproach: string;
  impact: string[];
  benefits: string[];
  timeline: string[];
  budget: Budget;
  supportingDocuments: string[];
  assessment: {
    innovation: number;
    feasibility: number;
  };
} 