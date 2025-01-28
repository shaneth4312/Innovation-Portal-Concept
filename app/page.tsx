import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { challenges } from './challenges/data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Innovation Challenge Portal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
          Discover and apply for cutting-edge innovation challenges. Connect with leading organizations and make your ideas come to life.
        </p>

        {/* Challenges Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {Object.values(challenges).map((challenge) => (
            <Card key={challenge.id} className="p-6 text-left">
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
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
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

        {/* Features Banner */}
        <div className="bg-gray-50 py-16 w-screen relative left-[50%] right-[50%] mx-[-50vw]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Award className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Open Challenges</h2>
                <p className="text-muted-foreground">
                  Browse through our current innovation challenges and find opportunities that match your expertise.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Expert Assessment</h2>
                <p className="text-muted-foreground">
                  Get your submissions evaluated by industry experts and receive valuable feedback.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Secure Platform</h2>
                <p className="text-muted-foreground">
                  Your submissions are protected with enterprise-grade security and compliance measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}