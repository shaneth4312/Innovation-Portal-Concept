export interface Challenge {
  id: string;
  title: string;
  overview: string;
  benefits: string[];
  whoShouldApply: string;
  deadline: string;
  status: string;
  duration: string;
  useCase?: string;
  registrationOpens: string;
  registrationCloses: string;
  awardDescription?: string;
}

export const accelerateChallenge: Challenge = {
  id: '1',
  title: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
  
  overview: `Technology start-ups are being invited to take part in a new pilot, HMGCC Accelerate, which offers them the chance to work with HMGCC (His Majesty's Government Communications Centre)'s Co-Creation Space as part of a six-week programme.

For this limited period, start-ups will be able to apply to help develop technology products for potential future use with UK national security organisations, supported by our experts at HMGCC.

For this pilot, we are keen to hear from start-ups working on hardware and software technologies capable of testing the cyber security mitigations of connected and isolated systems in specific ways.

This six-week intensive programme, delivered as a mix of in-person and virtual activity, will help startups, with a relevant product, move towards a minimum viable product (MVP) and develop their go-to-market strategy for future use with UK national security organisations.`,
  
  benefits: [
    "Expert mentorship",
    "Tailored product development support",
    "Access to HMGCC's national security engineering expertise and challenge owners",
    "Operational scaling guidance",
    "Founder peer support and resilience training",
    "Pitch training in a national security context",
    "Access to a co-working space in central Milton Keynes for the duration of the programme"
  ],
  
  whoShouldApply: `We're keen to hear from startups who work in hardware and software operational technologies that can test security mitigations of connected and isolated systems by attempting to generate cyber and physical effects.

Examples include, but are not limited to, combined automated vulnerability detection, new red-team tools and new approaches to reverse engineering. Successful applicants will have a relevant product that is ready to scale, a firm commitment to the programme and a passion for working in national security.

Applicants should be based in a NATO member state or Australia and New Zealand. Prior security clearance is not necessary; however you will be required to undergo appropriate security screening.`,
  
  deadline: '2024-01-26',
  registrationOpens: '2024-01-18',
  registrationCloses: '2024-01-26',
  status: 'OPEN',
  duration: '6 weeks',
  awardDescription: 'Those who successfully apply for HMGCC Accelerate will benefit from a range of support such as expert mentorship, tailored product development support and access to a co-working space in central Milton Keynes through the period of the pilot scheme.'
};

export const aiChallenge: Challenge = {
  id: '2',
  title: 'Cutting Eavesdropping Risks Using AI',
  
  overview: `Government offices are often found in multi-occupancy buildings and open plan offices. All offices are designed to National Protective Security Agency specifications, to ensure a standard in physical and cyber protection. But there is more to learn. Understanding risk in this type of working environment is an important function. If there is an opportunity for eavesdropping, either accidentally or by a nefarious party, we would like to understand how challenging it would be to cancel out the irrelevant ambient noise to focus in on the conversation of significance.

The latest challenge launched by HMGCC Co-Creation sets out to understand the threat of third parties using artificial intelligence (AI) / machine learning (ML) to cancel out randomised and unwanted noise.

Within office environments, there is a general noise from heating, ventilation, air conditioning systems (HVAC), desk fans, doors closing and background conversations. All of this constitutes random noise generation.

What is already known about how to cancel this noise out? Digital signal processing with adaptive filtering is well known. We want to know more about the threat of cutting- edge methods to increase signal to noise ratios, used to focus on specific conversations.

There has been a rapid rise in recent years of AI and ML adoption in most sectors. There has also been interest and advanced research into using deep learning and neural networks to provide real-time noise cancellation. HMGCC Co-Creation is now seeking to better understand the threat through testing advanced noise cancellation capabilities.`,
  
  useCase: `Government employee Sam is having a private call in an office booth. The booth is open but designed to dampen leaking sound to the external office. For other office users standing close by there is limited sound leakage, so Sam's conversation can stay private.

The outer area of the office is open plan and there are various online calls happening, as well as general office noise.

Shauna is a few metres away from Sam, using her phone. The phone is picking up all the audio in the room but with the general office noise, Sam's conversation is unlikely to be recorded to an intelligible level, whether the audio was picked up accidentally (over a phone call) or nefariously (by taking an active recording).

If audio was downloaded from Shauna's phone, there are existing software packages that could be used to remove background noise. However, the following points should be considered:

• Software packages are typically focused on the commercial market, such as podcasting, music recording, and online calls, where there is a controlled and predictable environment of microphone placement and high signal to noise ratio.
• Software packages are unlikely to filter between other less sensitive conversations in the office and focus on Sam's private conversation.
• Shauna's microphone is dynamic, she may decide to sit in a different area or move about, all while still picking up audio. Shauna's phone contains a single microphone, not an array of microphones.

In this scenario, it is highly unlikely that Sam's conversation could be intelligibly intercepted from Shauna's phone even with modern post processing techniques. But could advances in AI / ML audio processing pose more risks?`,
  
  whoShouldApply: `This challenge is open to sole innovators, industry, academic and research organisations of all types and sizes. There is no requirement for security clearances.

Solution providers or direct collaboration from countries listed by the UK government under trade sanctions and/or arms embargoes, are not eligible for HMGCC Co-Creation challenges.`,
  
benefits: [
    "Expert mentorship",
    "Tailored product development support",
    "Access to HMGCC's national security engineering expertise and challenge owners",
    "Operational scaling guidance",
    "Founder peer support and resilience training",
    "Pitch training in a national security context",
    "Access to a co-working space in central Milton Keynes for the duration of the programme"
  ],
  
  deadline: '2024-11-07',
  registrationOpens: '2024-10-10',
  registrationCloses: '2024-11-07',
  status: 'UPCOMING',
  duration: 'Initial sprint with potential future funding'
};

