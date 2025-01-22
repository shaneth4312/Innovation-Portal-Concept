'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  applicationId: string;
}

const CRITERIA = [
  { id: 'innovation', label: 'Innovation' },
  { id: 'feasibility', label: 'Feasibility' },
  { id: 'impact', label: 'Impact' },
  { id: 'value', label: 'Value for Money' },
];

export function AssessmentForm({ applicationId }: Props) {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = async () => {
    // Submit assessment
    console.log({ applicationId, scores, feedback, recommendation });
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Assessment Form</h2>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {CRITERIA.map((criterion) => (
            <div key={criterion.id}>
              <label className="block text-sm font-medium mb-2">
                {criterion.label} Score (1-5)
              </label>
              <Select
                value={scores[criterion.id]?.toString()}
                onValueChange={(value) =>
                  setScores((prev) => ({
                    ...prev,
                    [criterion.id]: parseInt(value),
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select score" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((score) => (
                    <SelectItem key={score} value={score.toString()}>
                      {score}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Detailed Feedback
          </label>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Provide detailed feedback about the application..."
            rows={6}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Recommendation
          </label>
          <Select
            value={recommendation}
            onValueChange={setRecommendation}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select recommendation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ACCEPT">Accept</SelectItem>
              <SelectItem value="REJECT">Reject</SelectItem>
              <SelectItem value="REVISE">Request Revision</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Save Draft</Button>
          <Button onClick={handleSubmit}>Submit Assessment</Button>
        </div>
      </div>
    </Card>
  );
}