'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AssessmentForm } from '@/components/assessment/assessment-form';
import { FeedbackThread } from '@/components/assessment/feedback-thread';
import { type ApplicationData } from './types';

interface Props {
  application: ApplicationData;
}

export default function ApplicationDetailClient({ application }: Props) {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{application.challenge}</h1>
          <p className="text-muted-foreground">Application #{application.id}</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Download PDF</Button>
          <Button>Assign Assessor</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="application">
            <TabsList>
              <TabsTrigger value="application">Application</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            
            <TabsContent value="application">
              <Card className="p-6">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Project Summary</h3>
                    <p className="text-muted-foreground">{application.summary}</p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Detailed Description</h3>
                    <p className="text-muted-foreground">{application.description}</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-4">{application.keyComponents.title}</h3>
                    <ul>
                      {application.keyComponents.items.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-4">Technical Approach</h3>
                    <p className="text-muted-foreground">{application.technicalApproach}</p>
                  </section>
                  
                  <section>
                  <h3 className="text-lg font-semibold mb-4">How You Will Benefit</h3>
                  <ul>
                      {application.impact.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  <ul>
                      {application.benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  </section>
                  
                  <section>
                  <h3 className="text-lg font-semibold mb-4">Timelines</h3>
                  <ul>
                      {application.timeline.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Budgets and Costing</h3>
                    <p className="text-muted-foreground">{application.budget.header}</p>
                    <p className="text-muted-foreground mt-4">{application.budget.title}</p>
                    <ul>
                      {application.budget.items.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  <p className="text-muted-foreground mt-4">{application.budget.title2}</p>
                    <ul>
                      {application.budget.items2.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  <p className="text-muted-foreground mt-4">{application.budget.title3}</p>
                    <ul>
                      {application.budget.items3.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                  </ul>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Budgets and Costing</h3>
                    <ul>
                      {application.supportingDocuments.map((item, index) => (
                        <Button key={index} className='mr-3'>{item}</Button>
                      ))}
                  </ul>
                  </section>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="assessment">
              <AssessmentForm applicationId={application.id} />
            </TabsContent>
            
            <TabsContent value="feedback">
              <FeedbackThread applicationId={application.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Application Details</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">Status</dt>
                <dd className="font-medium">{application.status}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Submitted</dt>
                <dd className="font-medium">{application.submittedAt}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Challenge</dt>
                <dd className="font-medium">{application.challenge}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Applicant</dt>
                <dd className="font-medium">{application.applicant}</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Assessment Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Innovation</span>
                  <span>{application.assessment.innovation}/5</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${(application.assessment.innovation / 5) * 100}%` }} 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Feasibility</span>
                  <span>{application.assessment.feasibility}/5</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${(application.assessment.feasibility / 5) * 100}%` }} 
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 