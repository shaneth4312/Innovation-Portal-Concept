// This needs to match the challenges data in the parent page
const challenges = {
  '1': {
    id: '1',
    title: 'AI Innovation Challenge 2024',
  },
  '2': {
    id: '2',
    title: 'Cybersecurity Challenge',
  }
};

export function generateStaticParams() {
  return Object.keys(challenges).map((id) => ({
    id,
  }));
}

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for submitting your application. We will review it and get back to you soon.
        </p>
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
}