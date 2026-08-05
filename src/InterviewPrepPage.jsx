import { useState } from "react";
import { HomeHeader } from "./components/HomeHeader";
import { HomeFooter } from "./components/HomeFooter";

/* ─── Question Card ──────────────────────────────────────────── */
function QuestionCard({ difficulty, difficultyColor, company, role, question, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 text-xs rounded-full font-bold ${difficultyColor}`}>{difficulty}</span>
              <span className="text-xs text-on-surface-variant">{company} • {role}</span>
            </div>
            <h3 className="text-base font-bold text-deep-navy leading-snug">{question}</h3>
          </div>
          <button
            className="flex items-center gap-1 text-vibrant-teal font-semibold hover:bg-vibrant-teal/10 px-3 py-2 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-sm whitespace-nowrap">{isOpen ? "Hide Answer" : "Reveal Answer"}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 text-[18px] ${isOpen ? "rotate-180" : ""}`}>expand_more</span>
          </button>
        </div>
        <div className={`overflow-hidden transition-[max-height] duration-300 ease-out ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
          <div className="pt-4 border-t border-outline-variant mt-2 text-sm text-on-surface-variant leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sidebar ────────────────────────────────────────────────── */
const BY_SUBJECT = [
  { icon: "code", label: "Java", href: "#java", active: true },
  { icon: "database", label: "Big Data", href: "#big-data" },
  { icon: "table_chart", label: "SQL", href: "#sql" },
  { icon: "terminal", label: "Scala", href: "#scala" },
  { icon: "account_tree", label: "DSA", href: "#dsa" },
];
const BY_COMPANY = [
  { icon: "corporate_fare", label: "FAANG", href: "#faang" },
  { icon: "business", label: "Service-Based", href: "#service-based" },
  { icon: "rocket_launch", label: "Startups", href: "#startups" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-outline-variant flex-shrink-0 sticky top-20 h-[calc(100vh-5rem)]">
      <div className="p-6 flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* <div className="flex items-center gap-2 text-deep-navy font-bold text-lg mb-8">
          <span className="material-symbols-outlined text-vibrant-teal text-3xl">school</span>
          <span>EliteCareers</span>
        </div> */}
        <nav className="space-y-6">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3 px-2 font-bold">By Subject</h3>
            <ul className="space-y-1">
              {BY_SUBJECT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-2 py-2 rounded-lg font-medium text-sm transition-colors ${item.active ? "bg-ice-blue text-vibrant-teal" : "text-on-surface-variant hover:bg-ice-blue/60 hover:text-deep-navy"}`}
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3 px-2 font-bold">By Company</h3>
            <ul className="space-y-1">
              {BY_COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-ice-blue/60 hover:text-deep-navy font-medium text-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}

/* ─── Companies Tab ──────────────────────────────────────────── */
const COMPANIES = [
  { icon: "shopping_cart", name: "Amazon", count: "420+" },
  { icon: "search", name: "Google", count: "380+" },
  { icon: "window", name: "Microsoft", count: "310+" },
  { icon: "movie", name: "Netflix", count: "150+" },
  { icon: "smartphone", name: "Flipkart", count: "200+" },
  { icon: "payments", name: "Razorpay", count: "120+" },
  { icon: "delivery_dining", name: "Swiggy", count: "90+" },
  { icon: "electrical_services", name: "PhonePe", count: "110+" },
];

const TABS = ["Companies", "Topics", "Contributors", "Saved Questions"];

/* ─── Main Page ──────────────────────────────────────────────── */
export default function InterviewPrepPage() {
  const [activeTab, setActiveTab] = useState("Companies");

  return (
    <div className="bg-[#f4f6fb] min-h-screen flex flex-col">
      <HomeHeader />

      {/* Page body starts below fixed header */}
      <div className="flex flex-1 pt-20">
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto px-8 py-10">

            {/* Breadcrumb */}
            {/* <nav className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-6">
              <a className="hover:text-vibrant-teal transition-colors" href="#">Interview Prep</a>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <a className="hover:text-vibrant-teal transition-colors" href="#">Companies</a>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-deep-navy font-semibold">Amazon</span>
            </nav> */}

            {/* Hero */}
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 bg-vibrant-teal/10 text-vibrant-teal px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                <span className="material-symbols-outlined text-[16px]">work_history</span>
                Company-wise Question Bank
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-deep-navy mb-3 leading-tight">
                Interview Prep <span className="text-vibrant-teal">Hub</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-2xl">
                Master the most frequently asked technical questions from top-tier tech companies with detailed explanations and peer reviews.
              </p>
            </header>

            {/* Stats Strip */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: "quiz", value: "1,400+", label: "Questions" },
                { icon: "corporate_fare", value: "30+", label: "Companies" },
                { icon: "people", value: "8,200+", label: "Students Helped" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-outline-variant p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-vibrant-teal/10 text-vibrant-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <div>
                    <p className="text-xl font-black text-deep-navy">{s.value}</p>
                    <p className="text-xs text-on-surface-variant">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabbed Hub */}
            <div className="mb-12">
              <div className="flex border-b border-outline-variant mb-8 overflow-x-auto bg-white rounded-t-xl px-2" style={{ scrollbarWidth: "none" }}>
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3.5 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${activeTab === tab
                        ? "border-vibrant-teal text-vibrant-teal"
                        : "border-transparent text-on-surface-variant hover:text-deep-navy"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Companies" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {COMPANIES.map((c) => (
                    <div
                      key={c.name}
                      className="bg-white p-5 rounded-xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
                    >
                      <div className="w-11 h-11 bg-ice-blue rounded-lg flex items-center justify-center mb-3 group-hover:bg-vibrant-teal/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-vibrant-teal">{c.icon}</span>
                      </div>
                      <h4 className="font-bold text-deep-navy text-sm mb-0.5">{c.name}</h4>
                      <p className="text-xs text-on-surface-variant">{c.count} Questions</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Topics" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Java Internals", "Spark & Kafka", "SQL & Databases", "System Design", "Scala FP", "DSA Patterns"].map((topic) => (
                    <div key={topic} className="bg-white p-5 rounded-xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                      <span className="text-sm font-bold text-deep-navy">{topic}</span>
                    </div>
                  ))}
                </div>
              )}

              {(activeTab === "Contributors" || activeTab === "Saved Questions") && (
                <div className="bg-white rounded-xl border border-outline-variant p-10 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-5xl mb-3 block opacity-40">construction</span>
                  <p className="font-semibold">{activeTab} — coming soon!</p>
                </div>
              )}
            </div>

            {/* Recent Questions */}
            <section className="space-y-4 mb-16">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-black text-deep-navy">Recent Questions</h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-outline-variant rounded-full text-xs font-semibold text-on-surface-variant hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-base">filter_list</span> Filter
                  </button>
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-outline-variant rounded-full text-xs font-semibold text-on-surface-variant hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-base">sort</span> Sort
                  </button>
                </div>
              </div>

              <QuestionCard
                difficulty="Easy"
                difficultyColor="bg-green-100 text-green-700"
                company="Amazon"
                role="SDE II"
                question="Explain the internal working of HashMap in Java."
              >
                <p className="mb-3">HashMap in Java works on the principle of hashing. It uses a dynamic array of nodes (buckets) where each node is a LinkedList (or a balanced tree since Java 8 for high collision buckets).</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-4">
                  <li><strong>Hashing:</strong> Uses <code className="bg-ice-blue px-1 rounded">hashCode()</code> to determine the bucket index.</li>
                  <li><strong>Collision:</strong> Handled via separate chaining. If threshold (8) is reached, it converts to a Red-Black tree.</li>
                  <li><strong>Complexity:</strong> Average O(1) for put/get operations.</li>
                </ul>
                <div className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg font-mono text-sm border border-outline-variant">
                  Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();<br />
                  map.put("Key", 1); // hash → index → bucket
                </div>
              </QuestionCard>

              <QuestionCard
                difficulty="Hard"
                difficultyColor="bg-red-100 text-red-600"
                company="Google"
                role="Data Engineer"
                question="Optimize a Spark job dealing with heavy data skewness."
              >
                <p className="mb-2">To handle data skewness in Spark, several strategies can be employed:</p>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li><strong>Salting:</strong> Adding a random key to redistribute data across partitions.</li>
                  <li><strong>Broadcast Join:</strong> If one side is small, broadcast it to avoid shuffle.</li>
                  <li><strong>Adaptive Query Execution (AQE):</strong> Enable Spark 3.0 feature to dynamically handle skew joins at runtime.</li>
                </ol>
              </QuestionCard>

              <QuestionCard
                difficulty="Medium"
                difficultyColor="bg-amber-100 text-amber-700"
                company="Microsoft"
                role="Fullstack Dev"
                question="What are the different isolation levels in SQL?"
              >
                <p className="mb-2">SQL standard defines four isolation levels, each trading off between consistency and concurrency:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Read Uncommitted</strong> — allows dirty reads</li>
                  <li><strong>Read Committed</strong> — prevents dirty reads</li>
                  <li><strong>Repeatable Read</strong> — prevents non-repeatable reads</li>
                  <li><strong>Serializable</strong> — fully isolated, maximum consistency</li>
                </ul>
              </QuestionCard>

              <QuestionCard
                difficulty="Medium"
                difficultyColor="bg-amber-100 text-amber-700"
                company="PhonePe"
                role="Data Engineer"
                question="What is the difference between repartition() and coalesce() in Spark?"
              >
                <p className="mb-2">Both are used to control the number of partitions, but with different trade-offs:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>repartition(n):</strong> Full shuffle — creates exactly n balanced partitions. Use when increasing partitions.</li>
                  <li><strong>coalesce(n):</strong> No full shuffle — merges partitions without data movement. Use only when reducing partitions.</li>
                </ul>
              </QuestionCard>
            </section>

            {/* Contributors */}
            <section className="border-t border-outline-variant pt-12 mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black text-deep-navy">Core Contributors</h2>
                  <p className="text-sm text-on-surface-variant">Top mentors and students helping the community.</p>
                </div>
                <a className="text-vibrant-teal font-semibold text-sm hover:underline" href="#">View Hall of Fame</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Alex Chen", stats: "84 Solutions • 1.2k Likes", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAid14I3mza0aPDblV3-RiI2w8XGgoYm1gKFmaivCgZFfaAAp688z9M5FiNLTmb5sYipx6zaCVGOu8SdUdaGCtXL03xLfr6iKSV_nbgpzJpQ8qwmBheGHPN6bdvsXCv_vaZAebtwS6fJUd8ptnK0NT5xXarlDnfthaK_34zWGdjMvS2mgJ7NWYsi0WpU6pr7syDrOaO85Tdsu5ZvFlVwo2FK7ivHQffwRyVZ2XxniTIe-DGLusBG1O6XPT-7fHa43Bj__auGKGCppfR" },
                  { name: "Sarah Smith", stats: "56 Solutions • 890 Likes", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC43rwgxlCxx5J_eaID9T9OfLB6tDdsXxTGBcgs7YvPvzPZ5CUZaudwcRZ0DPvY2jhmtNDxq2sSybLLV8ZWYeaK5DFzzpugVnTI4e0O1y1QWklF1bElC9lbVt8jeteTd6otr0lijYQvjN93uw5YKPFokjSkRV0BGE-4z5uco34sL7ha1OWT7gyyJCJcrT0IdldnDGO4QlU1P-KNWW06cWcv8ltSw-eSGa7DIEUDVpatsFGGRCJGVBi7JYdCWtfriB_9aEHZ0zdlB77A" },
                  { name: "Leo Varma", stats: "42 Solutions • 650 Likes", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqviOm6Uyj_Q0Hb3or0H80tpGDwyvHoCo0sRuac_-Qcem-Z2kPzPiluuFSxV9JXPGU6BnxES5s9hnieiC_AQ4FDkZ_wMkTjLi5QNlTFo4KArqNhmjBLK3yXN12EyA0oJagwVdyAuOpf-DTjyy2OWik8HswrOsOofI2Lk4g8F-LO0SQPThfhRyAJWYuwTjJ7QbOKE2TCGTA191UUi8WdMeJEcdcxeDfh-mKHvZPdaYRxffzsaeT8NNfVq5xSGpWKWqyGt19pkPnt9cm" },
                ].map((c) => (
                  <div key={c.name} className="bg-white p-4 rounded-xl border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                    <img alt={c.name} className="w-12 h-12 rounded-full object-cover border-2 border-outline-variant" src={c.src} />
                    <div>
                      <h5 className="font-bold text-deep-navy text-sm">{c.name}</h5>
                      <p className="text-xs text-on-surface-variant">{c.stats}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* Full width footer */}
      <HomeFooter />
    </div>
  );
}
