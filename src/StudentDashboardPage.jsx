import { useState } from "react";
import { HomeHeader } from "./components/HomeHeader";
import { HomeFooter } from "./components/HomeFooter";

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState("learning");

  const tabBase = "px-6 py-4 text-sm font-semibold transition-all border-b-2 whitespace-nowrap";
  const tabActive = "border-vibrant-teal text-vibrant-teal";
  const tabInactive = "border-transparent text-on-surface-variant hover:text-deep-navy";

  return (
    <div className="bg-[#f4f6fb] min-h-screen flex flex-col text-on-surface">
      <HomeHeader />

      {/* Page body — offset below fixed nav */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Left Profile Sidebar ── */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white border border-outline-variant rounded-2xl p-8 sticky top-28 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full border-4 border-ice-blue overflow-hidden mb-4 shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      alt="Alex Johnson Portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd9B_st-FxT5AiseZlYVZAZElRXjj9kDWy6KBYP01jZ-kLZF5EFbcWd-oZ4jo3MI1oK8aoo0KdzsCZylvtx6_d_elBSn5vWPhlvHCIl8vtAk1tpVmJVS1Bb8Q5T8V9YlqvaNpJLX7_I1XB8jheZrJGvAeDmO4qyVjNoJZT146iZ-Lw3tSM6Y03DpecjHyWbQASHWdzDVzX98MSZ4ErUgFfx8XODHnyshaK4RFLTschKgKrITBXOsq_Qtk64sKf5x_ycDR7xOQLuVFR"
                    />
                  </div>
                  <h1 className="text-xl font-black text-deep-navy">Alex Johnson</h1>
                  <p className="text-sm text-on-surface-variant mt-1">Aspiring Data Engineer</p>

                  <div className="flex items-center gap-1.5 mt-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="text-xs">San Francisco, CA</span>
                  </div>

                  <div className="w-full h-px bg-outline-variant my-6" />

                  <div className="text-left w-full">
                    <h3 className="text-[10px] font-bold text-vibrant-teal uppercase tracking-widest mb-2">Bio</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Passionate about architecting scalable data pipelines and mastering SQL for complex analytics. Currently completing the Full Stack Data Track.
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mt-6 w-full">
                    {[
                      { value: "2", label: "Courses" },
                      { value: "2", label: "Certs" },
                      { value: "3", label: "Solved" },
                    ].map((s) => (
                      <div key={s.label} className="bg-ice-blue/50 rounded-xl py-3 text-center">
                        <p className="text-lg font-black text-deep-navy">{s.value}</p>
                        <p className="text-[10px] text-on-surface-variant">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6 w-full">
                    <a className="flex-1 flex items-center justify-center gap-1.5 border border-outline-variant py-2 rounded-xl hover:bg-ice-blue transition-colors text-xs font-semibold text-on-surface-variant" href="#linkedin">
                      <span className="material-symbols-outlined text-[18px]">link</span> LinkedIn
                    </a>
                    <a className="flex-1 flex items-center justify-center gap-1.5 border border-outline-variant py-2 rounded-xl hover:bg-ice-blue transition-colors text-xs font-semibold text-on-surface-variant" href="#github">
                      <span className="material-symbols-outlined text-[18px]">code</span> GitHub
                    </a>
                  </div>

                  <button className="w-full mt-4 bg-deep-navy text-white text-sm font-bold py-3 rounded-xl hover:bg-vibrant-teal transition-all active:scale-95">
                    Download Resume
                  </button>
                </div>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <section className="flex-1 min-w-0">
              <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">

                {/* Tab Bar */}
                <div className="flex border-b border-outline-variant bg-surface-container-low px-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  {[
                    { id: "learning", label: "My Learning" },
                    { id: "certificates", label: "Certificates" },
                    { id: "portfolio", label: "Coding Portfolio" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`${tabBase} ${activeTab === t.id ? tabActive : tabInactive}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab Panels */}
                <div className="p-8 min-h-[520px]">

                  {/* ── My Learning ── */}
                  {activeTab === "learning" && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-black text-deep-navy">Active Courses</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {[
                          {
                            badge: "In Progress",
                            title: "DE2: Data Engineering Essentials",
                            icon: "database",
                            pct: 65,
                            done: 12,
                            total: 18,
                            cta: "Continue Lesson",
                          },
                          {
                            badge: "Almost Done",
                            title: "Mastering SQL for Architects",
                            icon: "terminal",
                            pct: 90,
                            done: 24,
                            total: 27,
                            cta: "Take Final Quiz",
                          },
                        ].map((c) => (
                          <div key={c.title} className="border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <span className="bg-vibrant-teal/10 text-vibrant-teal px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                  {c.badge}
                                </span>
                                <h3 className="text-base font-bold text-deep-navy mt-2 leading-snug">{c.title}</h3>
                              </div>
                              <span className="material-symbols-outlined text-vibrant-teal">{c.icon}</span>
                            </div>
                            <div className="flex justify-between text-xs mb-2">
                              <span className="text-on-surface-variant">{c.pct}% Completed</span>
                              <span className="text-vibrant-teal font-bold">{c.done}/{c.total} Lessons</span>
                            </div>
                            <div className="w-full h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                              <div className="h-full bg-vibrant-teal rounded-full transition-all duration-700" style={{ width: `${c.pct}%` }} />
                            </div>
                            <button className="mt-4 w-full border border-deep-navy text-deep-navy text-sm font-bold py-2 rounded-xl hover:bg-deep-navy hover:text-white transition-all active:scale-95">
                              {c.cta}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Recommended next */}
                      <div className="mt-4">
                        <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-3">Recommended Next</h3>
                        <div className="flex items-center justify-between bg-ice-blue/50 border border-outline-variant rounded-xl px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-vibrant-teal/10 rounded-lg flex items-center justify-center">
                              <span className="material-symbols-outlined text-vibrant-teal">stream</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-deep-navy">Mastering Spark &amp; Kafka</p>
                              <p className="text-xs text-on-surface-variant">Advanced · 24 lessons</p>
                            </div>
                          </div>
                          <button className="text-xs font-bold bg-deep-navy text-white px-4 py-2 rounded-xl hover:bg-vibrant-teal transition-all">Enroll</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Certificates ── */}
                  {activeTab === "certificates" && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-black text-deep-navy">Earned Credentials</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                          { icon: "workspace_premium", title: "Python for Data Analysis", issued: "Dec 2023" },
                          { icon: "school", title: "Cloud Fundamentals", issued: "Oct 2023" },
                        ].map((cert) => (
                          <div key={cert.title} className="border border-outline-variant rounded-xl p-6 text-center flex flex-col items-center bg-white hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-vibrant-teal/10 rounded-full flex items-center justify-center mb-4">
                              <span
                                className="material-symbols-outlined text-vibrant-teal text-4xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                {cert.icon}
                              </span>
                            </div>
                            <h3 className="text-sm font-bold text-deep-navy">{cert.title}</h3>
                            <p className="text-xs text-on-surface-variant mt-1">Issued {cert.issued}</p>
                            <button className="mt-4 text-xs text-vibrant-teal font-semibold hover:underline flex items-center gap-1">
                              View Certificate <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                            </button>
                          </div>
                        ))}

                        {/* Locked placeholder */}
                        <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center flex flex-col items-center opacity-60">
                          <div className="w-16 h-16 bg-outline-variant/20 rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-on-surface-variant text-4xl">lock</span>
                          </div>
                          <h3 className="text-sm font-bold text-on-surface-variant">DE2 Certificate</h3>
                          <p className="text-xs text-on-surface-variant mt-1">Complete the course to unlock</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Portfolio ── */}
                  {activeTab === "portfolio" && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-black text-deep-navy">Solved Challenges</h2>
                      <div className="border border-outline-variant rounded-xl overflow-hidden">
                        {[
                          { title: "Optimized Batch Processing", badge: "Hard", badgeColor: "bg-red-100 text-red-600", when: "2 days ago", href: "#solution-1" },
                          { title: "Recursive Schema Parser", badge: "Medium", badgeColor: "bg-amber-100 text-amber-700", when: "1 week ago", href: "#solution-2" },
                          { title: "SQL Window Functions Challenge", badge: "Medium", badgeColor: "bg-amber-100 text-amber-700", when: "2 weeks ago", href: "#solution-3" },
                        ].map((p, i) => (
                          <div
                            key={p.title}
                            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 ${i < 2 ? "border-b border-outline-variant" : ""} ${i % 2 === 0 ? "bg-white" : "bg-ice-blue/20"} hover:bg-ice-blue/40 transition-colors`}
                          >
                            <div>
                              <h3 className="text-sm font-bold text-deep-navy">{p.title}</h3>
                              <div className="flex items-center gap-3 mt-1.5">
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                                <span className="text-xs text-on-surface-variant">Solved {p.when}</span>
                              </div>
                            </div>
                            <a className="mt-3 sm:mt-0 text-xs text-vibrant-teal font-semibold hover:underline flex items-center gap-1 flex-shrink-0" href={p.href}>
                              View Solution <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
