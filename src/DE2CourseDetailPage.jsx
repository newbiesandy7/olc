import { useState } from 'react';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';
import { testimonials, faqs } from './detailData';

const de2Chapters = [
  {
    number: 1,
    title: 'Chapter 1: Advanced Spark Optimization & Tungsten Engine',
    summary: 'Catalyst Engine, Memory Management, Skew Handling • 5 Lessons',
    icon: 'memory',
    lessons: [
      'Deep dive into Catalyst Optimizer and Tungsten Execution Engine',
      'Memory Management Strategies: User Memory vs Storage Memory Tuning',
      'Handling Severe Data Skew: Salting, Adaptive Query Execution (AQE)',
      'Broadcast Joins, Sort-Merge Joins & Off-Heap Memory Configuration',
      'Spark UI Profiling, Event Logs & Diagnostic Bottleneck Analysis'
    ]
  },
  {
    number: 2,
    title: 'Chapter 2: Real-time Streaming with Flink & Apache Kafka',
    summary: 'Event-Time, Watermarking, Exactly-Once Semantics • 5 Lessons',
    icon: 'stream',
    lessons: [
      'Event-Time Processing, Tumbling & Session Windowing Mechanics',
      'Watermarking Logic: Bounded Out-of-Orderness & Late Data Handling',
      'State Management in Flink: RocksDB State Backend & Checkpointing',
      'Fault Tolerance Mechanics & Distributed Snapshot Architecture',
      'End-to-End Exactly-Once Processing with Flink & Apache Kafka Sinks'
    ]
  },
  {
    number: 3,
    title: 'Chapter 3: Cloud Data Lakes (AWS EMR, Delta Lake & S3)',
    summary: 'Multi-Petabyte Architecture, Lake Formation, ACID Transactions • 5 Lessons',
    icon: 'cloud',
    lessons: [
      'Architecting Multi-Petabyte Data Lakes on Amazon S3 & Google Cloud Storage',
      'Delta Lake & Iceberg Internals: Time Travel, Schema Enforcement & Merge',
      'Security Protocols: AWS Lake Formation, Fine-Grained IAM & Encryption',
      'Automated Lakehouse Maintenance: Compaction, Vacuum & Partitioning',
      'Airflow DAG Orchestration for Auto-Scaling Cloud EMR Clusters'
    ]
  },
  {
    number: 4,
    title: 'Chapter 4: Production Enterprise Capstone Project',
    summary: 'Multi-Cloud Architecture & High-Throughput Pipelines • 4 Lessons',
    icon: 'rocket_launch',
    lessons: [
      'Architecting a 1M+ Events/Sec E-Commerce Real-Time Engine',
      'Multi-Cloud Migration: HDFS to AWS S3 Zero-Downtime Pipeline',
      'Production Monitoring: Prometheus, Grafana & Automated Alerts',
      'Technical Interview Preparation & System Design Mock Loops'
    ]
  }
];

