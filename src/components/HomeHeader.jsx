import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import olcLogo from '../assets/olc-logo.png';

/* ─── Navigation Data ─────────────────────────────────────────── */
const NAV = [
  {
    label: 'Explore Courses',
    to: '/courses',
    dropdown: null,
  },
  {
    label: 'Practice Arena',
    to: null,
    dropdown: [
      {
        icon: 'quiz',
        title: 'Exam Dumps',
        desc: 'Self-assessment quizzes & mock tests',
        to: '/courses',
      },
      {
        icon: 'work_history',
        title: 'Interview Prep',
        desc: 'Company-wise questions dashboard',
        to: '/interview-prep',
      },
      {
        icon: 'emoji_events',
        title: 'Coding Hackathons',
        desc: 'Premium & public arenas with entry puzzles',
        to: '/courses',
      },
    ],
  },
  {
    label: 'Career Hub',
    to: null,
    dropdown: [
      {
        icon: 'work',
        title: 'Job Board',
        desc: 'Postings, company lookup & quick apply',
        to: '/jobs',
      },
      {
        icon: 'trending_up',
        title: 'Alumni Placements',
        desc: 'Interactive before-after CTC visualization',
        to: '/courses',
      },
      {
        icon: 'stars',
        title: 'Success Stories',
        desc: 'Video & written testimonials',
        to: '/courses',
      },
    ],
  },
  {
    label: 'Our Story',
    to: null,
    dropdown: [
      {
        icon: 'diversity_3',
        title: 'About OLC',
        desc: 'Founders, slide-free philosophy & tech matrix',
        to: '/about',
      },
      {
        icon: 'help',
        title: 'FAQ & Support',
        desc: 'Self-serve search & categorized accordions',
        to: '/faq',
      },
    ],
  },
];

/* ─── Dropdown Menu ───────────────────────────────────────────── */
function Dropdown({ items, visible }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-outline-variant/60 rounded-2xl shadow-2xl shadow-deep-navy/10 overflow-hidden transition-all duration-200 z-50 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {/* arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-outline-variant/60 rotate-45" />
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="flex items-start gap-3 px-5 py-3.5 hover:bg-ice-blue/60 transition-colors group"
          >
            <span
              className="material-symbols-outlined text-vibrant-teal mt-0.5 group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
            >
              {item.icon}
            </span>
            <div>
              <p className="font-semibold text-deep-navy text-sm leading-snug">{item.title}</p>
              <p className="text-on-surface-variant text-xs mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── NavItem ─────────────────────────────────────────────────── */
function NavItem({ item, isActive, onMouseEnter, onMouseLeave }) {
  const isDirect = item.dropdown === null;

  const labelClass =
    'flex items-center gap-1 text-sm font-medium text-on-surface-variant hover:text-deep-navy transition-colors duration-150 cursor-pointer select-none whitespace-nowrap py-1';

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isDirect ? (
        <Link to={item.to} className={labelClass}>
          {item.label}
        </Link>
      ) : (
        <button className={`${labelClass} bg-transparent border-0 outline-none`}>
          {item.label}
          <span
            className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${isActive ? 'rotate-180 text-vibrant-teal' : ''}`}
          >
            expand_more
          </span>
        </button>
      )}

      {item.dropdown && <Dropdown items={item.dropdown} visible={isActive} />}
    </div>
  );
}

/* ─── HomeHeader ──────────────────────────────────────────────── */
export function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const timeoutRef = useRef(null);
  const profileRef = useRef(null);

  /* Scroll shadow */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close profile dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleNavEnter(label) {
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  }

  function handleNavLeave() {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 180);
  }

  return (
    <nav
      className={`bg-white/90 backdrop-blur-xl fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 shadow-md border-b border-outline-variant/40' : 'h-20 shadow-sm border-b border-outline-variant/20'
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-margin-desktop max-w-container-max mx-auto gap-8">

        {/* ── Logo ──────────────────────────────────────────── */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            alt="OLC – Online Learning Center"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-9' : 'h-12'}`}
            src={olcLogo}
          />
          {/* Text fallback (hidden when image loads) */}
          <span
            className="hidden items-center gap-1"
            style={{ display: 'none' }}
          >
            <span className="text-deep-navy font-black text-2xl tracking-tight">OLC</span>
            <span className="text-vibrant-teal font-medium text-xs leading-tight ml-1 hidden sm:block">Online<br />Learning Center</span>
          </span>
        </Link>

        {/* ── Nav Links ─────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {NAV.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={activeMenu === item.label}
              onMouseEnter={() => handleNavEnter(item.label)}
              onMouseLeave={handleNavLeave}
            />
          ))}
        </div>

        {/* ── Right Controls ────────────────────────────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-full hover:bg-ice-blue transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-gold rounded-full border-2 border-white" />
          </button>

          {/* Login */}
          <button className="hidden sm:block text-on-surface-variant hover:text-deep-navy font-medium text-sm px-3 py-2 rounded-lg hover:bg-ice-blue transition-all">
            Login
          </button>

          {/* CTA */}
          <button className="hidden sm:block bg-deep-navy text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-vibrant-teal transition-all active:scale-95 shadow-sm">
            Hire Talents
          </button>

          {/* Profile Avatar + Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((o) => !o)}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-outline-variant hover:border-vibrant-teal transition-all group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img
                  alt="User profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR7eso9DoOqwDnzHTBLPH0vrs6lFwR0GPAN4UsIGjGy1PDaHJlYrckQUA7udRLOx1nVdMVczFZz775a4NKI8a6mlXNGDQrVS4sE9NrU-Y-Apu5RXtVcFjaDPFqXD9zjcyEITSA0SBu_Xuv1ezffJAabIEfm_SP6GKl7AGvIaaVLcZ3XxX-iUmKWHiPVQhygQAlcVHfOzg2a4oCnG1y1ilMNhO_-Y5rSJCyy0yKkJeTHhrmo_UtUG4a0gNcyHvI_8MpGy9GoJKHiI43"
                />
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-deep-navy transition-colors">
                {profileOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {/* Profile dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-outline-variant/60 rounded-2xl shadow-2xl shadow-deep-navy/10 overflow-hidden z-50">
                <div className="px-5 py-4 border-b border-outline-variant/40 bg-ice-blue/30">
                  <p className="font-bold text-deep-navy text-sm">Student Account</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">student@olc.dev</p>
                </div>
                {[
                  { icon: 'person', label: 'My Profile', to: '/dashboard' },
                  { icon: 'school', label: 'My Courses', to: '/dashboard' },
                  { icon: 'workspace_premium', label: 'Go Premium', to: null },
                  { icon: 'settings', label: 'Settings', to: null },
                ].map((item) =>
                  item.to ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setProfileOpen(false)}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-ice-blue/50 transition-colors text-sm text-on-surface-variant hover:text-deep-navy"
                    >
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-ice-blue/50 transition-colors text-sm text-on-surface-variant hover:text-deep-navy"
                    >
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      {item.label}
                    </button>
                  )
                )}
                <div className="border-t border-outline-variant/40">
                  <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 transition-colors text-sm text-error hover:text-red-700">
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2 rounded-lg hover:bg-ice-blue transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

      </div>
    </nav>
  );
}
