import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Innovation Challenge Portal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover and apply for cutting-edge innovation challenges. Connect with leading organizations and make your ideas come to life.
        </p>
        <div className="mt-8">
          <Link href="/challenges">
            <Button size="lg" className="mr-4">
              View Challenges <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <Award className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Open Challenges</h2>
          <p className="text-muted-foreground">
            Browse through our current innovation challenges and find opportunities that match your expertise.
          </p>
        </Card>
        <Card className="p-6">
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Expert Assessment</h2>
          <p className="text-muted-foreground">
            Get your submissions evaluated by industry experts and receive valuable feedback.
          </p>
        </Card>
        <Card className="p-6">
          <Shield className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Secure Platform</h2>
          <p className="text-muted-foreground">
            Your submissions are protected with enterprise-grade security and compliance measures.
          </p>
        </Card>
      </section>
    </div>
  );
}