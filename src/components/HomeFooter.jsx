import { Link } from 'react-router-dom';
import olcLogo from '../assets/olc-logo.png';

export function HomeFooter() {
  return (
    <footer className="bg-deep-navy text-surface-bright py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="space-y-6">
          <Link to="/">
            <img
              alt="Logo"
              className="h-10 object-contain brightness-0 invert"
              src={olcLogo}
            />
          </Link>
          <p className="text-surface-container-highest/60 text-sm">
            Online Learning Center (OLC) is India's premier institute for dedicated Big Data and Data Engineering training. Engineering excellence since 2015.
          </p>
          <div className="flex gap-4">
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-gold hover:text-deep-navy transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-gold hover:text-deep-navy transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">smart_display</span>
            </a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-gold hover:text-deep-navy transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-amber-gold font-bold font-headline-md text-sm uppercase tracking-widest">Company</h5>
          <ul className="space-y-4 text-sm text-surface-container-highest/80">
            <li><Link className="hover:text-amber-gold transition-colors" to="/about">About Us</Link></li>
            <li><a className="hover:text-amber-gold transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-amber-gold transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-amber-gold transition-colors" href="#">Refund Policy</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-amber-gold font-bold font-headline-md text-sm uppercase tracking-widest">Support</h5>
          <ul className="space-y-4 text-sm text-surface-container-highest/80">
            <li><Link className="hover:text-amber-gold transition-colors" to="/faq">FAQ &amp; Support</Link></li>
            <li><a className="hover:text-amber-gold transition-colors" href="#">Contact Support</a></li>
            <li><Link className="hover:text-amber-gold transition-colors" to="/interview-prep">Interview Prep</Link></li>
            <li><Link className="hover:text-amber-gold transition-colors" to="/jobs">Job Board</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-amber-gold font-bold font-headline-md text-sm uppercase tracking-widest">Newsletter</h5>
          <p className="text-sm text-surface-container-highest/60">Get updates on new courses and industry insights.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-white/10 border-0 rounded-l-lg p-3 text-sm flex-grow focus:ring-1 focus:ring-amber-gold outline-none text-white" placeholder="Email address" type="email" required />
            <button className="bg-amber-gold text-deep-navy px-4 py-3 rounded-r-lg font-bold" type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 text-center px-margin-desktop max-w-container-max mx-auto">
        <p className="text-xs text-surface-container-highest/40">© 2024 DataMastery Institute. All rights reserved. Engineering Excellence.</p>
      </div>
    </footer>
  );
}
