import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import olcLogo from './assets/olc-logo.png';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';

const chapters = [
  {
    id: 'ch1',
    label: 'CHAPTER 1: FOUNDATIONS',
    lessons: [
      { icon: 'check_circle', filled: true, label: 'System Architecture', status: 'done' },
      { icon: 'play_circle', filled: false, label: 'Spark & Kafka Integration', status: 'active' },
      { icon: 'lock', filled: false, label: 'Stream Processing Deep Dive', status: 'locked' },
    ],
  },
  {
    id: 'ch2',
    label: 'CHAPTER 2: PERFORMANCE',
    lessons: [
      { icon: 'radio_button_unchecked', filled: false, label: 'JVM Optimization for Big Data', status: 'upcoming' },
      { icon: 'radio_button_unchecked', filled: false, label: 'Cluster Tuning Strategies', status: 'upcoming' },
    ],
  },
];

const INITIAL_QUESTIONS = [
  {
    id: 1,
    timestamp: '04:32',
    author: 'Alex Rivera',
    text: 'How does the checkpointing work with persistent S3 storage in this context?',
  },
];

const INITIAL_CODE = `import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

def processStream(spark: SparkSession): Unit = {
  // TODO: Implement stream processing logic
  val ds = spark.readStream
    .format("kafka")
    .option("subscribe", "input-stream")
    .load()

  // Your code here

}`;

