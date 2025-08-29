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
  title: 'TechForward Accelerate: Innovation Program for Emerging Companies',
  
  overview: `Innovative companies are being invited to participate in TechForward Accelerate, a comprehensive program offering the opportunity to collaborate with TechForward Solutions' Innovation Hub as part of an eight-week intensive development cycle.

For this program period, companies will be able to apply to help develop cutting-edge technology solutions for potential commercial deployment in various industry sectors, supported by our team of expert technologists and business advisors.

We are particularly interested in hearing from companies working on advanced software and hardware technologies that focus on improving system efficiency, automation, and user experience across different platforms.

This eight-week comprehensive program, delivered through a combination of on-site workshops and virtual collaboration sessions, will help participating companies refine their products, develop sustainable business models, and prepare for market launch.`,
  
  benefits: [
    "Expert technical mentorship",
    "Customized product development guidance",
    "Access to TechForward's engineering expertise and industry connections",
    "Business scaling and strategy support",
    "Peer networking and collaboration opportunities",
    "Presentation and pitch skills development",
    "Access to state-of-the-art co-working facilities in downtown Innovation District"
  ],
  
  whoShouldApply: `We're looking for companies developing innovative software and hardware solutions that address real-world challenges in automation, efficiency, and user experience optimization.

Examples include, but are not limited to, advanced automation systems, intelligent monitoring tools, and innovative approaches to data processing and analysis. Ideal applicants will have a viable product concept, strong technical foundation, dedication to the program, and enthusiasm for commercial innovation.

Applicants should be based in North America or have established operations in the region. No specific certifications required, though participants will undergo standard business verification processes.`,
  
  deadline: '2024-01-26',
  registrationOpens: '2024-01-18',
  registrationCloses: '2024-01-26',
  status: 'OPEN',
  duration: '8 weeks',
  awardDescription: 'Successful TechForward Accelerate participants will receive comprehensive support including expert mentorship, tailored development guidance, and access to premium co-working facilities in the downtown Innovation District throughout the program duration.'
};

