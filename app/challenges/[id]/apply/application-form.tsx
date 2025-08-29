'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REFERRAL_SOURCES = [
  'LinkedIn',
  'Twitter',
  'Technology Website',
  'Email Newsletter',
  'Word of Mouth',
  'Other'
];

interface FormData {
  referralSource: string;
  projectTitle: string;
  summary: string;
  description: string;
  impact: string;
  timeline: string;
  budget: string;
}

const INITIAL_FORM_DATA: FormData = {
  referralSource: '',
  projectTitle: '',
  summary: '',
  description: '',
  impact: '',
  timeline: '',
  budget: ''
};

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      router.push(`/login?redirect=/challenges/${params.id}/apply`);
    }

    // Load saved form data from localStorage
    const savedData = localStorage.getItem(`application-${params.id}`);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [user, router, params.id]);

  const steps = [
    {
      title: 'Basic Information',
      fields: ['referralSource', 'projectTitle', 'summary'],
      component: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Where did you hear about this challenge?
            </label>
            <Select
              value={formData.referralSource}
              onValueChange={(value) => handleFieldChange('referralSource', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a source" />
              </SelectTrigger>
              <SelectContent>
                {REFERRAL_SOURCES.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Title
            </label>
            <Input
              value={formData.projectTitle}
              onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
              placeholder="Enter your project title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Executive Summary
            </label>
            <Textarea
              value={formData.summary}
              onChange={(e) => handleFieldChange('summary', e.target.value)}
              placeholder="Provide a brief summary of your proposal"
              rows={4}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Project Details',
      fields: ['description'],
      component: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Detailed Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              placeholder="Describe your project in detail"
              rows={8}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Impact & Timeline',
      fields: ['impact', 'timeline', 'budget'],
      component: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Expected Impact
            </label>
            <Textarea
              value={formData.impact}
              onChange={(e) => handleFieldChange('impact', e.target.value)}
              placeholder="Describe the expected impact of your project"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Timeline
            </label>
            <Textarea
              value={formData.timeline}
              onChange={(e) => handleFieldChange('timeline', e.target.value)}
              placeholder="Outline your project timeline"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Budget Breakdown
            </label>
            <Textarea
              value={formData.budget}
              onChange={(e) => handleFieldChange('budget', e.target.value)}
              placeholder="Provide a detailed budget breakdown"
              rows={4}
            />
          </div>
        </div>
      ),
    },
  ];

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    autoSave({ ...formData, [field]: value });
  };

  const autoSave = async (data: FormData) => {
    setIsSaving(true);
    try {
      // Save to localStorage
      localStorage.setItem(`application-${params.id}`, JSON.stringify(data));
      
      // Here you would typically also save to your backend
      // await saveApplication(params.id, data);
      
      toast({
        title: 'Progress saved',
        description: 'Your application has been automatically saved',
      });
    } catch (error) {
      toast({
        title: 'Error saving',
        description: 'Failed to save your progress',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async () => {
    try {
      // Here you would submit the final application
      // await submitApplication(params.id, formData);
      
      toast({
        title: 'Success',
        description: 'Your application has been submitted successfully',
      });
      
      // Clear saved data
      localStorage.removeItem(`application-${params.id}`);
      
      // Redirect to confirmation page
      router.push(`/challenges/${params.id}/confirmation`);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your application',
        variant: 'destructive',
      });
    }
  };

  const isStepComplete = (stepIndex: number) => {
    const stepFields = steps[stepIndex].fields;
    return stepFields.every((field) => formData[field as keyof FormData]?.trim());
  };

  const canProceed = isStepComplete(currentStep);
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h1>
          <Progress
            value={(currentStep + 1) * (100 / steps.length)}
            className="h-2"
          />
        </div>

        <form className="space-y-6">
          {steps[currentStep].component}

          <div className="flex items-center justify-between pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {isSaving && (
                <span className="text-sm text-muted-foreground">
                  Saving...
                </span>
              )}
              {isLastStep ? (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed}
                >
                  Submit Application
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  disabled={!canProceed}
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}