export default function SparkKafkaWorkspacePage() {
  const [activeTab, setActiveTab] = useState('desc');
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [newQuestion, setNewQuestion] = useState('');
  const [code, setCode] = useState(INITIAL_CODE);
  const [isRunning, setIsRunning] = useState(false);
  const [runStatus, setRunStatus] = useState(null); // null | 'success' | 'error'
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handlePostQuestion() {
    const q = newQuestion.trim();
    if (!q) return;
    const now = new Date();
    const ts = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setQuestions((prev) => [...prev, { id: Date.now(), timestamp: ts, author: 'You', text: q }]);
    setNewQuestion('');
  }

  function handleRunCode() {
    setIsRunning(true);
    setIsResultsOpen(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunStatus('success');
      setIsResultsOpen(true);
    }, 1500);
  }

  function switchTab(tab) {
    setActiveTab(tab);
  }

  const tabClass = (tab) =>
    `px-6 py-4 font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === tab
      ? 'text-primary font-bold border-primary'
      : 'text-on-surface-variant hover:text-primary border-transparent'
    }`;

  const iconColor = (status) => {
    if (status === 'done') return 'text-tertiary';
    if (status === 'active') return 'text-primary';
    return 'text-on-surface-variant/50';
  };

  const iconFill = (filled) =>
    filled ? { fontVariationSettings: "'FILL' 1" } : {};

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-hidden h-screen flex flex-col">

      {/* Top Nav */}
      <HomeHeader />

      {/* Main Layout — offset below fixed header */}
      <main className="flex-1 flex overflow-hidden pt-20">

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-outline-variant h-full overflow-y-auto py-2" style={{ scrollbarWidth: 'none' }}>
          {/* Active Course Heading */}
          <div className="px-6 pt-4 pb-2 border-b border-outline-variant/10 mb-6 bg-surface-container-low/20">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">Enrolled Course</span>
            <h2 className="text-base font-bold text-deep-navy leading-tight">Mastering Spark &amp; Kafka</h2>
          </div>

          {/* Progress */}
          <div className="px-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-on-surface-variant tracking-widest uppercase">Your Progress</span>
              <span className="text-xs font-semibold text-primary tracking-widest">65%</span>
            </div>
            <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
            </div>
            <div className="mt-6 flex gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-16 h-16" style={{ transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                  <circle className="stroke-current text-surface-container" cx="50" cy="50" r="40" fill="transparent" strokeWidth="8" />
                  <circle
                    className="stroke-current text-primary"
                    cx="50" cy="50" r="40" fill="transparent"
                    strokeWidth="8"
                    strokeLinecap="round"
                    style={{ strokeDasharray: '251.2', strokeDashoffset: '80' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary font-mono">4h</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold text-on-surface-variant tracking-widest uppercase">Daily Goal</span>
                <span className="text-base font-bold text-on-surface">4.2 / 6 Hours</span>
              </div>
            </div>
          </div>

          {/* Chapters */}
          <div className="px-2 space-y-1">
            {chapters.map((ch) => (
              <div key={ch.id}>
                <div className="px-4 py-2 text-xs font-semibold text-on-surface-variant/80 tracking-widest uppercase">
                  {ch.label}
                </div>
                {ch.lessons.map((lesson) => (
                  <button
                    key={lesson.label}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left relative ${lesson.status === 'active'
                        ? 'bg-primary-container text-on-primary-container font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                  >
                    {lesson.status === 'active' && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full shadow"
                        style={{ boxShadow: '0 0 12px rgba(73,75,214,0.4)' }}
                      />
                    )}
                    <span
                      className={`material-symbols-outlined ${iconColor(lesson.status)}`}
                      style={iconFill(lesson.filled)}
                    >
                      {lesson.icon}
                    </span>
                    <span className="text-base">{lesson.label}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Resume button */}
          <div className="mt-auto px-4 py-6 border-t border-outline-variant">
            <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
              Resume Learning
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col h-full bg-background overflow-y-auto">

          {/* Video Player */}
          <section className="w-full max-w-5xl mx-auto px-10 py-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-highest group shadow-xl shadow-black/10">
              <img
                className="w-full h-full object-cover"
                alt="Coding workspace cinematic view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClBoutB8iZ4l9A6ZLvu5fC74kaItXPNDI5pdKjnGBsdHlhwe4GfAtlxlyO9kcz9tGslGPQt5JFmV0rqpS34eryTU-4uD_eF3XtTfQHE6EjqgG0lzZVaWT4Hi6M4kA0vZf8RIxdaeCPFrk-3H96GOuWJYjqzBB8gL0D0jSIp27v_arhJSRYpv7XUK9iojYqrSUZWuUq9_386-jDfTe3JIFSAvQl0w9KIDBdn405o8emTs4KjMQU2fG643pKDL0eyxaEo4Nk1j4wqC58"
              />
              {/* Hover Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Scrubber */}
                <div className="w-full bg-white/20 h-1.5 rounded-full mb-4 cursor-pointer relative">
                  <div className="absolute left-0 top-0 h-full bg-primary w-2/3 rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg" style={{ left: '66%' }} />
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">play_arrow</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">skip_next</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">volume_up</span></button>
                    <span className="text-xs font-semibold tracking-widest">12:45 / 24:00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">fullscreen</span></button>
                  </div>
                </div>
              </div>
              {/* Center Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer shadow-xl">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            </div>

            {/* Video Title Row */}
            <div className="mt-6 flex justify-between items-start gap-6">
              <div>
                <h1 className="text-3xl font-bold text-on-surface leading-tight">Spark &amp; Kafka Integration: Real-time Data Ingestion</h1>
                <p className="text-on-surface-variant mt-2 text-lg">Mastering the art of high-throughput stream processing pipelines.</p>
              </div>
              <div className="flex gap-2 flex-shrink-0 mt-1">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined">share</span>
                  <span className="text-xs font-semibold tracking-widest">SHARE</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined">bookmark</span>
                  <span className="text-xs font-semibold tracking-widest">SAVE</span>
                </button>
              </div>
            </div>
          </section>

          {/* Resource Deck */}
          <section className="flex-1 w-full max-w-5xl mx-auto px-10 pb-12">
            <div className="bg-white rounded-2xl border border-outline-variant overflow-hidden flex flex-col shadow-sm" style={{ minHeight: '400px' }}>

              {/* Tabs */}
              <div className="flex border-b border-outline-variant bg-surface-container-low px-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {[
                  { id: 'desc', label: 'Description' },
                  { id: 'solve', label: 'Solve' },
                  { id: 'notes', label: 'Notes' },
                  { id: 'qa', label: 'Q&A' },
                  { id: 'assignments', label: 'Assignments' },
                ].map((t) => (
                  <button key={t.id} className={tabClass(t.id)} onClick={() => switchTab(t.id)}>
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8 flex-1 flex flex-col">

                {/* Description */}
                {activeTab === 'desc' && (
                  <div className="space-y-6">
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                      In this session, we dive into the architectural patterns for connecting Apache Spark clusters with Kafka brokers.
                      We focus on exactly-once semantics and backpressure management.
                    </p>
                    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant overflow-x-auto">
                      <pre className="text-primary font-mono text-sm leading-relaxed"><code>{`val df = spark
  .readStream
  .format("kafka")
  .option("kafka.bootstrap.servers", "host1:port1,host2:port2")
  .option("subscribe", "topic1")
  .load()

df.selectExpr("CAST(key AS STRING)", "CAST(value AS STRING)")
  .as[(String, String)]`}</code></pre>
                    </div>
                  </div>
                )}

                {/* Solve */}
                {activeTab === 'solve' && (
                  <div className="-m-8 flex flex-1 overflow-hidden rounded-b-2xl" style={{ height: '600px' }}>
                    {/* Problem Description */}
                    <div className="w-2/5 p-8 border-r border-outline-variant overflow-y-auto bg-white">
                      <h2 className="text-2xl font-bold text-on-surface mb-4">Stream Word Count</h2>
                      <p className="mb-4 text-base text-on-surface-variant leading-relaxed">
                        Implement a Scala function using Spark Structured Streaming to count the frequency of each word
                        appearing in a Kafka topic. The output should maintain a running count for each word.
                      </p>
                      <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">Constraints</h3>
                      <ul className="list-disc pl-5 space-y-1 text-base text-on-surface-variant mb-6">
                        <li>Use <code className="bg-surface-container px-1 rounded">spark.readStream</code> for ingestion.</li>
                        <li>Ignore casing (convert all words to lowercase).</li>
                        <li>Handle null values by skipping them.</li>
                        <li>The topic name is "input-stream".</li>
                      </ul>
                      <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">Example</h3>
                      <div className="bg-surface-container p-4 rounded-lg font-mono text-sm border border-outline-variant">
                        <p className="text-on-surface mb-1 font-bold">Input:</p>
                        <code className="text-primary">"Hello World", "hello spark"</code>
                        <p className="text-on-surface mt-2 mb-1 font-bold">Output:</p>
                        <code className="text-primary">{"('hello', 2), ('world', 1), ('spark', 1)"}</code>
                      </div>
                    </div>

                    {/* Code Editor */}
                    <div className="w-3/5 flex flex-col bg-surface-container">
                      {/* Editor Toolbar */}
                      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline-variant">
                        <span className="text-xs font-bold text-on-surface-variant tracking-widest">SCALA 2.12</span>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">settings</span>
                      </div>

                      {/* Code Area */}
                      <div className="flex-1 bg-[#1e1e1e] relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-black/20 flex flex-col items-start pt-4 px-3 text-gray-500 select-none text-xs font-mono leading-relaxed gap-0">
                          {Array.from({ length: 14 }, (_, i) => (
                            <span key={i} className="leading-relaxed">{i + 1}</span>
                          ))}
                        </div>
                        <textarea
                          className="absolute inset-0 pl-14 pr-4 pt-4 pb-4 bg-transparent text-[#d4d4d4] font-mono text-sm leading-relaxed resize-none outline-none w-full h-full"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          spellCheck={false}
                        />
                      </div>

                      {/* Results Panel */}
                      <div className="border-t border-outline-variant bg-surface-container-low">
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container-high transition-colors"
                          onClick={() => setIsResultsOpen((o) => !o)}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`material-symbols-outlined ${runStatus === 'success' ? 'text-tertiary' : runStatus === 'error' ? 'text-error' : 'text-on-surface-variant'}`}
                              style={{ fontVariationSettings: runStatus === 'success' ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              {runStatus === 'success' ? 'check_circle' : runStatus === 'error' ? 'cancel' : 'terminal'}
                            </span>
                            <span className="text-xs font-bold text-on-surface tracking-widest uppercase">Console Results</span>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant">
                            {isResultsOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                        {isResultsOpen && (
                          <div className="p-4 border-t border-outline-variant bg-surface-container font-mono text-sm text-on-surface-variant">
                            {runStatus === 'success' ? (
                              <>
                                <div className="flex items-center gap-2 text-tertiary mb-2">
                                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                                  <span>All test cases passed (2/2)</span>
                                </div>
                                <p className="text-xs opacity-70">Exec time: 1.2s | Memory: 256MB</p>
                              </>
                            ) : (
                              <p className="text-error">Build failed. Check your code and try again.</p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="p-4 border-t border-outline-variant bg-surface-container-high flex justify-end gap-3">
                        <button
                          className="px-6 py-2 rounded-lg font-bold border border-outline text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"
                          onClick={handleRunCode}
                          disabled={isRunning}
                        >
                          {isRunning ? (
                            <span className="flex items-center gap-2">
                              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                              Running…
                            </span>
                          ) : 'Run Code'}
                        </button>
                        <button className="px-6 py-2 rounded-lg font-bold bg-primary text-on-primary shadow-md hover:shadow-lg transition-shadow">
                          Submit Solution
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notes */}
                {activeTab === 'notes' && (
                  <div className="flex flex-col h-full bg-surface-container-low rounded-xl border border-outline-variant p-4" style={{ minHeight: '300px' }}>
                    <textarea
                      className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface text-base resize-none outline-none min-h-[260px]"
                      placeholder="Start typing your markdown notes here… Use # for headers."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant mt-4">
                      <span className="text-xs font-semibold text-on-surface-variant tracking-widest uppercase">
                        {notes.length > 0 ? `${notes.length} chars` : 'AUTO-SAVED AT 14:20'}
                      </span>
                      <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-shadow">
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}

                {/* Q&A */}
                {activeTab === 'qa' && (
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <input
                        className="flex-1 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface"
                        placeholder="Ask a question about this lesson..."
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handlePostQuestion()}
                      />
                      <button
                        className="bg-primary text-on-primary px-8 rounded-xl font-bold shadow-md hover:shadow-lg transition-shadow active:scale-95"
                        onClick={handlePostQuestion}
                      >
                        Post
                      </button>
                    </div>
                    <div className="space-y-4">
                      {questions.map((q) => (
                        <div key={q.id} className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                              TIMESTAMP {q.timestamp}
                            </span>
                            <span className="text-on-surface font-bold">{q.author}</span>
                          </div>
                          <p className="text-on-surface-variant">{q.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Assignments */}
                {activeTab === 'assignments' && (
                  <label className="border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center p-12 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary mb-4">cloud_upload</span>
                    <p className="text-lg font-bold text-on-surface">Drop your .zip file here</p>
                    <p className="text-on-surface-variant text-base mt-2">Maximum file size: 50MB. (Scala/Python files only)</p>
                    <input type="file" className="hidden" accept=".zip,.scala,.py" />
                  </label>
                )}

              </div>
            </div>
          </section>

          {/* Footer */}
          <HomeFooter />

        </div>
      </main>

    </div>
  );
}
