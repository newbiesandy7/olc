import { useState, useMemo } from "react";
import { HomeHeader } from "./components/HomeHeader";
import { HomeFooter } from "./components/HomeFooter";

const SEED_JOBS = [
  { id: 1, company: "Flipkart", logo: "F", logoColor: "#2874f0", role: "Senior Data Engineer", location: "Bengaluru, India", type: "Full-time", salary: "₹32–45 LPA", tags: ["Spark", "Kafka", "Scala"], posted: "2 days ago", badge: "Hot", badgeColor: "bg-red-100 text-red-600" },
  { id: 2, company: "Swiggy", logo: "S", logoColor: "#fc8019", role: "Data Platform Engineer", location: "Bengaluru, India", type: "Full-time", salary: "₹28–38 LPA", tags: ["Flink", "Kafka", "Python"], posted: "3 days ago", badge: "Actively Hiring", badgeColor: "bg-green-100 text-green-700" },
  { id: 3, company: "PhonePe", logo: "P", logoColor: "#5f259f", role: "Staff Engineer – Data Infra", location: "Bengaluru, India", type: "Full-time", salary: "₹50–70 LPA", tags: ["Spark", "Presto", "Kubernetes"], posted: "1 week ago", badge: "Premium", badgeColor: "bg-amber-100 text-amber-700" },
  { id: 4, company: "Meesho", logo: "M", logoColor: "#f43397", role: "Analytics Engineer", location: "Remote", type: "Remote", salary: "₹18–26 LPA", tags: ["dbt", "BigQuery", "Airflow"], posted: "5 days ago", badge: null, badgeColor: "" },
  { id: 5, company: "Razorpay", logo: "R", logoColor: "#2563eb", role: "DE – Payments Intelligence", location: "Bengaluru, India", type: "Full-time", salary: "₹35–50 LPA", tags: ["Spark", "Druid", "Java"], posted: "1 day ago", badge: "Hot", badgeColor: "bg-red-100 text-red-600" },
  { id: 6, company: "CRED", logo: "C", logoColor: "#1a1a2e", role: "ML Infra Engineer", location: "Bengaluru, India", type: "Hybrid", salary: "₹40–60 LPA", tags: ["MLflow", "Spark", "Python"], posted: "4 days ago", badge: null, badgeColor: "" },
  { id: 7, company: "Ola", logo: "O", logoColor: "#00ab22", role: "Data Engineer – Mobility", location: "Bengaluru / Hyderabad", type: "Full-time", salary: "₹22–32 LPA", tags: ["Hive", "Spark", "Airflow"], posted: "1 week ago", badge: null, badgeColor: "" },
  { id: 8, company: "Zomato", logo: "Z", logoColor: "#e23744", role: "Senior BI Engineer", location: "Gurugram, India", type: "Hybrid", salary: "₹20–30 LPA", tags: ["Looker", "BigQuery", "dbt"], posted: "3 days ago", badge: "New", badgeColor: "bg-blue-100 text-blue-600" },
];

const FILTER_CHIPS = ["All", "Full-time", "Hybrid", "Remote", "Hot", "Premium"];

