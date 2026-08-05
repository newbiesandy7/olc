export const subNavLinks = [
  { label: 'About', href: '#about', active: true },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#highlights', mobileOnly: true },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' }
];

export const syllabusModules = [
  {
    number: '01',
    title: 'Advanced Spark Optimization',
    meta: '12 HOURS • 4 SESSIONS',
    points: [
      'Deep dive into Catalyst Optimizer and Tungsten Execution Engine.',
      'Memory management strategies: User vs Storage Memory.',
      'Handling Data Skew and Broadcast joins in production.'
    ],
    defaultOpen: true
  },
  {
    number: '02',
    title: 'Real-time Data Streaming with Flink',
    meta: '18 HOURS • 6 SESSIONS',
    points: [
      'Event-time processing and Watermarks logic.',
      'State management and Fault Tolerance in high-throughput streams.'
    ]
  },
  {
    number: '03',
    title: 'Cloud Data Lakes (AWS EMR & S3)',
    meta: '20 HOURS • 7 SESSIONS',
    points: [
      'Architecting Multi-petabyte Data Lakes on S3.',
      'Security protocols: IAM, VPC endpoints, and Lake Formation.'
    ]
  }
];

export const capstoneProjects = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARlN6QhNASSB8XITwP6KoYWCSOKuYnB5A61Ujnr_T1YeTbQDYwCXsMZLB_bBVac_eTTxM9bxFguIIJpb6iLrAXdmo9wZG4b54dBOiLCisaEPhanPsThe1m7w7JHPmZxmDMA_vMk7iyT0CPis3mW9NA-BveMWZi2VobeDuQ4SDGckq9t1zAYQ22G_LZo1MPHuwWRbEXYoEbYZKfW3J4J51JDsmfD9WyJLSiE3PXwJEDsr-7anmQIpanNstVLIzaEp2bhNahooQsaJhd',
    title: 'E-commerce Real-time Personalization',
    description: 'Build a Kafka-Flink pipeline that processes 1M+ events per second to deliver user recommendations.',
    tags: ['Apache Kafka', 'Flink', 'Redis']
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGnKu4DHHCGtw0xrHQQDxwufaNRNCK_S41UehcZ5IxIaVjdSFgZLAci-fUrlcqujPKHGMKLEAF82UigGNN5UZRVDOFppH-hD9a3FreksRrvG4IG13ekt5x2LEd2p2T0pFyH38jacCdWqZhgLJ6KhE3l8WUBx21e4tDiTmvQD_cq6VOYb49RKQMDIhNeizQOKvXfe_GWgXX8OMZ3e2TQbuiyN21amepsQ2kg111iPAOgLlVswWBYsyoS43yxy0nCaTWQob6eZSCZEpu',
    title: 'Multi-cloud Data Migration',
    description: 'Migrating legacy HDFS clusters to AWS S3 using Airflow and EMR with zero downtime.',
    tags: ['AWS EMR', 'Airflow', 'S3']
  }
];

export const courseHighlights = [
  {
    icon: 'cloud_done',
    title: 'Live AWS Labs',
    copy: 'Real hands-on experience on live AWS environments, not just simulations.'
  },
  {
    icon: 'terminal',
    title: '4 Production Projects',
    copy: 'Portfolio-ready projects reviewed by senior engineering leads.'
  },
  {
    icon: 'functions',
    title: 'DSA Basics Included',
    copy: 'Brush up on essential algorithms for engineering interviews.'
  },
  {
    icon: 'workspace_premium',
    title: 'Industry Certification',
    copy: 'Recognized by top tech firms like Google, Amazon, and Meta.'
  }
];

export const courseMeta = [
  { label: 'Duration', value: '6 Months' },
  { label: 'Effort', value: '10-12 hrs/week' },
  { label: 'Format', value: 'Instructor-led Online' }
];

export const testimonials = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUBTVrNbqzuzGftlb4ea7OueLlRNc2GxdUm6naQtHl4VJI-IiokjwtzuNohkxJvOcN-wWE6I1eq5RedMfHNqWXn4SVB5M05VplKu6SNpyZrwgBjKRwOyzosYbQE4n3ajIUecgfVDI3EwBQXi0cKym_DYHycMOVJJ4lbfUieKKrTZGII6hgti9QopB2_YisEsCmTSls4d7IRocvdvRhARkPnHxg7f6T8d0o0ECKmZ_HmBJLwJDvGpDw8y6fn-_CPNqiLqlGLz54w8x4',
    quote: 'The deep dive into Spark internals was a game changer for me. I went from a junior analyst to a Lead Data Engineer at Netflix within 8 months of finishing DE2.',
    name: 'Sarah Jenkins',
    role: 'Lead Data Engineer @ Netflix'
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWW-r4racLCjQjRTs9G2-RSoAHzuEZb09MNJU9gbIrT2Ar-um1BbvgJYBrsxHcmTmTT-IsxncSYoKEbsmIY61vFXyl071Km207eplgKUb4ACTS9FnT4n-V1fSKToSsJTh_3-waVZUhggMdYh1nvppwlwHLuQyvJdlE6ZV_i6UpxmmIq-oVYWwVLHDeyQ6dttEk_vhWWWU-dtIXGtdNIwAdzL6g05-tzSXDRPy5T6zs6he6gtMsS2m-GsmSfF0Kti1KBTJ2mcH88UUU',
    quote: 'DataMastery\'s focus on live AWS labs sets it apart. No other program gives you this level of access to high-performance computing resources.',
    name: 'David Chen',
    role: 'Senior Architect @ Databricks'
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoi3xtvRNKQS5nBlUqkCOwk_xf9edtHdaZjl5L1aPMvN1vhLd4gXcZxb4nZJz0V8zDdGToeaIea4ojjY8sZxikBBWcaaFY0QIfe23kQC90TR7bOy1VTkJGXBvATcW9PmzQ0IARPHSzRxn6i7hC-JyyvDekk4KVcBLw5I4h4TM-SQHLdw5s6LbeMX1EfhqtTdl7OgzViRqh7K7_EWElSCbVWhjlnt-lIaY8QXH6yFjV0j-7qscwEoxAJMWdNEYAXRy6r979KGY_dFEx',
    quote: 'The career support and mock interviews were just as valuable as the technical curriculum. They truly prepare you for the toughest engineering loops.',
    name: 'Amina Yusuf',
    role: 'Data Infrastructure Lead @ Uber'
  }
];

export const faqs = [
  {
    question: 'What are the prerequisites for this program?',
    answer:
      'Applicants should have at least 2 years of experience in software engineering or data analysis, with a strong foundation in Python or Scala and basic SQL knowledge.'
  },
  {
    question: 'Do I get access to AWS for free?',
    answer:
      'Yes, all students are provided with a dedicated AWS sandbox environment with a pre-set budget for the duration of the course to complete all labs and projects.'
  },
  {
    question: 'Can I enroll while working full-time?',
    answer:
      'Absolutely. The program is designed for working professionals with sessions held on weekends and weekday evenings (IST/PST slots available).'
  }
];