export const aiChallenge: Challenge = {
  id: '2',
  title: 'Smart Audio Processing for Enhanced Communication',
  
  overview: `Modern workplaces increasingly rely on open office designs and shared spaces that present unique challenges for clear communication. Understanding how to optimize audio clarity in these environments has become essential for business productivity. We want to explore how advanced audio processing can improve communication quality while maintaining appropriate privacy standards.

The latest challenge from TechForward Innovation Labs focuses on developing AI and machine learning solutions that can enhance audio clarity by intelligently filtering unwanted ambient noise while preserving important communication content.

In typical office environments, there's constant background noise from HVAC systems, equipment, conversations, and general office activity. This creates challenges for clear communication during calls and meetings.

Current noise cancellation technology exists, but we want to push the boundaries with next-generation AI/ML approaches that can provide superior signal enhancement and adaptive filtering capabilities.

Recent advances in AI and ML have opened new possibilities for real-time audio processing. TechForward Innovation Labs is seeking to explore these cutting-edge capabilities to create breakthrough audio enhancement solutions.`,
  
  useCase: `Business professional Alex is participating in an important client call from a semi-private booth in the open office. The booth provides some acoustic isolation but isn't completely soundproof. For colleagues nearby, there's minimal audio spillover, maintaining Alex's conversation privacy.

The surrounding open office area has multiple ongoing calls, general office chatter, and typical workplace sounds.

Colleague Jamie is working a few meters away and may occasionally hear fragments of various conversations mixed with office ambient noise. Any audio pickup would typically result in an unclear mix of sounds that doesn't compromise individual conversation privacy.

Current commercial audio processing solutions work well for controlled environments like podcasting or music recording where microphone placement and acoustic conditions are optimized.

However, these solutions face challenges in dynamic office environments where:
• Multiple conversations occur simultaneously
• Microphone positions vary and move
• Background noise patterns change throughout the day
• Audio sources use various recording devices with different capabilities

While current technology provides good baseline performance, we're interested in exploring how advanced AI/ML audio processing could create even better communication experiences in these complex acoustic environments.`,
  
  whoShouldApply: `This challenge welcomes individual innovators, companies, academic institutions, and research organizations of all sizes. No special certifications or clearances required.

Participants should be established entities in good standing with appropriate business registrations and compliance with relevant technology export regulations.`,
  
benefits: [
    "Expert technical mentorship",
    "Customized product development guidance",
    "Access to TechForward's audio engineering expertise and industry partners",
    "Business scaling and strategy support",
    "Peer networking and collaboration opportunities",
    "Presentation and pitch skills development",
    "Access to state-of-the-art co-working facilities in downtown Innovation District"
  ],
  
  deadline: '2024-11-07',
  registrationOpens: '2024-10-10',
  registrationCloses: '2024-11-07',
  status: 'UPCOMING',
  duration: 'Initial development phase with potential follow-on funding'
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
    applicant: 'AudioTech Solutions',
    referralSource: 'Technology Blog',
    projectTitle: 'Smart Audio Processing for Enhanced Communication',
    summary: 'An innovative AI-driven system designed to enhance audio clarity in business environments. Our solution combines advanced acoustic analysis with machine learning to provide real-time audio enhancement while maintaining privacy standards.',
    description: 'Our comprehensive solution addresses the critical need for enhanced communication clarity in modern business environments through innovative AI technology.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Advanced acoustic sensor network deployment',
        'Real-time AI-powered audio enhancement system',
        'Privacy-preserving processing algorithms',
        'Integration with existing communication infrastructure',
        'User-friendly audio management dashboard',
      ],
    },
    technicalApproach: 'We utilize state-of-the-art deep learning models specifically trained on acoustic patterns for optimal audio enhancement. The system processes ambient sound patterns in real-time to improve communication clarity while explicitly preserving conversation privacy.',
    impact: [
      '90% improvement in audio clarity',
      'Reduction in communication issues by 40%',
      'Zero impact on day-to-day operations',
      'Scalable deployment across multiple office locations',
      'Continuous system learning and adaptation',
    ],
    benefits: [
      'Enhanced communication quality',
      'Reduced operational costs',
      'Improved confidence in business discussions',
      'Future-proof communication infrastructure',
    ],
    timeline: [
      'Phase 1 (Months 1-2): System Architecture Design, Initial AI Model Development, Audio Network Planning',
      'Phase 2 (Months 3-4): AI Model Training & Validation, Hardware Integration, Initial Testing',
      'Phase 3 (Months 5-6): Pilot Deployment, System Optimization, Full Deployment Preparation',
    ],
    budget: {
      header: 'Total Project Cost: $63,000',
      title: 'Development ($35,000):',
      items: [
        'AI Model Development: $20,000',
        'System Architecture: $15,000',
      ],
      title2: 'Hardware ($18,000):',
      items2: [
        'Audio Enhancement Hardware: $12,000',
        'Processing Units: $6,000',
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Quality Testing: $4,000',
        'Pilot Program: $6,000',
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
    applicant: 'InnovateTech Systems',
    referralSource: 'LinkedIn',
    projectTitle: 'Smart Audio Processing for Enhanced Communication',
    summary: 'Leveraging deep neural networks to create an intelligent system that can enhance audio quality and isolate important communication in complex acoustic environments, while focusing on privacy preservation and ethical considerations.',
    description: 'Our solution employs advanced neural network architectures specifically designed for audio enhancement in multi-layered business environments.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Multi-layer neural network for audio pattern recognition',
        'Ethical AI framework for privacy preservation',
        'Distributed audio sensor array system',
        'Real-time audio processing engine',
        'Secure data handling protocol'
      ]
    },
    technicalApproach: 'Using a combination of convolutional and recurrent neural networks, our system processes acoustic data in real-time to enhance audio quality and communication clarity. The solution incorporates privacy-by-design principles to ensure ethical handling of audio data.',
    impact: [
      'Improvement in audio clarity with 95% accuracy',
      'Privacy-preserving processing with zero data retention',
      'Real-time audio enhancement capabilities',
      'Adaptive learning from new acoustic patterns',
      'Minimal processing latency (<50ms)'
    ],
    benefits: [
      'Enhanced audio communication quality',
      'Proactive noise reduction',
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
      header: 'Total Project Cost: $68,000',
      title: 'AI Development ($40,000):',
      items: [
        'Neural Network Development: $25,000',
        'Training Infrastructure: $15,000'
      ],
      title2: 'Equipment ($20,000):',
      items2: [
        'Audio Sensor Arrays: $12,000',
        'Processing Hardware: $8,000'
      ],
      title3: 'Implementation ($8,000):',
      items3: [
        'Testing and Validation: $5,000',
        'Deployment: $3,000'
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
    applicant: 'Quantum Audio Labs',
    referralSource: 'Industry Conference',
    projectTitle: 'Smart Audio Processing for Enhanced Communication',
    summary: 'A revolutionary approach using quantum-inspired algorithms to process and analyze acoustic environments, providing unprecedented accuracy in audio enhancement for business communications while maintaining complete privacy.',
    description: 'Our quantum-inspired solution brings cutting-edge mathematical models to audio processing, offering superior performance compared to traditional methods.',
    keyComponents: {
      title: 'Key Components',
      items: [
        'Quantum-inspired processing algorithms',
        'Advanced acoustic modeling system',
        'Environmental noise mapping',
        'Adaptive audio enhancement protocols',
        'Real-time audio quality visualization'
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
      header: 'Total Project Cost: $65,000',
      title: 'Research & Development ($35,000):',
      items: [
        'Algorithm Development: $25,000',
        'System Architecture: $10,000'
      ],
      title2: 'Hardware ($20,000):',
      items2: [
        'Specialized Processing Units: $15,000',
        'Sensor Systems: $5,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Testing & Validation: $6,000',
        'Deployment: $4,000'
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
    applicant: 'BioSound Innovations',
    referralSource: 'Academic Research Network',
    projectTitle: 'Smart Audio Processing for Enhanced Communication',
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
      header: 'Total Project Cost: $48,000',
      title: 'Research & Development ($28,000):',
      items: [
        'Algorithm Development: $18,000',
        'System Design: $10,000'
      ],
      title2: 'Hardware ($12,000):',
      items2: [
        'Biomimetic Sensors: $8,000',
        'Processing Units: $4,000'
      ],
      title3: 'Implementation ($8,000):',
      items3: [
        'Testing: $5,000',
        'Deployment: $3,000'
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
    applicant: 'SecureTech Solutions',
    referralSource: 'Tech Nation Network',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $75,000',
      title: 'Development ($40,000):',
      items: [
        'AI System Development: $25,000',
        'Hardware Tool Creation: $15,000'
      ],
      title2: 'Equipment ($25,000):',
      items2: [
        'Testing Hardware: $15,000',
        'Development Infrastructure: $10,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Security Validation: $6,000',
        'Documentation: $4,000'
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
    applicant: 'CryptoTech Innovations',
    referralSource: 'Technology Conference',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $68,000',
      title: 'Development ($35,000):',
      items: [
        'Platform Development: $20,000',
        'Crypto Analysis Tools: $15,000'
      ],
      title2: 'Infrastructure ($23,000):',
      items2: [
        'Computing Resources: $15,000',
        'Security Tools: $8,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Testing: $6,000',
        'Documentation: $4,000'
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
    applicant: 'AutoTest Systems',
    referralSource: 'Software Development Forum',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $72,000',
      title: 'Development ($38,000):',
      items: [
        'AI System Development: $23,000',
        'Hardware Integration: $15,000'
      ],
      title2: 'Equipment ($24,000):',
      items2: [
        'Testing Hardware: $14,000',
        'Computing Infrastructure: $10,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Validation: $6,000',
        'Documentation: $4,000'
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
    applicant: 'VulnCheck Technologies',
    referralSource: 'Tech Startup Network',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $58,000',
      title: 'Development ($30,000):',
      items: [
        'ML System Development: $20,000',
        'Integration: $10,000'
      ],
      title2: 'Infrastructure ($20,000):',
      items2: [
        'Computing Resources: $12,000',
        'Testing Environment: $8,000'
      ],
      title3: 'Implementation ($8,000):',
      items3: [
        'Testing: $5,000',
        'Documentation: $3,000'
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
    applicant: 'HardwareTech Systems',
    referralSource: 'Innovation Hub',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $82,000',
      title: 'Development ($45,000):',
      items: [
        'Hardware Development: $30,000',
        'Software Integration: $15,000'
      ],
      title2: 'Equipment ($27,000):',
      items2: [
        'EM Analysis Equipment: $17,000',
        'Testing Tools: $10,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Validation: $6,000',
        'Documentation: $4,000'
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
    applicant: 'EmbeddedSec Labs',
    referralSource: 'Technology Alliance',
    projectTitle: 'TechForward Accelerate: Innovation Program for Emerging Companies',
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
      header: 'Total Project Cost: $70,000',
      title: 'Development ($35,000):',
      items: [
        'Platform Development: $20,000',
        'Tool Integration: $15,000'
      ],
      title2: 'Equipment ($25,000):',
      items2: [
        'Testing Hardware: $15,000',
        'Development Tools: $10,000'
      ],
      title3: 'Implementation ($10,000):',
      items3: [
        'Validation: $6,000',
        'Documentation: $4,000'
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