function JobCard({ job }) {
  return (
    <div className="bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-sm" style={{ backgroundColor: job.logoColor }}>
            {job.logo}
          </div>
          <div>
            <p className="font-bold text-deep-navy text-base leading-tight">{job.role}</p>
            <p className="text-on-surface-variant text-sm mt-0.5">{job.company}</p>
          </div>
        </div>
        {job.badge && (
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${job.badgeColor}`}>{job.badge}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-on-surface-variant">
        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span>{job.location}</span>
        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">work</span>{job.type}</span>
        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span>{job.salary}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span key={tag} className="bg-ice-blue text-vibrant-teal text-[11px] font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/40 mt-auto">
        <span className="text-xs text-on-surface-variant">{job.posted}</span>
        <button className="bg-deep-navy text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-vibrant-teal transition-all active:scale-95">Quick Apply</button>
      </div>
    </div>
  );
}

const INPUT_CLS = "w-full bg-ice-blue/40 border border-outline-variant rounded-xl px-4 py-3 focus:border-vibrant-teal focus:ring-1 focus:ring-vibrant-teal outline-none text-on-surface text-sm transition-all";

function Field({ label, required, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      {children}
    </div>
  );
}

function PostJobModal({ onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ company: "", logo: "", logoColor: "#004b6b", role: "", location: "", type: "Full-time", salary: "", tags: "", badge: "" });
  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      id: Date.now(), company: form.company || "Your Company",
      logo: (form.logo || form.company?.[0] || "?").toUpperCase(),
      logoColor: form.logoColor, role: form.role || "Open Role", location: form.location || "India",
      type: form.type, salary: form.salary || "Negotiable",
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      posted: "Just now", badge: form.badge || null,
      badgeColor: form.badge === "Hot" ? "bg-red-100 text-red-600" : form.badge === "Premium" ? "bg-amber-100 text-amber-700" : form.badge === "New" ? "bg-blue-100 text-blue-600" : form.badge === "Actively Hiring" ? "bg-green-100 text-green-700" : "",
    });
    onClose();
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col overflow-y-auto" style={{ animation: "slideIn 0.25s ease-out" }}>
        <style>{`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-bold text-deep-navy">Post a Job</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">Step {step} of 2 — {step === 1 ? "Company Details" : "Role Details"}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-ice-blue transition-colors"><span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="flex gap-2 px-8 py-4">
          {[1, 2].map((s) => (<div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-vibrant-teal" : "bg-outline-variant/40"}`} />))}
        </div>
        <form onSubmit={handleSubmit} className="flex-1 px-8 pb-8 space-y-5">
          {step === 1 ? (
            <>
              <Field label="Company Name" required><input className={INPUT_CLS} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="e.g. Razorpay" required /></Field>
              <Field label="Logo Letter (1 char)"><input className={INPUT_CLS} maxLength={1} value={form.logo} onChange={(e) => set("logo", e.target.value)} placeholder="R" /></Field>
              <Field label="Logo Colour"><div className="flex items-center gap-3"><input type="color" className="w-12 h-10 rounded-lg border border-outline-variant cursor-pointer" value={form.logoColor} onChange={(e) => set("logoColor", e.target.value)} /><span className="text-sm text-on-surface-variant">{form.logoColor}</span></div></Field>
              <Field label="Job Badge (optional)"><select className={INPUT_CLS} value={form.badge} onChange={(e) => set("badge", e.target.value)}><option value="">None</option><option>Hot</option><option>New</option><option>Premium</option><option>Actively Hiring</option></select></Field>
            </>
          ) : (
            <>
              <Field label="Role Title" required><input className={INPUT_CLS} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="e.g. Senior Data Engineer" required /></Field>
              <Field label="Location" required><input className={INPUT_CLS} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="e.g. Bengaluru, India" required /></Field>
              <Field label="Employment Type"><select className={INPUT_CLS} value={form.type} onChange={(e) => set("type", e.target.value)}><option>Full-time</option><option>Hybrid</option><option>Remote</option><option>Contract</option></select></Field>
              <Field label="Salary (CTC)"><input className={INPUT_CLS} value={form.salary} onChange={(e) => set("salary", e.target.value)} placeholder="e.g. ₹30–45 LPA" /></Field>
              <Field label="Tech Tags (comma-separated)"><input className={INPUT_CLS} value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="Spark, Kafka, Scala" /></Field>
            </>
          )}
          <div className="flex gap-3 pt-4">
            {step === 2 && <button type="button" onClick={() => setStep(1)} className="flex-1 border border-outline-variant text-on-surface-variant font-bold py-3 rounded-xl hover:bg-ice-blue transition-colors">Back</button>}
            {step === 1 ? (
              <button type="button" onClick={() => setStep(2)} className="flex-1 bg-deep-navy text-white font-bold py-3 rounded-xl hover:bg-vibrant-teal transition-all active:scale-95">Next: Role Details →</button>
            ) : (
              <button type="submit" className="flex-1 bg-vibrant-teal text-white font-bold py-3 rounded-xl hover:bg-deep-navy transition-all active:scale-95">Post Job ✓</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default function JobBoardPage() {
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filtered = useMemo(() => jobs.filter((job) => {
    const q = search.toLowerCase();
    const matchSearch = !q || job.role.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.location.toLowerCase().includes(q) || job.tags.some((t) => t.toLowerCase().includes(q));
    const matchFilter = activeFilter === "All" || job.type === activeFilter || job.badge === activeFilter;
    return matchSearch && matchFilter;
  }), [jobs, search, activeFilter]);

  return (
    <div className="bg-[#f4f6fb] min-h-screen flex flex-col">
      <HomeHeader />

      <section className="pt-36 pb-20 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001f3f 0%, #004b6b 60%, #006e8a 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-container-max mx-auto px-margin-desktop text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-amber-300 mb-6">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            Live Data Engineering Jobs
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            Find Your Next<br /><span className="text-amber-300">Big Data Role</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">Curated openings from India&apos;s top tech companies — Spark, Kafka, Flink, and beyond.</p>
          <div className="relative max-w-2xl mx-auto">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
            <input type="text" className="w-full bg-white rounded-2xl pl-14 pr-6 py-4 text-on-surface text-base shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-on-surface-variant" placeholder="Search role, company, tech stack…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-margin-desktop py-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTER_CHIPS.map((chip) => (
              <button key={chip} onClick={() => setActiveFilter(chip)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${activeFilter === chip ? "bg-deep-navy text-white border-deep-navy shadow-md" : "bg-white text-on-surface-variant border-outline-variant hover:border-deep-navy hover:text-deep-navy"}`}>{chip}</button>
            ))}
          </div>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-amber-400 text-deep-navy font-bold px-5 py-2.5 rounded-xl hover:bg-amber-500 transition-all active:scale-95 shadow-md">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>Post a Job
          </button>
        </div>
        <p className="text-on-surface-variant text-sm mt-4">Showing <span className="font-bold text-deep-navy">{filtered.length}</span> {filtered.length === 1 ? "opening" : "openings"}{search && <> for &ldquo;<span className="font-semibold">{search}</span>&rdquo;</>}</p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop pb-16 w-full flex-1">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/40 mb-4">search_off</span>
            <h3 className="text-xl font-bold text-deep-navy mb-2">No jobs found</h3>
            <p className="text-on-surface-variant">Try a different search term or clear the filter.</p>
            <button onClick={() => { setSearch(""); setActiveFilter("All"); }} className="mt-6 px-6 py-2.5 bg-deep-navy text-white rounded-xl font-bold hover:bg-vibrant-teal transition-all">Clear Filters</button>
          </div>
        )}
      </div>

      <HomeFooter />
      {showModal && <PostJobModal onClose={() => setShowModal(false)} onSubmit={(j) => setJobs((p) => [j, ...p])} />}
    </div>
  );
}
