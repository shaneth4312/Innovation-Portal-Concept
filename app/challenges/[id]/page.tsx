import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';
import { ShareButtons } from './share-buttons';
import { challenges, type Challenge } from '../data';

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return Object.keys(challenges).map((id) => ({
    id,
  }));
}

export default function ChallengePage({ params }: Props) {
  const challenge = challenges[params.id as keyof typeof challenges];

  if (!challenge) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Challenge Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The challenge you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/challenges">
            <Button>View All Challenges</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{challenge.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Deadline: {new Date(challenge.deadline).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Duration: {challenge.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Status: {challenge.status}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About the challenge</h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {challenge.overview}
                </div>
              </div>
            </Card>

            {challenge.useCase && (
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Example use case</h2>
                  <div className="text-muted-foreground whitespace-pre-line">
                    {challenge.useCase}
                  </div>
                </div>
              </Card>
            )}

            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Participants will benefit from
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {challenge.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  {challenge.id === '2' ? 'Eligibility' : 'Who should apply'}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {challenge.whoShouldApply}
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <Link href={`/challenges/${challenge.id}/apply`}>
                <Button size="lg" className="px-8">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Opportunity Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">When</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div>
                        <div className="text-sm">Registration Opens</div>
                        <div>{new Date(challenge.registrationOpens).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-sm">Registration Closes</div>
                        <div>{new Date(challenge.registrationCloses).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>

                  {challenge.awardDescription && (
                    <div>
                      <h3 className="font-semibold mb-2">Award</h3>
                      <p className="text-muted-foreground text-sm">
                        {challenge.awardDescription}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold mb-2">Share this opportunity</h3>
                    <ShareButtons title={challenge.title} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}