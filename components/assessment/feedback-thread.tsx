'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';

interface Props {
  applicationId: string;
}

const MOCK_FEEDBACK = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      role: 'ASSESSOR',
    },
    content: 'Could you provide more details about the implementation timeline?',
    type: 'CLARIFICATION',
    createdAt: '2024-01-16T10:30:00Z',
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      role: 'APPLICANT',
    },
    content: 'I have updated the timeline section with a detailed breakdown of each phase.',
    type: 'GENERAL',
    createdAt: '2024-01-16T11:15:00Z',
  },
];

export function FeedbackThread({ applicationId }: Props) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = async () => {
    // Submit new feedback message
    console.log({ applicationId, content: newMessage });
    setNewMessage('');
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Feedback Thread</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          {MOCK_FEEDBACK.map((feedback) => (
            <div key={feedback.id} className="flex gap-4">
              <Avatar />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{feedback.user.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(feedback.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground">{feedback.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-6">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Add your feedback or question..."
            rows={4}
            className="mb-4"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Send Message</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}