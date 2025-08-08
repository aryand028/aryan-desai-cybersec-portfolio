// src/data/portfolioData.ts

const portfolioData = {
  personalInfo: {
    name: "ARYAN DESAI",
    location: "Jersey City, NJ, USA",
    phone: "201-204-7610",
    email: "desaiaryan28@gmail.com",
    linkedin: "http://www.linkedin.com/in/aryandesai28",
    Introduction: `Achieved industry recognized US DoD compliant CompTIA Security+ CE Certification. On Course of achieving CISSP.
    25+ Certifications/Courses under Cybersecurity. Holder of Cyber Security Analyst Professional Specialization Certificate offered by IBM.
    Hardworking and ambitious in life with all schedules organized. Wise decision maker and good learner always eager to learn new skills & procure new challenges.`,
    Strength: `STRENGTHS: Security Audits, Business Continuity Management, Risk Management, SIEM, Governance, Risk & Compliance [GRC], Network Security, OS Security, Threat and Vulnerability Management, Incident Response & Access Management, Security Analysis, Information Assurance, Cyber Threat Intelligence, Cryptography, Public Key Infrastructure`,
    SoftSkills: `SOFT SKILLS: Communication, Team Leadership, Problem Solving, Adaptability, Critical Thinking, Decision making, Creative Pitching.`
  },
  skills: {
    "SIEM": ["Splunk", "Wazuh", "IBM Qradar", "Graylog"],
    "EDR/XDR Tools": ["CrowdStrike", "SentinelOne", "Microsoft Defender", "Cisco SecureX"],
    "Incident Response & Forensics": ["MITRE ATT&CK", "Autopsy", "Registry Explorer", "FTK Imager", "AWS Incident Manager"],
    "Scripting & Automation": ["Python", "Bash", "PowerShell", "SQL"],
    "Vulnerability Assessment": ["Nmap", "Nessus", "OpenVAS", "SQLMap"],
    "Cloud Security": ["AWS", "Azure", "Cisco Cloudlock"],
    "Security Tools": ["Wireshark", "VirusTotal", "OWASP ZAP"],
    "Risk & Compliance": ["ISO 27K", "ISO31K", "NIST", "HIPAA", "PCI-DSS", "SSAE"],
    "Operating Systems": ["Windows", "Ubuntu", "CentOS"]
  },
  skillLevels: {
    "SIEM": 90,
    "EDR/XDR Tools": 80,
    "Incident Response & Forensics": 90,
    "Scripting & Automation": 75,
    "Vulnerability Assessment": 85,
    "Cloud Security": 70,
    "Security Tools": 85,
    "Risk & Compliance": 80,
    "Operating Systems": 85
  },
  education: [
    {
      degree: "Master Of Science, Computer Science",
      duration: "Sep 2023 - May 2025",
      gpa: "3.86/4.00",
      institution: "Stevens Institute of Technology",
      location: "Hoboken, New Jersey, USA",
      coursework: [
        "Cybersecurity Principles",
        "Enterprise & Cloud Security with hands-on Lab Experiments [AWS Cloud]",
        "Cloud Computing",
        "TCP/IP",
        "Threat Scenarios with Threat-Asset & Risk-Control Matrix"
      ]
    },
    {
      degree: "Bachelor of Technology, Electronics Engineering",
      duration: "August 2019 - May 2023",
      gpa: "8.53/10.00",
      institution: "Mumbai University",
      location: "Mumbai, India",
      coursework: [
        "Fundamentals of Cybersecurity",
        "Big Data Analytics",
        "IoT Enterprise Network",
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS"
      ]
    }
  ],
  experience: [
    {
      company: "Community Dreams Foundation",
      location: "Remote, USA",
      position: "Cybersecurity Analyst",
      achievements: [
        "Implemented security improvements by assessing current scenarios and evaluating trends.",
        "Maintained quality service and technical knowledge by following standards, reviewing publications and attending educational workshops.",
        "Performed basic security testing on the system and handling legal/compliance documents.",
        "Upgraded the system by constantly implementing and maintaining security controls, identifying abnormalities and reporting violations.",
        "Conducted malware analysis and identified vulnerabilities, ultimately enhancing threat detection accuracy by 20% through static and dynamic techniques.",
        "Examined emails, web browser and file operations usage with acquisition as well as deleted content recovery using Autopsy."
      ]
    },
    {
      company: "Stevens Institute of Technology",
      location: "Hoboken, USA",
      position: "Graduate Assistant",
      achievements: [
        "Provided excellent customer service by assisting patrons with locating resources, answering inquiries and resolving issues efficiently.",
        "Monitored and maintained access control by verifying patron identities, demonstrating an understanding of physical security principles.",
        "Managed circulation duties, including checking in/out materials, maintaining accurate records and organizing inventories.",
        "Identified and reported potential security incidents such as unauthorized access attempts or suspicious activity providing secure operational environment.",
        "Supported library operations by ensuring a quiet, organized environment and troubleshooting basic technology issues.",
        "Handled sensitive information such as patron records complying with CIA Triad and adherence to data privacy policies."
      ]
    },
    {
      company: "IIT Bombay, India",
      location: "Mumbai, India",
      position: "Research Intern",
      achievements: [
        "Led the cybersecurity efforts in the development of an IoT-Enabled EMG-Controlled Wheelchair, transforming bio signals into motor commands for assistive mobility, with detailed proposals and report publication/documentation.",
        "Designed and implemented the program logic and dashboard interface for both users and developers, focusing on secure data flow, access control and real-time telemetry monitoring, with development of a secure pipeline to push telemetry and diagnostic data to cloud, handling cloud security and OS hardening.",
        "Applied practical skills in software-hardware co-design, with an emphasis on cyber-physical system security and relevant Data Encryption standards.",
        "Demonstrated leadership qualities in security planning, team coordination and technical communications, alongside managing project finance and grants.",
        "Led security discussions and showcased the project at the DST Inauguration at IIT Bombay, engaging with the DST Secretary on secure assistive technologies."
      ]
    }
  ],

  threatMetrics: {
    threatsBlocked: 1107,
    incidentsResolved: 89,
    systemsMonitored: 203,
    uptimePercentage: 99.6,
    vulnerabilitiesPatched: 265,
    securityAudits: 9
  },
  monthlyThreatData: [
    { month: 'Jan', threats: 88, incidents: 74 },
    { month: 'Feb', threats: 97, incidents: 87 },
    { month: 'Mar', threats: 105, incidents: 99 },
    { month: 'Apr', threats: 117, incidents: 101 },
    { month: 'May', threats: 176, incidents: 136 },
    { month: 'Jun', threats: 212, incidents: 173 }
  ],
  certifications: [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      credentialId: "COMP001022599328",
      status: "Certified"
    },
    {
      name: "IBM Cybersecurity Analyst Professional Specialization",
      issuer: "IBM",
      credentialId: "https://www.coursera.org/account/accomplishments/specialization/ZPGXTKFTKR8S",
      status: "Certified"
    },
    {
      name: "SIEM Engineer",
      issuer: "LetsDefend",
      credentialId: "https://app.letsdefend.io//certificate/show/22933913-6847-4621-bd53-c2e795d58a49",
      status: "Certified"
    },
    {
      name: "Cyber Threat Management",
      issuer: "Cisco",
      credentialId: "https://www.credly.com/badges/6588fc10-3f8c-4a0f-89e4-b4688d60ad5e/linked_in_profile",
      status: "Certified"
    },
    {
      name: "Endpoint Security",
      issuer: "Cisco",
      credentialId: "https://www.credly.com/badges/70e8f03a-7721-482d-a7de-1716398f8f90/linked_in_profile",
      status: "Certified"
    },
    {
      name: "Advanced Digital Forensics",
      issuer: "Cybrary",
      credentialId: "https://www.credly.com/badges/0e98e9f8-3427-4445-8609-8501f7e6a8d2/linked_in_profile",
      status: "Certified"
    },
    {
      name: "More Relevant Certifications",
      issuer: "Multiple Recognized Organizations",
      credentialId: "https://www.linkedin.com/in/aryandesai28/details/certifications/",
      status: "Certified"
    }
  ],
  projects: [
    {
      title: "Evidence Acquisition",
      description: "",
      achievements: [
        "Performed Digital Forensics evidence acquisition using dc3dd and FTK Imager tools, wherein a disk was treated as a piece of evidence [not mounted initially]. Got hands-on with Kali 1 Linux system as well as Windows server to experience live acquisition scenario. Placed the image of the evidence item on storage media which was connected, but not mounted, hence gained drive mounting knowledge with multiple drives and devices. Examined SHA1, SHA256 and MD5 hash values of source device, user directories and studying other parameters like Sector Count Field, Image Fragment Size, Logical File Container, etc."
      ],
      technologies: ["dc3dd", "FTK Imager", "Autopsy", "Hashing Algorithms"]
    },
    {
      title: "Examination of Web Browser/Email/File Operations Usage",
      description: "",
      achievements: [
        "Used Autopsy, Registry Explorer and analyzeMFT tools to examine artifacts of common file operations. Also explored file system metadata timestamps and ran Hash Lookup module. Examined Firefox and Chrome history using Hindsight and DB Browser to identify evidence of an unauthorized file extension. Eventually learnt to use SQL queries to view content from SQLite-format web history files. Parsed emails found within OST and MBOX files, gaining exposure to email headers. Explored XST Reader [parser] as a tool to view OST and PST files that has not been validated by any third party. Used HxD Hex Editor to manually carve an image file from a chunk of unallocated space. Explored the concept of finding files automatically recovered by Autopsy and used PhotoRec ingest module to carve for deleted files in unallocated space."
      ],
      technologies: ["HxD Hex Editor", "Registry Explorer", "analyzeMFT", "XST Reader"]
    },
    {
      title: "Hands-on with Splunk",
      description: "",
      achievements: [
        "Use of Splunk as SOC member with add/search data on Splunk with reports, health status check and alerts on Splunk."
      ],
      technologies: ["Splunk", "Log Management", "SIEM"]
    },
    {
      title: "Hands-on with Wazuh",
      description: "",
      achievements: [
        "Wazuh server and agent installation for collecting logs and writing custom rules/correlation with sample attack scenarios [Brute-force and Web-Attack]."
      ],
      technologies: ["Wazuh", "Event Correlation", "Correlation Analysis", "Log Management", "SIEM"]
    },
    {
      title: "Windows Registry Analysis & Execution Artifacts",
      description: "",
      achievements: [
        "Extracted Registry files from system image by identifying, locating and interpreting specific data in registry keys. Cleaned dirty hives to ensure that the hives are synchronized with their transaction logs. Examined Artifacts of Execution in the Application Compatibility Toolkit [AppCompatCache] and explored the execution records created by Background Activity Monitor [BAM]. Getting hands-on with tools like SRUM Dump, PECmd to examine the artifacts of execution in SRUDB.DAT."
      ],
      technologies: ["SRUM Dump", "PECmd", "Registry Explorer"]
    },
    {
      title: "Memory Acquisition & Examination",
      description: "",
      achievements: [
        "Captured a memory image using FTK Imager as well as winpemem and used volatility to test/analyze sample memory image to identify the aspects of running processes and network connections."
      ],
      technologies: ["FTK Imager", "Memory Management"]
    },
    {
      title: "EDR/XDR Implementation in Real-World",
      description: "",
      achievements: [
        "EDR [SentinelOne EDR Solution] Utilization in DFIR plans like Incident detection & response with practical scenarios [Ransomware attack & Credential dumping]."
      ],
      technologies: ["DFIR", "Endpoint Security", "Threat Analysis"]
    },
    {
      title: "IBM QRadar for Log Collection and Parsing",
      description: "",
      achievements: [
        "SIEM Log Collection and parsing [Firewall, Windows & Linux Logs] with IBM QRadar along with Log search, analysis, reporting and false positive alert tuning."
      ],
      technologies: ["IBM QRadar", "Reporting & Analysis"]
    },
    {
      title: "Compliance Tracking for Standards",
      description: "",
      achievements: [
        "Utilizing AuditBoard's compliance management tools and build a framework to track compliance with regulatory standards like ISO 27001, GDPR, or SOX."
      ],
      technologies: ["Compliance Auditing", "Standards Compliance"]
    },
    {
      title: "Case-Studies/Research",
      description: "",
      achievements: [
        "Detailed real-life case study with research and report on Trinity Health and LinkedIn data breaches with threat modeling, threat analysis and cyber threat intelligence [CTI]. Detailed demonstration of Threat-Asset Matrix & Risk-Control Matrix [RCM]. Individual paper/research on Security Standards & Regulations, Response to Cyberattacks in Ukraine War, Electronic Discovery & Business Impact Analysis."
      ],
      technologies: ["Risk Management", "Business Impact Analysis", "Cyber Threat Intelligence (CTI)", "Unified Threat Management", "E-Discovery"]
    }
  ]
};

export default portfolioData;
