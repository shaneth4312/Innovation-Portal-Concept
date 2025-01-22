import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { challenges } from './data';

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Open Challenges</h1>
        <div className="flex gap-4">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.values(challenges).map((challenge) => (
          <Card key={challenge.id} className="p-6">
            <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
            <p className="text-muted-foreground mb-6">
              {challenge.overview.split('\n\n')[0].length > 150 
                ? `${challenge.overview.split('\n\n')[0].slice(0, 150)}...`
                : challenge.overview.split('\n\n')[0]
              }
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Registration: </span>
                  {new Date(challenge.registrationOpens).toLocaleDateString()} - {new Date(challenge.registrationCloses).toLocaleDateString()}
                </div>

                <div>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    challenge.status === 'OPEN' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {challenge.status}
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={`/challenges/${challenge.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}