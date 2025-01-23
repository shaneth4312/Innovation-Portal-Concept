export type UserRole = 'APPLICANT' | 'ASSESSOR' | 'ADM' | 'SUPER_ADMIN';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
  requirements: string[];
  budget: string;
  duration: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  challengeId: string;
  userId: string;
  status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'ACCEPTED' | 'REJECTED';
  referralSource: string;
  projectTitle: string;
  summary: string;
  description: string;
  impact: string;
  timeline: string;
  budget: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Assessment {
  id: string;
  applicationId: string;
  assessorId: string;
  scores: {
    innovation: number;
    feasibility: number;
    impact: number;
    value: number;
    total: number;
  };
  feedback: string;
  recommendation: 'ACCEPT' | 'REJECT' | 'REVISE';
  createdAt: Date;
  updatedAt: Date;
}

export interface Feedback {
  id: string;
  applicationId: string;
  assessmentId: string;
  userId: string;
  content: string;
  type: 'CLARIFICATION' | 'REVISION' | 'GENERAL';
  status: 'OPEN' | 'RESOLVED';
  createdAt: Date;
  updatedAt: Date;
}