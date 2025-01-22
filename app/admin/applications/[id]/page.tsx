'use server';

import { type Application } from '@/app/challenges/data';
import ApplicationDetailClient from './client';
import { applications } from '@/app/challenges/data';

export async function generateStaticParams() {
  // This should ideally fetch from your API/database
  // For now, we'll use the known application IDs
  return Object.keys(applications).map((id) => ({ id }));
}

interface Props {
  params: { id: string }
}

export default async function ApplicationDetailPage({ params }: Props) {
  const applicationData = applications[params.id];

  if (!applicationData) {
    throw new Error('Application not found');
  }

  return <ApplicationDetailClient application={applicationData} />;
}