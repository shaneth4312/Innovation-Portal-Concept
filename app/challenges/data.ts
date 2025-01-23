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
    applicant: 'Agent',
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
  },
  '2': {
    id: '2',
    status: 'Submitted',
    submittedAt: '2024-01-16',
    challenge: challenges['2'].title,
    applicant: 'Red Developers',
    referralSource: 'LinkedIn',
    projectTitle: 'Cutting Eavesdropping Risks Using AI',
    summary: 'Leveraging deep neural networks to create an intelligent system that can identify and isolate specific conversation patterns in complex acoustic environments, while focusing on privacy preservation and ethical considerations.',
    description: 'Our solution employs advanced neural network architectures specifically designed for acoustic processing in multi-layered environments.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Multi-layer neural network for acoustic pattern recognition',
        'Ethical AI framework for privacy preservation',
        'Distributed sensor array system',
        'Real-time processing engine',
        'Secure data handling protocol'
      ]
    },
    technicalApproach: 'Using a combination of convolutional and recurrent neural networks, our system processes acoustic data in real-time to identify potential eavesdropping vulnerabilities. The solution incorporates privacy-by-design principles to ensure ethical handling of acoustic data.',
    impact: [
      'Identification of acoustic vulnerabilities with 95% accuracy',
      'Privacy-preserving processing with zero data retention',
      'Real-time threat assessment capabilities',
      'Adaptive learning from new acoustic patterns',
      'Minimal false positive rate (<1%)'
    ],
    benefits: [
      'Enhanced acoustic security awareness',
      'Proactive threat detection',
      'Minimal computational overhead',
      'Easy integration with existing systems'
    ],
    timeline: [
      'Phase 1 (Month 1): Neural Network Architecture Design',
      'Phase 2 (Month 2-3): Training Data Collection and Model Training',
      'Phase 3 (Month 4): System Integration and Testing',
      'Phase 4 (Month 5-6): Deployment and Optimization'
    ],
    budget: {
      header: 'Total Project Cost: £52,000',
      title: 'AI Development (£30,000):',
      items: [
        'Neural Network Development: £20,000',
        'Training Infrastructure: £10,000'
      ],
      title2: 'Equipment (£15,000):',
      items2: [
        'Sensor Arrays: £10,000',
        'Processing Hardware: £5,000'
      ],
      title3: 'Implementation (£7,000):',
      items3: [
        'Testing and Validation: £4,000',
        'Deployment: £3,000'
      ]
    },
    supportingDocuments: [
      'neural_network_architecture.pdf',
      'privacy_framework.pdf',
      'performance_metrics.pdf'
    ],
    assessment: {
      innovation: 5,
      feasibility: 4
    }
  },
  '3': {
    id: '3',
    status: 'Under Review',
    submittedAt: '2024-01-17',
    challenge: challenges['2'].title,
    applicant: 'Engineering Agency',
    referralSource: 'Industry Conference',
    projectTitle: 'Cutting Eavesdropping Risks Using AI',
    summary: 'A revolutionary approach using quantum-inspired algorithms to process and analyze acoustic environments, providing unprecedented accuracy in detecting potential eavesdropping threats while maintaining complete privacy.',
    description: 'Our quantum-inspired solution brings cutting-edge mathematical models to acoustic security, offering superior performance compared to traditional methods.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Quantum-inspired processing algorithms',
        'Advanced acoustic modeling system',
        'Environmental noise mapping',
        'Adaptive security protocols',
        'Real-time threat visualization'
      ]
    },
    technicalApproach: 'By implementing quantum-inspired algorithms, we process acoustic data using advanced mathematical models that can separate and analyze multiple audio streams simultaneously, while maintaining strict privacy controls.',
    impact: [
      'Enhanced processing speed (200x faster than conventional methods)',
      'Near-perfect accuracy in threat detection',
      'Zero impact on existing infrastructure',
      'Scalable to any environment size',
      'Real-time adaptation to changing conditions'
    ],
    benefits: [
      'Unparalleled accuracy in threat detection',
      'Minimal computational resources required',
      'Future-proof technology',
      'Seamless integration capabilities'
    ],
    timeline: [
      'Phase 1 (Months 1-2): Algorithm Development and Testing',
      'Phase 2 (Months 3-4): System Integration and Validation',
      'Phase 3 (Months 5-6): Deployment and Performance Optimization'
    ],
    budget: {
      header: 'Total Project Cost: £65,000',
      title: 'Research & Development (£35,000):',
      items: [
        'Algorithm Development: £25,000',
        'System Architecture: £10,000'
      ],
      title2: 'Hardware (£20,000):',
      items2: [
        'Specialized Processing Units: £15,000',
        'Sensor Systems: £5,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Testing & Validation: £6,000',
        'Deployment: £4,000'
      ]
    },
    supportingDocuments: [
      'quantum_algorithm_specs.pdf',
      'performance_analysis.pdf',
      'security_framework.pdf'
    ],
    assessment: {
      innovation: 5,
      feasibility: 3
    }
  },
  '4': {
    id: '4',
    status: 'Rejected',
    submittedAt: '2024-01-14',
    challenge: challenges['2'].title,
    applicant: 'Surevine',
    referralSource: 'Academic Research Network',
    projectTitle: 'Cutting Eavesdropping Risks Using AI',
    summary: 'Inspired by biological systems, particularly the human auditory system, our solution mimics natural acoustic processing capabilities to create an innovative approach to eavesdropping detection and prevention.',
    description: 'By leveraging principles from human auditory processing and other biological systems, we have developed a unique approach to acoustic security that offers natural, efficient, and accurate threat detection.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Bio-inspired acoustic processors',
        'Neural pattern recognition system',
        'Adaptive filtering mechanisms',
        'Environmental learning module',
        'Biomimetic sensor array'
      ]
    },
    technicalApproach: 'Our system mimics the human brain\'s ability to focus on specific conversations in noisy environments, using bio-inspired algorithms and specialized hardware to process acoustic data in a natural and efficient manner.',
    impact: [
      'Natural and efficient processing approach',
      'Low power consumption (60% less than traditional systems)',
      'Adaptive learning capabilities',
      'Biological-level accuracy in sound processing',
      'Self-optimizing system'
    ],
    benefits: [
      'Energy-efficient operation',
      'Natural acoustic processing',
      'Continuous system evolution',
      'Low maintenance requirements'
    ],
    timeline: [
      'Phase 1 (Months 1-2): Biomimetic Algorithm Development',
      'Phase 2 (Months 3-4): Hardware Integration',
      'Phase 3 (Months 5-6): Testing and Deployment'
    ],
    budget: {
      header: 'Total Project Cost: £48,000',
      title: 'Research & Development (£28,000):',
      items: [
        'Algorithm Development: £18,000',
        'System Design: £10,000'
      ],
      title2: 'Hardware (£12,000):',
      items2: [
        'Biomimetic Sensors: £8,000',
        'Processing Units: £4,000'
      ],
      title3: 'Implementation (£8,000):',
      items3: [
        'Testing: £5,000',
        'Deployment: £3,000'
      ]
    },
    supportingDocuments: [
      'biomimetic_approach.pdf',
      'system_architecture.pdf',
      'efficiency_analysis.pdf'
    ],
    assessment: {
      innovation: 4,
      feasibility: 2
    }
  },
  '7': {
    id: '7',
    status: 'Under Review',
    submittedAt: '2024-01-18',
    challenge: challenges['1'].title,
    applicant: 'Agent',
    referralSource: 'Tech Nation Network',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'An advanced automated vulnerability detection system combining AI-driven scanning with hardware penetration testing capabilities, designed specifically for identifying security weaknesses in isolated systems.',
    description: 'Our solution integrates cutting-edge hardware and software components to create a comprehensive security testing platform that can identify vulnerabilities in both connected and air-gapped systems.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'AI-powered vulnerability scanner',
        'Custom hardware penetration testing tools',
        'Automated exploit generation system',
        'Secure reporting framework',
        'Real-time threat assessment dashboard'
      ]
    },
    technicalApproach: 'We combine machine learning algorithms with specialized hardware tools to automate the discovery and validation of security vulnerabilities. Our system can operate autonomously while maintaining detailed audit logs of all testing activities.',
    impact: [
      'Reduces manual testing time by 75%',
      'Identifies vulnerabilities in isolated systems',
      'Automated reporting and documentation',
      'Scalable across different security environments',
      'Continuous learning and adaptation capabilities'
    ],
    benefits: [
      'Comprehensive security assessment',
      'Reduced testing timeframes',
      'Detailed vulnerability reporting',
      'Adaptable to various system types'
    ],
    timeline: [
      'Week 1-2: Initial Setup and Integration',
      'Week 3-4: Testing and Validation',
      'Week 5-6: Optimization and Final Development'
    ],
    budget: {
      header: 'Total Project Cost: £75,000',
      title: 'Development (£40,000):',
      items: [
        'AI System Development: £25,000',
        'Hardware Tool Creation: £15,000'
      ],
      title2: 'Equipment (£25,000):',
      items2: [
        'Testing Hardware: £15,000',
        'Development Infrastructure: £10,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Security Validation: £6,000',
        'Documentation: £4,000'
      ]
    },
    supportingDocuments: [
      'technical_architecture.pdf',
      'security_methodology.pdf',
      'team_experience.pdf'
    ],
    assessment: {
      innovation: 5,
      feasibility: 4
    }
  },
  '8': {
    id: '8',
    status: 'Submitted',
    submittedAt: '2024-01-19',
    challenge: challenges['1'].title,
    applicant: 'NCSC',
    referralSource: 'Cyber Security Conference',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'A novel reverse engineering platform utilizing quantum-resistant cryptography analysis and advanced binary analysis tools for secure systems assessment.',
    description: 'Our platform combines state-of-the-art reverse engineering techniques with quantum-resistant security analysis to provide comprehensive assessment of secure systems.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Quantum-resistant crypto analyzer',
        'Advanced binary analysis engine',
        'Automated decompiler system',
        'Security validation framework',
        'Threat modeling engine'
      ]
    },
    technicalApproach: 'Leveraging advanced cryptographic analysis and automated reverse engineering techniques, our platform provides deep insights into system security while maintaining strict operational security standards.',
    impact: [
      '85% faster reverse engineering process',
      'Quantum-resistant security analysis',
      'Automated vulnerability identification',
      'Comprehensive system assessment',
      'Future-proof security validation'
    ],
    benefits: [
      'Advanced security analysis',
      'Quantum-ready assessment',
      'Automated reverse engineering',
      'Detailed security reporting'
    ],
    timeline: [
      'Week 1-2: Platform Development',
      'Week 3-4: Integration and Testing',
      'Week 5-6: Optimization and Deployment'
    ],
    budget: {
      header: 'Total Project Cost: £68,000',
      title: 'Development (£35,000):',
      items: [
        'Platform Development: £20,000',
        'Crypto Analysis Tools: £15,000'
      ],
      title2: 'Infrastructure (£23,000):',
      items2: [
        'Computing Resources: £15,000',
        'Security Tools: £8,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Testing: £6,000',
        'Documentation: £4,000'
      ]
    },
    supportingDocuments: [
      'crypto_analysis.pdf',
      'platform_architecture.pdf',
      'security_framework.pdf'
    ],
    assessment: {
      innovation: 5,
      feasibility: 3
    }
  },
  '9': {
    id: '9',
    status: 'Under Review',
    submittedAt: '2024-01-17',
    challenge: challenges['1'].title,
    applicant: 'Red Developers',
    referralSource: 'Government Security Forum',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'An innovative red-team automation platform that combines AI-driven attack simulation with hardware-based penetration testing capabilities.',
    description: 'Our platform automates red-team operations through intelligent attack simulation and hardware-based testing, providing comprehensive security assessment for isolated systems.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'AI attack simulation engine',
        'Hardware penetration tools',
        'Automated exploit framework',
        'Security assessment dashboard',
        'Real-time reporting system'
      ]
    },
    technicalApproach: 'Using advanced AI algorithms to simulate sophisticated attack patterns while integrating with custom hardware tools for physical security testing of isolated systems.',
    impact: [
      'Automated red-team operations',
      'Comprehensive attack simulation',
      'Real-time vulnerability assessment',
      'Detailed attack path analysis',
      'Continuous security monitoring'
    ],
    benefits: [
      'Enhanced security testing',
      'Reduced operational costs',
      'Comprehensive reporting',
      'Scalable security assessment'
    ],
    timeline: [
      'Week 1-2: System Development',
      'Week 3-4: Integration and Testing',
      'Week 5-6: Deployment and Optimization'
    ],
    budget: {
      header: 'Total Project Cost: £72,000',
      title: 'Development (£38,000):',
      items: [
        'AI System Development: £23,000',
        'Hardware Integration: £15,000'
      ],
      title2: 'Equipment (£24,000):',
      items2: [
        'Testing Hardware: £14,000',
        'Computing Infrastructure: £10,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Validation: £6,000',
        'Documentation: £4,000'
      ]
    },
    supportingDocuments: [
      'system_architecture.pdf',
      'testing_methodology.pdf',
      'security_framework.pdf'
    ],
    assessment: {
      innovation: 4,
      feasibility: 4
    }
  },
  '10': {
    id: '10',
    status: 'Rejected',
    submittedAt: '2024-01-16',
    challenge: challenges['1'].title,
    applicant: 'PenTesters',
    referralSource: 'Security Startup Network',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'A machine learning-based vulnerability assessment system designed to identify zero-day exploits in secure environments.',
    description: 'Our system uses advanced machine learning algorithms to discover potential zero-day vulnerabilities in both connected and isolated systems.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'ML vulnerability detector',
        'Pattern analysis engine',
        'Exploit verification system',
        'Reporting dashboard',
        'Security assessment tools'
      ]
    },
    technicalApproach: 'Leveraging machine learning to identify patterns indicative of potential zero-day vulnerabilities, combined with automated verification and testing capabilities.',
    impact: [
      'Zero-day vulnerability detection',
      'Automated security assessment',
      'Pattern-based analysis',
      'Continuous learning system',
      'Real-time threat detection'
    ],
    benefits: [
      'Advanced vulnerability detection',
      'Automated assessment',
      'Continuous improvement',
      'Detailed reporting'
    ],
    timeline: [
      'Week 1-2: ML System Development',
      'Week 3-4: Testing and Validation',
      'Week 5-6: Deployment and Training'
    ],
    budget: {
      header: 'Total Project Cost: £58,000',
      title: 'Development (£30,000):',
      items: [
        'ML System Development: £20,000',
        'Integration: £10,000'
      ],
      title2: 'Infrastructure (£20,000):',
      items2: [
        'Computing Resources: £12,000',
        'Testing Environment: £8,000'
      ],
      title3: 'Implementation (£8,000):',
      items3: [
        'Testing: £5,000',
        'Documentation: £3,000'
      ]
    },
    supportingDocuments: [
      'ml_architecture.pdf',
      'testing_framework.pdf',
      'implementation_plan.pdf'
    ],
    assessment: {
      innovation: 4,
      feasibility: 2
    }
  },
  '11': {
    id: '11',
    status: 'Under Review',
    submittedAt: '2024-01-20',
    challenge: challenges['1'].title,
    applicant: 'Engineering Agency',
    referralSource: 'Defence Innovation Hub',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'A comprehensive hardware security testing platform combining physical penetration testing with advanced electromagnetic analysis.',
    description: 'Our solution integrates physical security testing tools with electromagnetic analysis capabilities to provide thorough security assessment of hardware systems.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'EM analysis tools',
        'Physical penetration testing kit',
        'Signal processing system',
        'Hardware security scanner',
        'Automated testing framework'
      ]
    },
    technicalApproach: 'Combining electromagnetic analysis with physical security testing to provide comprehensive hardware security assessment capabilities.',
    impact: [
      'Complete hardware security testing',
      'EM vulnerability detection',
      'Physical security assessment',
      'Automated testing procedures',
      'Detailed analysis reporting'
    ],
    benefits: [
      'Comprehensive hardware testing',
      'Advanced EM analysis',
      'Automated assessment',
      'Detailed reporting'
    ],
    timeline: [
      'Week 1-2: Hardware Development',
      'Week 3-4: Integration and Testing',
      'Week 5-6: Optimization and Deployment'
    ],
    budget: {
      header: 'Total Project Cost: £82,000',
      title: 'Development (£45,000):',
      items: [
        'Hardware Development: £30,000',
        'Software Integration: £15,000'
      ],
      title2: 'Equipment (£27,000):',
      items2: [
        'EM Analysis Equipment: £17,000',
        'Testing Tools: £10,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Validation: £6,000',
        'Documentation: £4,000'
      ]
    },
    supportingDocuments: [
      'hardware_specs.pdf',
      'testing_methodology.pdf',
      'implementation_plan.pdf'
    ],
    assessment: {
      innovation: 5,
      feasibility: 3
    }
  },
  '12': {
    id: '12',
    status: 'Submitted',
    submittedAt: '2024-01-21',
    challenge: challenges['1'].title,
    applicant: 'Surevine',
    referralSource: 'Cyber Security Alliance',
    projectTitle: 'HMGCC Accelerate: Pilot Scheme for Tech Start-Ups',
    summary: 'An integrated firmware analysis and testing platform designed to identify vulnerabilities in embedded systems and IoT devices.',
    description: 'Our platform provides comprehensive firmware security analysis and testing capabilities for embedded systems, focusing on identifying vulnerabilities in isolated and connected devices.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Firmware analysis engine',
        'Embedded system tester',
        'IoT security scanner',
        'Vulnerability assessment tools',
        'Automated reporting system'
      ]
    },
    technicalApproach: 'Using advanced firmware analysis techniques combined with automated testing tools to identify security vulnerabilities in embedded systems and IoT devices.',
    impact: [
      'Comprehensive firmware analysis',
      'Automated vulnerability detection',
      'Embedded system security testing',
      'IoT device assessment',
      'Detailed security reporting'
    ],
    benefits: [
      'Advanced firmware security',
      'Automated testing',
      'Comprehensive analysis',
      'Detailed vulnerability reports'
    ],
    timeline: [
      'Week 1-2: Platform Development',
      'Week 3-4: Testing and Integration',
      'Week 5-6: Optimization and Deployment'
    ],
    budget: {
      header: 'Total Project Cost: £70,000',
      title: 'Development (£35,000):',
      items: [
        'Platform Development: £20,000',
        'Tool Integration: £15,000'
      ],
      title2: 'Equipment (£25,000):',
      items2: [
        'Testing Hardware: £15,000',
        'Development Tools: £10,000'
      ],
      title3: 'Implementation (£10,000):',
      items3: [
        'Validation: £6,000',
        'Documentation: £4,000'
      ]
    },
    supportingDocuments: [
      'platform_architecture.pdf',
      'testing_framework.pdf',
      'security_methodology.pdf'
    ],
    assessment: {
      innovation: 4,
      feasibility: 4
    }
  }
}; 