export const challenges: Record<string, Challenge> = {
  '1': accelerateChallenge,
  '2': aiChallenge,
};

export interface Application {
  id: string;
  status: string;
  submittedAt: string;
  challenge: string;
  applicant: string;
  referralSource: string;  // Where did you hear about this challenge?
  projectTitle: string;    // Project Title
  summary: string;         // Executive Summary
  description: string;     // Detailed Description
  impact: string[];
  keyComponents:{
    title: string;
    items: string[];
  };
  technicalApproach: string;
  benefits: string[];
  timeline: string[];      // Project Timeline as an array
  budget: {
    header: string;
    title: string;
    items: string[];
    title2: string;
    items2: string[];
    title3: string;
    items3: string[];
  }; // Updated to be an object
  supportingDocuments?: string[]; // Supporting Documents (optional)
  assessment: {
    innovation: number;
    feasibility: number;
  };
}

export const applications: Record<string, Application> = {
  '1': {
    id: '1',
    status: 'Under Review',
    submittedAt: '2024-01-15',
    challenge: challenges['2'].title,
    applicant: 'John Doe',
    referralSource: 'Government Website',
    projectTitle: 'Cutting Eavesdropping Risks Using AI',
    summary: 'An innovative AI-driven system designed to detect and prevent eavesdropping in sensitive government environments. Our solution combines advanced acoustic analysis with machine learning to provide real-time threat detection while maintaining privacy standards.',
    description: 'Our comprehensive solution addresses the critical need for enhanced security in government facilities through innovative AI technology.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Advanced acoustic sensor network deployment',
        'Real-time AI-powered analysis system',
        'Privacy-preserving processing algorithms',
        'Integration with existing security infrastructure',
        'User-friendly monitoring dashboard',
      ],
    },
    technicalApproach: 'We utilize state-of-the-art deep learning models specifically trained on acoustic signatures associated with eavesdropping attempts. The system processes ambient sound patterns in real-time while explicitly avoiding the capture of conversation content.',
    impact: [
      '90% improvement in early threat detection',
      'Reduction in security personnel workload by 40%',
      'Zero impact on day-to-day operations',
      'Scalable deployment across multiple facilities',
      'Continuous system learning and adaptation',
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced operational costs',
      'Improved confidence in sensitive discussions',
      'Future-proof security infrastructure',
    ],
    timeline: [
      'Phase 1 (Months 1-2): System Architecture Design, Initial AI Model Development, Sensor Network Planning',
      'Phase 2 (Months 3-4): AI Model Training & Validation, Hardware Integration, Initial Testing',
      'Phase 3 (Months 5-6): Pilot Deployment, System Optimization, Full Deployment Preparation',
    ],
    budget: {
      header: 'Total Project Cost: £45,000',
      title: 'Development (£25,000):',
      items: [
        'AI Model Development: £15,000',
        'System Architecture: £10,000',
      ],
      title2: 'Hardware (£12,000):',
      items2: [
        'Acoustic Sensors: £8,000',
        'Processing Units: £4,000',
      ],
      title3: 'Implementation (£8,000):',
      items3: [
        'Security Testing: £3,000',
        'Pilot Program: £5,000',
      ],
    },
    supportingDocuments: [
      'technical_specification.pdf',
      'team_credentials.pdf',
      'preliminary_results.pdf'
    ],
    assessment: {
      innovation: 4,
      feasibility: 3
    }
  }
}; 