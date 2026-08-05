import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';

const chapters = [
  {
    number: 1,
    title: 'Chapter 1: Kafka Foundations',
    summary: 'Introduction, Architecture, Ecosystem • 5 Lessons',
    icon: 'hub',
    lessons: [
      'Event Streaming Concepts & Distributed Log Use Cases',
      'Kafka Broker Architecture, Partitions, and ZooKeeper/KRaft Coordination',
      'Producer Internals: Message Delivery Semantics, Acks, Retries & Batching',
      'Consumer Groups, Offsets Commit Mechanisms, and Rebalancing Protocols',
      'Kafka CLI Fundamentals, Multi-Broker Clustering & Setup'
    ]
  },
  {
    number: 2,
    title: 'Chapter 2: Spark Core & RDDs',
    summary: 'Transformations, Actions, Lineage • 5 Lessons',
    icon: 'database',
    lessons: [
      'Spark Cluster Execution Model: Driver, Executors & Master Coordination',
      'RDD Fundamentals: Lazy Evaluation, Transformations vs. Actions',
      'Directed Acyclic Graphs (DAG) Optimization, Stages & Execution Lineage',
      'Shuffle Operations, Partitioning Optimization & Memory Management Tuning',
      'Unified APIs: Working with Spark DataFrames, Datasets & Spark SQL Queries'
    ]
  },
  {
    number: 3,
    title: 'Chapter 3: Spark Streaming & Kafka Integration',
    summary: 'DStreams, Structured Streaming • 5 Lessons',
    icon: 'stream',
    lessons: [
      'Micro-batching vs. Continuous Processing Engine Architecture',
      'Establishing Kafka Sources: Streaming Consumer Configuration & Options',
      'Stateful Stream Processing: Handling Late Data, Events Time, and Watermarking',
      'Windowing Operations: Tumbling and Sliding Windows in Stream Analysis',
      'Complex Stateful Operations: Using mapGroupsWithState for Sessions'
    ]
  },
  {
    number: 4,
    title: 'Chapter 4: Real-time Data Pipelines',
    summary: 'Project: Fraud Detection • 4 Lessons',
    icon: 'assignment',
    lessons: [
      'Designing End-to-End Zero-Data-Loss Streaming Architectures',
      'Data Serialization: Confluent Schema Registry Integration with Avro & Protobuf',
      'Capstone Project Setup: Building a Real-time Credit Card Fraud Detection Pipeline',
      'Production Deployment: Monitoring, Metrics, Logging, and Horizontal Scaling'
    ]
  }
];

