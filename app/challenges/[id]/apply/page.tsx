import { ApplicationForm } from './application-form';

// This needs to match the challenges data in the parent page
const challenges = {
  '1': {
    id: '1',
    title: 'AI Innovation Challenge 2024',
    deadline: '2024-03-31',
  },
  '2': {
    id: '2',
    title: 'Cybersecurity Challenge',
    deadline: '2024-04-15',
  }
};

export function generateStaticParams() {
  return Object.keys(challenges).map((id) => ({
    id,
  }));
}

export default function ApplyPage() {
  return <ApplicationForm />;
}