import { useEffect } from 'react';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { siteNavLinks } from './siteNav';

const philosophyCards = [
  {
    icon: 'draw',
    title: 'Whiteboard First',
    copy: 'We believe in logic over memorization. Every complex system is broken down on a blank canvas before a single line of code is written.'
  },
  {
    icon: 'cancel_presentation',
    title: 'Strictly No PPTs',
    copy: 'Death by PowerPoint is real. We teach through live-coding, architectural debates, and real-time debugging. It is raw, messy, and real.'
  },
  {
    icon: 'package_2',
    title: 'Production Grade',
    copy: 'Hello World projects do not get you hired. Our curriculum focuses on CI/CD, scalability, and robust error handling from day one.'
  }
];

const values = [
  'Radical Transparency',
  'Uncompromising Quality',
  'Student Obsession',
  'Global Standards'
];

export default function AboutPage() {
  useEffect(() => {
    const nav = document.querySelector('[data-site-header]');

    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle('shadow-md', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-surface-bright text-on-surface font-body-md overflow-x-hidden">
      <SiteHeader links={siteNavLinks} />
      <main className="pt-20">
        <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-caps text-label-caps uppercase tracking-widest">Our Genesis</span>
              <h1 className="font-display-xl text-display-xl text-deep-navy leading-tight">Engineering Excellence Through Hands-On Mastery</h1>
              <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl">
                Founded by Suraj Ghimire, DataMastery was born from a singular frustration: the gap between academic theory and production-level reality. We do not just teach syntax; we build the architectural mindset required for high-performance data systems.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-vibrant-teal">5000+</span>
                  <span className="font-label-caps text-label-caps text-slate-gray">Engineers Trained</span>
                </div>
                <div className="w-px h-12 bg-outline-variant"></div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-vibrant-teal">98%</span>
                  <span className="font-label-caps text-label-caps text-slate-gray">Career Transition</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-gold/10 rounded-full blur-3xl -z-10"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Coding Workspace"
                  className="w-full h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxGv4cb0QRWYlX02FaW25GZNQHY91YtspOt3aNCYiHCATCriV1eINWez7SpBiTsXB6T8AMQSfeUMnRPOG05O1vkuNdnttkOJ4wDY7sHaJQ3x3coCRmDMLvADxTzS-XyFTaIQSfA9BWfvjDL34AWfhjsZ7cmLyTj0-uroNUhDdAHHQ92R1apmGHPo425_ipaEjJYx1NnEIfS950UVnTCLIaVKL8IsumIQ3-ZRmO4eMtFzJ3jictq32WSNtj8PKt8q1miP_GK9Vx6Dz"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ice-blue py-20">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">The DataMastery Philosophy</h2>
              <p className="font-body-md text-body-md text-slate-gray mt-4">Breaking the mold of traditional ed-tech with a focus on raw engineering.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {philosophyCards.map((card) => (
                <div key={card.title} className="glass-card p-8 rounded-xl hover:translate-y-[-8px] transition-transform duration-300">
                  <div className="w-12 h-12 bg-vibrant-teal/10 text-vibrant-teal rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">{card.title}</h3>
                  <p className="text-slate-gray">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-gold rounded-xl rotate-3 group-hover:rotate-1 transition-transform"></div>
                <img
                  alt="Suraj Ghimire"
                  className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                  src="/mentor.jpg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-deep-navy">Meet Suraj Ghimire</h2>
                <p className="font-body-lg text-body-lg text-slate-gray italic font-medium">"My mission is to democratize high-end engineering education without the fluff."</p>
              </div>
              <div className="space-y-6 text-slate-gray font-body-md text-body-md">
                <p>With over a decade of experience in building petabyte-scale data pipelines for Fortune 500 companies, Suraj realized that most online courses only scratch the surface of engineering problems.</p>
                <p>He founded DataMastery to mentor the next generation of data engineers through a rigorous, project-heavy methodology that mirrors the challenges of a senior-level role at top tech firms.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 border-l-4 border-amber-gold bg-surface-container-low">
                  <p className="font-bold text-deep-navy">Ex-Tech Lead</p>
                  <p className="text-sm">Big Data Systems</p>
                </div>
                <div className="p-4 border-l-4 border-vibrant-teal bg-surface-container-low">
                  <p className="font-bold text-deep-navy">Open Source</p>
                  <p className="text-sm">Active Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-deep-navy text-white">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-headline-lg text-amber-gold">Our Core Values</h2>
                <p className="text-surface-container-highest/70 mt-4">We are defined by the standards we keep. Our commitments to our students are non-negotiable.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {values.map((value, index) => (
                <div key={value} className="space-y-4 border-t border-white/10 pt-8">
                  <span className="text-amber-gold font-bold">0{index + 1}</span>
                  <h4 className="font-headline-md text-headline-md">{value}</h4>
                  <p className="text-sm text-surface-container-highest/60">
                    {index === 0 && 'No hidden fees, no exaggerated placement claims. Just honest data and real results.'}
                    {index === 1 && 'Every course module is vetted by industry experts before it reaches a student.'}
                    {index === 2 && 'Your career trajectory is our primary metric of success. We support you long after graduation.'}
                    {index === 3 && 'We teach technologies used in Silicon Valley and high-performance tech hubs worldwide.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-margin-desktop text-center">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl border-2 border-vibrant-teal/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-[160px]">school</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6">Ready to Master Production-Level Code?</h2>
            <p className="font-body-lg text-body-lg text-slate-gray mb-10 max-w-2xl mx-auto">Join the ranks of elite engineers. Our next cohort starts soon. Limited seats for personalized mentoring.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a className="px-10 py-4 bg-deep-navy text-white rounded-lg font-bold hover:bg-slate-gray transition-all shadow-lg scale-95 active:scale-90" href="/courses">
                Browse Courses
              </a>
              <a className="px-10 py-4 border-2 border-deep-navy text-deep-navy rounded-lg font-bold hover:bg-ice-blue transition-all scale-95 active:scale-90" href="/de2">
                Talk to Mentor
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
