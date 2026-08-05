import { useState, useMemo } from 'react';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';

const FAQ_DATA = [
  {
    category: 'General & Enrolment',
    question: 'What are the prerequisites for joining OLC courses?',
    answer: 'Basic programming knowledge in Java, Scala, or Python along with foundational SQL concepts is recommended. For advanced courses like DE2, 1-2 years of software or data experience is preferred.'
  },
  {
    category: 'General & Enrolment',
    question: 'How are live classes structured and what happens if I miss one?',
    answer: 'All cohort sessions are live instructor-led over HD Zoom. High-definition recordings, lecture notes, and lab repositories are uploaded to your student portal within 2 hours after each session.'
  },
  {
    category: 'General & Enrolment',
    question: 'Do I get lifetime access to course materials?',
    answer: 'Yes! Once enrolled, you receive lifetime access to all lecture recordings, GitHub code repositories, architecture diagrams, and community Discord channels.'
  },
  {
    category: 'Curriculum & Tech',
    question: 'Do I get access to live cloud environments (AWS/GCP)?',
    answer: 'Absolutely. All students receive dedicated credentials with pre-budgeted cloud credits for live AWS EMR, MSK, S3, and Databricks sandbox environments.'
  },
  {
    category: 'Curriculum & Tech',
    question: 'What version of Apache Spark and Kafka are taught?',
    answer: 'We cover Spark 3.4+ (Tungsten, AQE, Connect), Kafka 3.5+ (KRaft mode & Zookeeper), Flink 1.17+, and Scala 3 / Python 3.11.'
  },
  {
    category: 'Curriculum & Tech',
    question: 'How are capstone projects evaluated?',
    answer: 'Your project PRs are reviewed 1-on-1 by senior data architects from FAANG and unicorn tech companies with detailed feedback on code quality, scalability, and system design.'
  },
  {
    category: 'Careers & Placements',
    question: 'How does OLC help with placement and career advancement?',
    answer: 'We provide dedicated resume polishing, 1-on-1 system design mock interviews, direct referrals to our 50+ hiring partner companies, and alumni network access.'
  },
  {
    category: 'Careers & Placements',
    question: 'What salary increase can I expect after completing the program?',
    answer: 'Our alumni report an average CTC increase of 110%-140% when transitioning into Data Engineer, Senior Data Architect, or Streaming Lead roles.'
  },
  {
    category: 'Payments & Guarantees',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer an unconditional 30-day money-back guarantee. If you feel the program is not the right fit within the first 30 days, we issue a 100% full refund with no questions asked.'
  },
  {
    category: 'Payments & Guarantees',
    question: 'Are flexible no-cost EMI options available?',
    answer: 'Yes, we partner with leading financial providers to offer zero-cost EMI plans for 3, 6, 9, or 12 months with instant approval.'
  }
];

const CATEGORIES = ['All Questions', 'General & Enrolment', 'Curriculum & Tech', 'Careers & Placements', 'Payments & Guarantees'];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = activeCategory === 'All Questions' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen">
      <HomeHeader />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 bg-surface-container-lowest border-b border-outline-variant/40">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container border border-primary/20">
              <span className="material-symbols-outlined text-[18px]">help</span>
              <span className="font-label-caps text-label-caps uppercase">HELP &amp; SUPPORT CENTER</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mx-auto leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Have questions about our cohorts, cloud labs, curriculum, or career assistance? Find detailed answers below or reach out to our admissions team.
            </p>

            {/* Instant Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-2xl">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by keyword (e.g. AWS, refund, Spark, placements)..."
                  className="w-full pl-12 pr-10 py-4 bg-surface border border-outline-variant rounded-2xl text-base text-on-surface shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs & FAQ Accordion Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                    isActive
                      ? 'bg-primary text-on-primary border-primary shadow-sm'
                      : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-on-surface'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordions List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-outline-variant rounded-2xl overflow-hidden bg-surface-container-lowest hover:border-primary/50 transition-all shadow-xs"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-2xl">help_outline</span>
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                            {faq.category}
                          </span>
                          <h3 className="font-bold text-lg text-on-surface">{faq.question}</h3>
                        </div>
                      </div>
                      <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-outline-variant/30 text-on-surface-variant text-base leading-relaxed bg-surface-container-lowest/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-12 text-center space-y-4">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">search_off</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">No questions matched your search</h3>
                <p className="text-sm text-on-surface-variant">Try searching for alternative keywords or clear your category selection.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All Questions');
                  }}
                  className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support CTA Box */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-12">
          <div className="max-w-4xl mx-auto bg-deep-navy text-white rounded-3xl p-10 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="material-symbols-outlined text-5xl text-amber-gold">headset_mic</span>
              <h2 className="font-headline-lg text-headline-lg font-bold">Still have questions?</h2>
              <p className="text-white/80 max-w-xl mx-auto text-base">
                Our admissions counselors and technical mentors are online to help you choose the best learning track for your career.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="mailto:admissions@olc.dev" className="bg-amber-gold text-deep-navy px-8 py-3.5 rounded-xl font-bold hover:brightness-105 transition-all shadow-md active:scale-95">
                  Email Admissions
                </a>
                <a href="https://discord.gg" target="_blank" rel="noreferrer" className="border border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold transition-all active:scale-95">
                  Join Discord Community
                </a>
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vibrant-teal/20 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
