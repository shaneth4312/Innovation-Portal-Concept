'use client';

import { Mail, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this TechForward challenge: ${title}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    email: `mailto:?subject=${encodeURIComponent(`TechForward Challenge: ${title}`)}&body=${encodeURIComponent(`Check out this challenge from TechForward: ${window.location.href}`)}`
  };

  return (
    <div className="flex gap-2">
      <a 
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-accent rounded-full"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-accent rounded-full"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a 
        href={shareUrls.email}
        className="p-2 hover:bg-accent rounded-full"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
} 