export default function DE2CourseDetailPage() {
  const [openChapter, setOpenChapter] = useState(0);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen">
      <HomeHeader />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-margin-desktop max-w-container-max mx-auto pt-12 pb-20 overflow-hidden bg-surface-container-lowest border-b border-outline-variant/40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container border border-primary/20">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-caps text-label-caps uppercase">DE2 Master Program</span>
                </div>
                <div className="flex items-center text-amber-500 text-sm font-bold gap-1 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span>4.9 (2,450 Reviews)</span>
                </div>
              </div>

              <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                DE2 Advanced Big Data: <br />
                <span className="text-primary">Lakehouse &amp; Streaming Architecture</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Master modern data lakes, Spark 3.x Tungsten optimization, Apache Flink real-time streaming, and enterprise multi-cloud infrastructure. Built for senior engineers &amp; architects.
              </p>

              <div className="flex flex-wrap gap-8 py-6 border-y border-outline-variant/50">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">DURATION</span>
                  <span className="font-metric-lg text-metric-lg text-primary">136 Hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">PROJECTS</span>
                  <span className="font-metric-lg text-metric-lg text-primary">8 Practical</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">DIFFICULTY</span>
                  <span className="font-metric-lg text-metric-lg text-secondary">Advanced</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#pricing" className="bg-primary hover:bg-primary/90 text-on-primary px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-md active:scale-95 inline-block">
                  Enroll Now
                </a>
                <a href="#syllabus" className="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-10 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 inline-block">
                  Syllabus PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-1 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-outline-variant">
                <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-high relative group shadow-lg">
                  <img
                    alt="Advanced Big Data Engineering Dashboard"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnqnXQujj8u5p5IHH8xmKD36G6qALsfd7tymk6QTlVsCsrGJdrzH_ynzaBjcN5VaALfMI7cCcVuorZ7hC7_1r5wmpxcM6_4TI8qz_4xl0kuyXZLCqi55kFt_pqdj4HumlTPHW9Ng5nwgqoTizAH4KF1bJEt1bz5B_eaScAOfVYrxFeu6d_akNxDmLfB0uA41nObF4XPHj7YI_E2l9K7wgvAhBy5TAe2-7DknV73DBgi4IRJnwvd8oX27w-6J1YhvXX0MP1HXL8S307"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl border border-outline-variant shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">event</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">NEXT COHORT</p>
                    <p className="font-body-md text-body-md font-bold text-on-surface">October 24, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Learning Grid */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core DE2 Engineering Pillars</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Deep-dive into petabyte-scale data infrastructure designed by principal engineers from Google, Databricks, and AWS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Spark 3.x Tungsten Engine Optimization</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Master whole-stage code generation, memory layout tuning, and off-heap execution to eliminate garbage collection pauses and achieve peak throughput.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Catalyst Optimizer Custom Rules</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Adaptive Query Execution (AQE)</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Dynamic Partition Pruning</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Skew Join Salting Strategies</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">stream</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Apache Flink &amp; Real-time Streaming</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Stateful stream processing with RocksDB state backend, event-time watermarking, and zero data loss architectures.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">cloud_done</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Cloud Data Lakes &amp; Delta Lake</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                ACID transactions on S3/GCS, time-travel queries, schema evolution, and automated Lakehouse maintenance.
              </p>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">security</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Enterprise Governance &amp; Security</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Implement AWS Lake Formation fine-grained access control, IAM policies, and VPC endpoints for compliant data lake architectures.
                  </p>
                </div>
                <div className="w-full md:w-64 h-40 bg-surface-container rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    alt="Cloud Architecture Diagram"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGnKu4DHHCGtw0xrHQQDxwufaNRNCK_S41UehcZ5IxIaVjdSFgZLAci-fUrlcqujPKHGMKLEAF82UigGNN5UZRVDOFppH-hD9a3FreksRrvG4IG13ekt5x2LEd2p2T0pFyH38jacCdWqZhgLJ6KhE3l8WUBx21e4tDiTmvQD_cq6VOYb49RKQMDIhNeizQOKvXfe_GWgXX8OMZ3e2TQbuiyN21amepsQ2kg111iPAOgLlVswWBYsyoS43yxy0nCaTWQob6eZSCZEpu"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Stepper */}
        <section className="bg-surface-container-low py-24 border-y border-outline-variant">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Structured 16-Week Roadmap</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">From foundations to enterprise data architect leadership.</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-outline-variant">
                <div className="absolute top-0 left-0 h-full w-full" style={{ background: 'linear-gradient(90deg, #004b6b 0%, #00668f 100%)' }}></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="font-metric-lg text-metric-lg text-primary">01</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 1: Spark Tuning</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Catalyst internals, off-heap memory, Tungsten code generation, and AQE.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="font-metric-lg text-metric-lg text-primary">02</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 2: Flink Streaming</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Stateful stream processing, watermarks, RocksDB state backends &amp; exactly-once.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="font-metric-lg text-metric-lg text-primary">03</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 3: Cloud Lakehouse</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Building multi-petabyte Delta Lake &amp; Iceberg lakes on S3/EMR with Lake Formation.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 4: Capstone</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Production deployment of real-time multi-cloud data pipelines with Airflow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Breakdown */}
        <section id="syllabus" className="px-margin-desktop max-w-container-max mx-auto py-24 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Detailed Syllabus Breakdown</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">136 hours of rigorous technical training spread across 16 specialized modules.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {de2Chapters.map((chapter, index) => {
              const isOpen = openChapter === index;
              return (
                <div key={chapter.number} className="border border-outline-variant rounded-2xl overflow-hidden bg-surface-container-lowest hover:border-primary/50 transition-all group">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => toggleChapter(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">{chapter.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md text-on-surface">{chapter.title}</h4>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">{chapter.summary}</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-outline-variant/30 bg-surface-container-lowest">
                      <ul className="space-y-3 mt-4 text-body-md text-on-surface-variant">
                        {chapter.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Primary Mentor Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="bg-deep-navy rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Dr. Aris Thorne"
                    className="w-40 h-40 rounded-full border-4 border-amber-gold object-cover shadow-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN_8z2Zrj4STmcuSrblztbL5PjBt9-H6jh0CCTutZV2tsXWmXcB92zQyEjcyq_5up_UrHTiWCWzdsFlawQ1rtRk-NRCBH9U2EgGtzMQPpLKHaPNrmG4juvJIIgDQpmoyoV0BlAiaW5b6yJzlByEZ3tktcudHuTu3tuquM9BzGVi1rzJS7Wox-Fd5TZEbc_2PeZ7louVkjnPVpNlPJGVv5WhDtYvnDCJCd6Q54U4D5XsiRTf2EeVRn_xouuVCisMZVPUIzxQipo2AJP"
                  />
                  <span className="absolute bottom-2 right-2 bg-amber-gold text-deep-navy text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Primary Mentor
                  </span>
                </div>
              </div>
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-gold/20 text-amber-gold font-bold text-xs uppercase tracking-widest">
                  Lead Instructor
                </div>
                <h3 className="font-display-xl text-3xl font-bold">Dr. Aris Thorne</h3>
                <p className="text-amber-gold/90 font-medium">Ex-Principal Data Architect at AWS &amp; Databricks</p>
                <p className="text-white/80 italic text-base leading-relaxed">
                  "In the DE2 program, we don't just teach framework syntax; we build the core engineering intuition required to architect petabyte-scale data engines that run with sub-second latency."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-gold/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">Alumni Leading Data Engineering Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl glass-panel relative overflow-hidden shadow-sm bg-surface-container-lowest border border-outline-variant">
                <div className="flex items-center gap-4 mb-6">
                  <img alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" src={t.image} />
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">{t.name}</h4>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-4">"{t.quote}"</p>
                <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-lg font-bold text-xs">
                  Verified Alumni
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-margin-desktop max-w-container-max mx-auto py-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-2xl relative">
            <div className="grid md:grid-cols-2">
              <div className="p-12 space-y-6">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">DE2 Master <br /><span className="text-primary">Enrollment</span></h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">136 Hours Live Technical Instruction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Dedicated AWS &amp; GCP Sandbox Labs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">8 Enterprise Capstone Projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">1-on-1 Senior Engineering Career Mentorship</span>
                  </li>
                </ul>
                <div className="pt-8 border-t border-outline-variant">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase leading-tight">30-Day Money Back <br />Guarantee</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-surface-container-high/30 flex flex-col justify-center text-center space-y-6 border-l border-outline-variant">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">FULL PROGRAM TUITION</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">₹35,400</span>
                    <span className="font-body-lg text-body-lg text-on-surface-variant line-through mb-2">₹75,000</span>
                  </div>
                </div>
                <button className="block w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-md text-center">
                  Secure Your Seat Now
                </button>
                <p className="font-body-md text-xs text-on-surface-variant">Limited to 40 students per cohort</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface text-center">DE2 Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-outline-variant rounded-2xl p-6 bg-surface-container-lowest">
                  <h4 className="font-bold text-lg text-on-surface mb-2">{faq.question}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