export default function SparkKafkaDetailPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openChapter, setOpenChapter] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // IntersectionObserver scroll reveal for roadmap items
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    roadmapItems.forEach((item) => {
      item.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(item);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <div className="bg-surface text-on-surface font-sans">
      {/* TopNavBar Shell */}
      <HomeHeader />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-margin-desktop max-w-container-max mx-auto pt-16 pb-24 overflow-hidden bg-surface-container-lowest">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container border border-primary/20">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-label-caps text-label-caps uppercase">Professional Certification</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                Mastering Spark &amp; Kafka: <br /><span class="text-primary">Real-time Data Architecture</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Architect scalable, real-time data pipelines with the industry's most powerful streaming stack. Learn to manage millions of events per second with high reliability.
              </p>
              <div className="flex flex-wrap gap-8 py-6 border-y border-outline-variant/50">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">DURATION</span>
                  <span className="font-metric-lg text-metric-lg text-primary">64 Hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">PROJECTS</span>
                  <span className="font-metric-lg text-metric-lg text-primary">4 Practical</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">DIFFICULTY</span>
                  <span className="font-metric-lg text-metric-lg text-secondary">Advanced</span>
                </div>
              </div>
              <div className="flex gap-4">
                <RouterLink to="/spark-kafka/workspace" className="bg-primary hover:bg-primary/90 text-on-primary px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-md active:scale-95 inline-block">Enroll Now</RouterLink>
                <button className="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-10 py-4 rounded-xl font-bold text-lg transition-all active:scale-95">Syllabus PDF</button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-1 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-outline-variant">
                <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-high relative group shadow-lg">
                  <img
                    alt="Data Flow Visualization"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYUjD7Tyj0r-5ve48nxg-dsueBnTCHM4BAy1eQ78yQ7lmlS4xHEzksQCQKFxUswuPeJ0VhSYdrA23GcViDe4CVViJKjXCKtVAN7jKiRt-rlK-kTsPMeWoT6RcYLPNP8iPx1CKk_tNyQtqxhdWB2b4JOfu1s2yug9vy0_7HBNvaAIsIYw01wEBSgovl7H0JpVUIuARKp-rGpBJsMud5fSG6Y0vuocMjQhbXyEBDVaaHj8Cmm90txX_1aA"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl border border-outline-variant shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">NEXT COHORT</p>
                    <p className="font-body-md text-body-md font-bold text-on-surface">Oct 15, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Grid (Bento Style) */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Comprehensive Curriculum</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Master every layer of the modern streaming stack with hands-on modules designed by FAANG engineers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all group shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>hub</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Kafka Message Brokering &amp; Architecture</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Deep dive into broker internals, partition strategies, and cluster scaling. Learn to maintain zero-data-loss pipelines at petabyte scale.</p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Consumer Groups</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Replication Factors</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Exactly-Once Semantics</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Quotas &amp; Security</li>
              </ul>
            </div>
            {/* Small Card */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">dynamic_feed</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Spark Streaming</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Real-time processing with Micro-batching and continuous mode processing for ultra-low latency.</p>
            </div>
            {/* Small Card */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">description</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Schema Registry</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Master data evolution with Avro and Protobuf. Ensure cross-service compatibility.</p>
            </div>
            {/* Large Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-4xl text-primary-container mb-6">cloud</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Cloud Integration (AWS)</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Deploy production-ready clusters using MSK, EMR, and S3 sinks. Focus on cost optimization and reliability.</p>
                </div>
                <div className="w-full md:w-64 h-40 bg-surface-container rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    alt="Technical Diagram"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJppgnuVjSjo3lk3GGk0_aGPA8G7dt-SxS8EN9PD6lBtVy5QPnw-hPjF0SAka8Uv2yH5AleQD7J1Tkb_5Zcukuw7uUzUmvzqsSyST5yzl8cNsSDBletZhl8wS9m76Z-wbIlfWHC7i15LnASPnCf-Rm9xdaayTr_OXwd9tUTzYYjeS2V7CGuup_iNdbmC2evTfMzJXpMmmLMT-C9O9OYJfcwGVNflLMIPrt-7wPwX1xaUHQlRwYG1__yg"
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The Learning Path</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">From zero to architect in 16 structured weeks.</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-outline-variant">
                <div className="absolute top-0 left-0 h-full w-3/4 roadmap-line" style={{ background: 'linear-gradient(180deg, #004b6b 0%, #e1e2e3 100%)' }}></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left roadmap-item">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="font-metric-lg text-metric-lg text-primary">01</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 1: Foundations</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Deep dive into Scala functional programming and core Kafka broker fundamentals.</p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left roadmap-item">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                    <span className="font-metric-lg text-metric-lg text-primary">02</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 2: Core Spark</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Mastering RDDs, DataFrames, and the Spark Catalyst optimizer for bulk processing.</p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left roadmap-item">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-outline flex items-center justify-center mb-6">
                    <span className="font-metric-lg text-metric-lg text-outline">03</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 3: Real-time</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Implementing Structured Streaming, watermarking, and complex state management.</p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left roadmap-item">
                  <div className="w-20 h-20 rounded-full bg-surface-container-lowest border-4 border-outline flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-outline">rocket_launch</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Phase 4: Capstone</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Build a full-scale Real-time Fraud Detection System from scratch for your portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Breakdown */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Syllabus Breakdown</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">A deep dive into the technical modules and hands-on projects you'll master.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {chapters.map((chapter, index) => {
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
                            <span className="material-symbols-outlined text-primary text-sm mt-1">play_circle</span>
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

        {/* Testimonials */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">Engineers Who Scaled Their Careers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <span className="material-symbols-outlined text-8xl">format_quote</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      alt="Damodar Perumalla"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBreFy29w9aa-QROfssr0F32HOULwJ7xl7TSwr3hpw4KXSc28XG6qRtUwW121Xansu8X93VuiBE4aoKZG3c_tZ5x26X5IvCNqP_t8zQpwm482Z0BiDANJRyMEyrPDP4Qc6W9P7db4NHBrLSmS00gVl3I-WO_n8IBlwTJlr0THYVev710-8WHNZLkPDCBAWCGmY5LUIANrR30qm372H0C18NUcPbDAuAPJq966dhn7ZA6FvdvYOkjMBtng"
                    />
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">Damodar Perumalla</h4>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">Senior Data Engineer, Wells Fargo</p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-4">
                  "The depth of Kafka internals taught here is unparalleled. I went from handling simple cron jobs to architecting a stream-processing engine that serves 10M+ users."
                </p>
                <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-lg font-bold">123% Salary Hike</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <span className="material-symbols-outlined text-8xl">format_quote</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/30">
                    <img
                      alt="Sarah Jenkins"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwfFycgHgfiGsgcOOzC0avNFLp56QZMWarzuhXilFzJ6GzfwfM1tOZyhuRtefItsRGf2dwkQ9DPx_zuTWrBjSWVn_kKaqsC8ysqciVZHYFd2CH-nbOSI5djwe6XJy4X4nx1913K35qTF3PE-GLaTsLfZcLcUplNgiqU9LcZc4DAqQ0AB5ERkW0CokLiqG5VYUMa9gxBdoFg9hYa5MMsMRQEUwEOFpPqGYCFVRIeCzLeHqUQ7XAABkTag"
                    />
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">Sarah Jenkins</h4>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">Platform Lead, Revolut</p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-4">
                  "Finally, a course that doesn't just scratch the surface. The section on Structured Streaming and windowing helped us fix a 6-month old latency issue in one week."
                </p>
                <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-lg font-bold">Promoted to Lead</div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <span className="material-symbols-outlined text-8xl">format_quote</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      alt="Marcus Chen"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMIsZ08uO4GUyu8oy5KxPdeoxovDcbOw2kUeEdVveD462vBFK9tBEbgEOLNGFMIzl0dkkbjXxX5EIO4-icLnU1_Rt6f2oN9sIJc-ulM50t1M-V3L4VAxmk29h9EXviuZso7GnY6V4_moOjbjo0JLDJ3dIj6_5nYLK2RJ3pNoJdvxpmGZgyugQRrIX3Lf52SXbWbvGZ7unHW28Ri_iOmNoBQ_ctMfNYvNk6ZJSK6YZf8BfGJX-IAjqZ5g"
                    />
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">Marcus Chen</h4>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">Data Scientist, NVIDIA</p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic mb-4">
                  "The capstone project was the highlight. Building a fraud detection system in real-time gave me the exact experience I needed for my interview at NVIDIA."
                </p>
                <div className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-lg font-bold">FAANG Offer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Card Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-20">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-2xl relative">
            <div className="grid md:grid-cols-2">
              <div className="p-12 space-y-6">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Invest in your <br /><span className="text-primary">Mastery</span></h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check</span>
                    <span className="font-body-md text-body-md text-on-surface">Lifetime access to all modules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check</span>
                    <span className="font-body-md text-body-md text-on-surface">Private Discord Community</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check</span>
                    <span className="font-body-md text-body-md text-on-surface">Resume Review &amp; Job Referrals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check</span>
                    <span className="font-body-md text-body-md text-on-surface">Official Course Certificate</span>
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
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">FULL COURSE PRICE</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">Free</span>
                    <span className="font-body-lg text-body-lg text-on-surface-variant line-through mb-2">₹75,000</span>
                  </div>
                </div>
                <RouterLink to="/spark-kafka/workspace" className="block w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-md text-center">Complete Enrollment</RouterLink>
                <p className="font-body-md text-body-md text-on-surface-variant">Flexible payment plans available via Affirm</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Shell */}
      <HomeFooter />
    </div>
  );
}
