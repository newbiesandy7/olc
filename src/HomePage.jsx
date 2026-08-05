import { Link } from 'react-router-dom';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';
import { CatalogCard } from './components/Cards';
import { freeFundamentals, premiumSpecializations } from './catalogData';

export default function HomePage() {
  return (
    <div className="bg-surface-bright font-body-md text-on-surface">
      <HomeHeader />

      {/* ── Hero Section ─────────────────────────────────────── */}
      <header className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">

        {/* Light background */}
        <div className="absolute inset-0 bg-surface-bright" />

        {/* Animated gradient orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00b4d8 0%, transparent 70%)', animation: 'pulse 8s ease-in-out infinite' }} />
        <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #f4b942 0%, transparent 70%)', animation: 'pulse 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', animation: 'pulse 6s ease-in-out infinite 1s' }} />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Horizontal glow line */}
        <div className="absolute top-[50%] left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #00b4d8, #f4b942, transparent)' }} />

        <style>{`
          @keyframes pulse { 0%,100%{transform:scale(1);opacity:0.15} 50%{transform:scale(1.12);opacity:0.25} }
          @keyframes floatUp { 0%{transform:translateY(0px)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0px)} }
          @keyframes slideRight { 0%{width:0%} 100%{width:100%} }
          @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
          .hero-text { animation: fadeInUp 0.7s ease-out both; }
          .hero-text-2 { animation: fadeInUp 0.7s ease-out 0.15s both; }
          .hero-text-3 { animation: fadeInUp 0.7s ease-out 0.3s both; }
          .hero-text-4 { animation: fadeInUp 0.7s ease-out 0.45s both; }
          .hero-card { animation: fadeInUp 0.8s ease-out 0.2s both; }
          .float-card { animation: floatUp 5s ease-in-out infinite; }
        `}</style>

        <div className="relative max-w-container-max mx-auto px-margin-desktop w-full py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div className="space-y-8">

              {/* Trust pill */}
              {/* <div className="hero-text inline-flex items-center gap-2.5 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Batch 2026 · Limited Seats Open
              </div> */}

              {/* Headline */}
              <div className="hero-text-2 space-y-2">
                <p className="text-slate-500 text-lg font-medium tracking-wide">Want to become a</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-deep-navy">
                  Data{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f4b942 0%, #ff8c00 50%, #f4b942 100%)' }}>
                      Engineer
                    </span>
                    {/* Underline glow */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full" style={{ background: 'linear-gradient(90deg, #f4b942, #ff8c00)' }} />
                  </span>
                  <br />
                  <span className="text-deep-navy/90">in 2026</span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="hero-text-3 text-slate-gray text-lg leading-relaxed max-w-lg">
                Master <span className="text-deep-navy font-semibold">Spark, Kafka, Airflow & cloud-native pipelines</span> with India's most placement-focused Big Data program. No slides. Only systems.
              </p>

              {/* Tech stack badges */}
              <div className="hero-text-3 flex flex-wrap gap-2">
                {['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Scala', 'AWS'].map((tech) => (
                  <span key={tech} className="bg-white border border-outline-variant/40 text-slate-gray text-xs font-semibold px-3 py-1.5 rounded-full hover:border-vibrant-teal/40 hover:text-vibrant-teal transition-all cursor-default shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="hero-text-4 flex flex-wrap gap-4 pt-2">
                <Link
                  to="/courses"
                  className="group relative inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-base overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #f4b942, #ff8c00)' }}
                >
                  <span className="relative z-10 text-deep-navy flex items-center gap-2">
                    Evaluate your Profile
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </Link>
                <Link
                  to="/de2"
                  className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-base text-deep-navy border border-outline-variant/60 bg-white hover:bg-ice-blue transition-all shadow-sm"
                >
                  Download Syllabus
                  <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">download</span>
                </Link>
              </div>

              {/* Social proof stats */}
              <div className="hero-text-4 flex gap-8 pt-2 border-t border-outline-variant/30">
                {[
                  { value: '2,400+', label: 'Graduates placed' },
                  { value: '₹32 LPA', label: 'Avg. package' },
                  { value: '9.4/10', label: 'Student rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-deep-navy">{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Right: Visual ── */}
            <div className="hero-card relative flex items-center justify-center">

              {/* Floating glow behind card */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #00b4d8 0%, transparent 70%)' }} />

              <div className="relative w-full float-card">
                {/* Main video card */}
                <div className="relative rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl bg-white">

                  <div className="aspect-video relative overflow-hidden rounded-2xl m-3 group">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      alt="Data engineering workspace"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG7VsL8mO_UzwjHhVpFvzFnWJN0i86c1vhmFhXjYEZm9vFTFABl4QZjMy9xvkX_X7AaHq7YYFawAjRxZ9Px2H-v3NCEerkgiZoeMUkFp1SB8sk4nIsdGRvqhTcTkYbdn9MaAEbCGHoL8iUgnvL3935Ndueqbo6-LlNIIBcevwyV1RWl_TohRWh8hLiYduOuTzf2GZqXHP1VksUlJ88Mm5swdPfpdvZjege4XrwVnI4ZyFw-99SiuLRJNtfflQr0u5vFdN8E7cGKJLT"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group/play relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-all"
                        style={{ background: 'linear-gradient(135deg, #f4b942, #ff8c00)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#f4b942' }} />
                        <span className="material-symbols-outlined text-[42px] text-white relative z-10 group-hover/play:scale-110 transition-transform"
                          style={{ fontVariationSettings: "'FILL' 1" }}>
                          play_arrow
                        </span>
                      </button>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                      <p className="text-white font-bold text-sm">Live session: Real-time Kafka Pipeline →</p>
                      <p className="text-white/80 text-xs mt-0.5">Instructor: Kalfa Singh · 32 watching now</p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="px-5 pb-4 pt-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {['#f4b942', '#00b4d8', '#4f46e5'].map((c, i) => (
                          <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                            style={{ backgroundColor: c }}>
                            {['K', 'A', 'S'][i]}
                          </div>
                        ))}
                      </div>
                      <span className="text-slate-gray text-xs font-medium">+180 enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                      <span className="text-slate-gray text-xs font-medium ml-1">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-green-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-deep-navy leading-tight">30-Day Guarantee</p>
                    <p className="text-[10px] text-slate-500">Full refund, no questions</p>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#f4b942,#ff8c00)' }}>
                    <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-deep-navy leading-tight">Avg. 3× salary hike</p>
                    <p className="text-[10px] text-slate-500">Across 2024–25 batches</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Placement Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">Engineering Placements</h2>
              <p className="text-slate-gray font-body-md">Witness the transition from traditional roles to core Data Engineering.</p>
            </div>
            <Link to="/courses" className="text-vibrant-teal font-bold flex items-center gap-1 hover:gap-3 transition-all">
              View All Stories <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="border border-outline-variant/30 rounded-xl p-6 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-ice-blue p-3 rounded-lg text-vibrant-teal">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <span className="bg-on-secondary-container/10 text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">123% Hike</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-gray">Previous: Support</span>
                  <span className="font-bold text-deep-navy">2.4 LPA</span>
                </div>
                <div className="h-1.5 w-full bg-ice-blue rounded-full overflow-hidden">
                  <div className="h-full bg-vibrant-teal w-1/4 group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-vibrant-teal font-bold">Current: Data Engineer</span>
                  <span className="font-bold text-deep-navy">14.5 LPA</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-4 italic mb-4">"She had to leave her job due to office Politics and in the next 2 months she cracked 6 Job offers with 14.5 LPA..."</p>
              <a className="inline-flex items-center gap-2 text-deep-navy text-xs font-bold hover:text-vibrant-teal" href="#">
                <img
                  alt="LinkedIn"
                  className="w-4 h-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrTkk2RR-UN14ksOrC0naVhT4WibMmfNenz6kfw_Ok1o0IQbRLMzV6lnIfOAM-SHP91ym6Nr7ZUgDzVv8KWbjzZgvTOPkoUrDvxy0M9DfYnhxm3SpgvTlCNXHoWWcI7C93SUtm7Ps34ow36dwwyzZn4FXrw6neoCsWzZde3_yim917SN8aXp8EXeEncKkEdY-BaGp8bUtdSt0jB7fLyLNfASs8sxZZ9fPAksHbzz_Hv2NO0Kvo2jAi56OYdkZAeyeZYIoTLJzMTOY8"
                />
                READ FULL STORY
              </a>
            </div>
            {/* Card 2 */}
            <div className="border border-outline-variant/30 rounded-xl p-6 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-ice-blue p-3 rounded-lg text-vibrant-teal">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="bg-on-secondary-container/10 text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">50% Hike</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-gray">Previous: SQL Dev</span>
                  <span className="font-bold text-deep-navy">20 LPA</span>
                </div>
                <div className="h-1.5 w-full bg-ice-blue rounded-full overflow-hidden">
                  <div className="h-full bg-vibrant-teal w-2/3 group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-vibrant-teal font-bold">Current: Data Engineer</span>
                  <span className="font-bold text-deep-navy">30 LPA</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-4 italic mb-4">"He immediately resigned with no offer in hand. But was able to land up with a job of 30 LPA before the Notice Period."</p>
              <a className="inline-flex items-center gap-2 text-deep-navy text-xs font-bold hover:text-vibrant-teal" href="#">
                <img
                  alt="LinkedIn"
                  className="w-4 h-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEA_hLlKrnekpW49CWraYTz16U4rsifH83o-PwRA_Q9keMwy5nDMamJvE6ci0KXRKuN7zI2GFk_v8tJrMMHjBZtpZvpnvGkMIdJ0WIcsvRecdlPvwgpHWUddelc61MEYwkiEALH9gafs_VDsBCBn3fh7rW-TbiCS7PZSmKMA9o0wSGjFw7lbw-vsUa6suzKOyJDEiO9FyWhNwLO_lyDAI5ZB3qpw4i9wwvZqYGMov-8xoszCpEgOf8lE6spkwFn-GGKvd_XDzyHFmW"
                />
                READ FULL STORY
              </a>
            </div>
            {/* Card 3 */}
            <div className="border border-outline-variant/30 rounded-xl p-6 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-ice-blue p-3 rounded-lg text-vibrant-teal">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="bg-on-secondary-container/10 text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">92% Hike</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-gray">Previous: QA Engineer</span>
                  <span className="font-bold text-deep-navy">12.2 LPA</span>
                </div>
                <div className="h-1.5 w-full bg-ice-blue rounded-full overflow-hidden">
                  <div className="h-full bg-vibrant-teal w-1/2 group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-vibrant-teal font-bold">Current: Data Engineer</span>
                  <span className="font-bold text-deep-navy">23.5 LPA</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-4 italic mb-4">"After Working on Testing for almost 8 Years, rest is the History."</p>
              <a className="inline-flex items-center gap-2 text-deep-navy text-xs font-bold hover:text-vibrant-teal" href="#">
                <img
                  alt="LinkedIn"
                  className="w-4 h-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVDsR0_5r9Xa4L2cBvGQxdNkhTIxVteVDc7kjNgL9xBzRS0qU3mYk2i7GxUgXoT03pu9MWdbF5K09YNR1qD6ffWkeEosGws7hbCd0-pXO_7yVRIc3wHLTBiQoPYe0nBJxNry0W1LsJGBlZNCvFJtjP0izg9Hx776f5leFaONxfGlsmNJxz9cn_f21CnN0ct1SNdptDDpX0D4ObPrPvVGmWT9RFfmcVIm6CGdZwDs7NUHkUosaaX2hP75aOvp0iHsm0_RzrZLA4JDwq"
                />
                READ FULL STORY
              </a>
            </div>
            {/* Card 4 */}
            <div className="border border-outline-variant/30 rounded-xl p-6 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-ice-blue p-3 rounded-lg text-vibrant-teal">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <span className="bg-on-secondary-container/10 text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">169% Hike</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-gray">Previous: Data Eng</span>
                  <span className="font-bold text-deep-navy">6.5 LPA</span>
                </div>
                <div className="h-1.5 w-full bg-ice-blue rounded-full overflow-hidden">
                  <div className="h-full bg-vibrant-teal w-1/3 group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-vibrant-teal font-bold">Current: Data Engineer</span>
                  <span className="font-bold text-deep-navy">17.5 LPA</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-4 italic mb-4">"He was able to crack 7 Job Offers Amazing Pay Package after his DE2 Program."</p>
              <a className="inline-flex items-center gap-2 text-deep-navy text-xs font-bold hover:text-vibrant-teal" href="#">
                <img
                  alt="LinkedIn"
                  className="w-4 h-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwat4jop56maK1l5OKxQXxUNW0eWZ6Od-DbMhjRtssEFA8hsKGJisowK_JL8wlYZsBTjGr3D9m8_qPbsQkbMLrtw8fSaafiJlxd1KcIEbMr5dsFwMqijeNPwBtuB2H5GcZB7UhKXZZVzJBEmPnhrr98PLnDKBbgj17MJ80oKLampIc7Qq6qCjj1_eQrUiWm8gWrfPlg5qSqW1dzhL6Da8qurtRImKV6xibQkBV_EoCGrcSCwrqrSk4-suRX4fREcOj7YtU3VHaAuDh"
                />
                READ FULL STORY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Master Programs */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Our Master Programs</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">Structured curriculum designed to take you from foundational basics to advanced architectural patterns.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* DE1 Card */}
            <div className="lg:col-span-5 glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-deep-navy p-8 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-caps tracking-widest text-amber-gold">FOR NON-PROGRAMMERS</span>
                  <span className="text-white/60 font-bold">165 Hours</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2">DE1 (BigData)</h3>
                <p className="text-white/70 text-sm">The perfect entry point for those transitioning into the data ecosystem.</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">JV</span>
                    <span className="text-sm">Java: 85h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">HD</span>
                    <span className="text-sm">Hadoop: 12h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">HV</span>
                    <span className="text-sm">Hive: 20h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">SQ</span>
                    <span className="text-sm">Sqoop: 05h</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-teal text-[18px]">check_circle</span>
                    1 Real-time Capstone Project
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-teal text-[18px]">check_circle</span>
                    Whiteboard Learning Methodology
                  </li>
                </ul>
                <Link to="/courses" className="block text-center w-full py-4 bg-deep-navy text-white font-bold rounded-lg hover:bg-vibrant-teal transition-all">
                  Go to Course
                </Link>
              </div>
            </div>

            {/* Comparison Middle Section */}
            <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center gap-4">
              <div className="h-1/3 w-px bg-gradient-to-b from-transparent via-outline-variant to-transparent"></div>
              <div className="bg-white border-2 border-vibrant-teal/20 p-4 rounded-full shadow-lg">
                <span className="text-deep-navy font-black italic">VS</span>
              </div>
              <div className="h-1/3 w-px bg-gradient-to-t from-transparent via-outline-variant to-transparent"></div>
            </div>

            {/* DE2 Card */}
            <div className="lg:col-span-5 glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-vibrant-teal p-8 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-caps tracking-widest text-white/90">ADVANCED ENGINEERING</span>
                  <span className="text-white/60 font-bold">136 Hours</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2">DE-2 (Adv BigData)</h3>
                <p className="text-white/70 text-sm">Master production-grade streaming and cloud architecture.</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">SC</span>
                    <span className="text-sm">Scala: 57h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">SP</span>
                    <span className="text-sm">Spark: 53h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">KF</span>
                    <span className="text-sm">Kafka: 11h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-ice-blue flex items-center justify-center text-vibrant-teal font-bold text-xs">AW</span>
                    <span className="text-sm">AWS: LIVE</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-teal text-[18px]">check_circle</span>
                    4 Enterprise Level Projects
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-teal text-[18px]">check_circle</span>
                    Advanced DSA for Data Engineers
                  </li>
                </ul>
                <Link to="/de2" className="block text-center w-full py-4 bg-vibrant-teal text-white font-bold rounded-lg hover:bg-deep-navy transition-all">
                  Go to Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OLC Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy text-center mb-16">Why Should You Learn at OLC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">school</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">230+ Hours Content</h4>
              <p className="text-sm text-on-surface-variant">Created from 9+ years of real-time experience in high-end data engineering projects.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">code</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">100+ Hours Programming</h4>
              <p className="text-sm text-on-surface-variant">In-depth Java and Scala training focused on building scalable data products.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">currency_rupee</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">Easy EMI Payment</h4>
              <p className="text-sm text-on-surface-variant">No auto-debit traps. Pay monthly with full control over your finances.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">work_history</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">Real Projects</h4>
              <p className="text-sm text-on-surface-variant">No dummy datasets. Solve the exact problems our mentors solved in their industrial roles.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">draw</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">Whiteboard Sessions</h4>
              <p className="text-sm text-on-surface-variant">We hate PPT shows. Every concept is drawn and explained live from scratch.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-8 border border-ice-blue rounded-2xl hover:border-vibrant-teal/30 hover:bg-ice-blue/20 transition-all">
              <span className="material-symbols-outlined text-vibrant-teal text-[32px] mb-4">verified</span>
              <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">30-Day Guarantee</h4>
              <p className="text-sm text-on-surface-variant">Risk-free trial. If the quality doesn't match your expectations, get a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-vibrant-teal/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                alt="Suraj Ghimire"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                src="/mentor.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-gold text-deep-navy p-6 rounded-xl shadow-xl">
              <div className="font-black text-4xl">12+</div>
              <div className="font-bold text-sm">Years Exp.</div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-2">Meet Your Mentor</h2>
              <h3 className="text-amber-gold font-headline-md text-headline-md">Suraj Ghimire</h3>
            </div>
            <p className="text-on-primary-container font-body-lg">
              A visionary Data Engineering leader and founder of OLC. Currently managing IT-Cloud ecosystems in the USA, Suraj brings a decade of hard-earned production knowledge to the classroom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-gold">verified</span>
                <p className="text-sm">Sun Certified &amp; Snow Pro Certified Programmer</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-gold">groups</span>
                <p className="text-sm">Mentored 1000+ students since 2015</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-gold">engineering</span>
                <p className="text-sm">9+ Years Core Data Engineering</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-gold">location_on</span>
                <p className="text-sm">Manager IT-Cloud, USA Based</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Lists */}
      <section className="py-24 bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          {/* Free Courses */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">Free Fundamentals</h2>
              <Link to="/courses" className="bg-white border border-outline text-deep-navy px-6 py-2 rounded-lg font-bold hover:bg-ice-blue transition-all">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {freeFundamentals.map((course) => (
                <CatalogCard key={course.title} course={course} />
              ))}
            </div>
          </div>

          {/* Premium Courses */}
          <div>
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">Premium Specializations</h2>
              <Link to="/courses" className="bg-white border border-outline text-deep-navy px-6 py-2 rounded-lg font-bold hover:bg-ice-blue transition-all">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {premiumSpecializations.map((course) => (
                <CatalogCard key={course.title} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-y border-outline-variant/10 overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-margin-desktop mb-12">
          <p className="text-center text-slate-gray font-label-caps">OUR STUDENTS WORK AT WORLD'S LEADING COMPANIES</p>
        </div>
        <div className="relative w-full overflow-hidden flex">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-marquee opacity-50 grayscale hover:grayscale-0 transition-all duration-300 items-center">
            {/* Set 1 */}
            <div className="flex gap-12 px-6 items-center">
              <span className="font-black text-2xl text-deep-navy">IBM</span>
              <span className="font-black text-2xl text-deep-navy">WALMART</span>
              <span className="font-black text-2xl text-deep-navy">DELOITTE</span>
              <span className="font-black text-2xl text-deep-navy">ACCENTURE</span>
              <span className="font-black text-2xl text-deep-navy">INFOSYS</span>
              <span className="font-black text-2xl text-deep-navy">WELLS FARGO</span>
            </div>
            {/* Set 2 */}
            <div className="flex gap-12 px-6 items-center">
              <span className="font-black text-2xl text-deep-navy">IBM</span>
              <span className="font-black text-2xl text-deep-navy">WALMART</span>
              <span className="font-black text-2xl text-deep-navy">DELOITTE</span>
              <span className="font-black text-2xl text-deep-navy">ACCENTURE</span>
              <span className="font-black text-2xl text-deep-navy">INFOSYS</span>
              <span className="font-black text-2xl text-deep-navy">WELLS FARGO</span>
            </div>
            {/* Set 3 */}
            <div className="flex gap-12 px-6 items-center">
              <span className="font-black text-2xl text-deep-navy">IBM</span>
              <span className="font-black text-2xl text-deep-navy">WALMART</span>
              <span className="font-black text-2xl text-deep-navy">DELOITTE</span>
              <span className="font-black text-2xl text-deep-navy">ACCENTURE</span>
              <span className="font-black text-2xl text-deep-navy">INFOSYS</span>
              <span className="font-black text-2xl text-deep-navy">WELLS FARGO</span>
            </div>
            {/* Set 4 */}
            <div className="flex gap-12 px-6 items-center">
              <span className="font-black text-2xl text-deep-navy">IBM</span>
              <span className="font-black text-2xl text-deep-navy">WALMART</span>
              <span className="font-black text-2xl text-deep-navy">DELOITTE</span>
              <span className="font-black text-2xl text-deep-navy">ACCENTURE</span>
              <span className="font-black text-2xl text-deep-navy">INFOSYS</span>
              <span className="font-black text-2xl text-deep-navy">WELLS FARGO</span>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            width: fit-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <HomeFooter />
    </div>
  );
}
