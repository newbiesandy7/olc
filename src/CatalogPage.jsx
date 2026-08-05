import { useState, useMemo } from 'react';
import { courseGroups, stats } from './catalogData';
import { CatalogCard, StatCard } from './components/Cards';
import { HomeHeader } from './components/HomeHeader';
import { HomeFooter } from './components/HomeFooter';

const CATEGORIES = [
  'All Courses',
  'Data Infrastructure',
  'Cloud Architecture',
  'Foundations',
  'Microservices',
  'Hardware-Level',
  'DevOps'
];

const PRICE_FILTERS = ['All', 'Free', 'Premium', 'Bootcamp'];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [selectedPrice, setSelectedPrice] = useState('All');

  // Filter courses based on search query, category, and price
  const filteredCourses = useMemo(() => {
    return courseGroups.featured.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Courses' || course.category === selectedCategory;

      const matchesPrice =
        selectedPrice === 'All' ||
        (selectedPrice === 'Free' && course.price === 'Free') ||
        (selectedPrice === 'Premium' && course.badge === 'Premium') ||
        (selectedPrice === 'Bootcamp' && course.badge === 'Bootcamp');

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPrice]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All Courses' || selectedPrice !== 'All';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Courses');
    setSelectedPrice('All');
  };

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen">
      <HomeHeader />

      <main className="pt-24 pb-20">
        {/* Hero Section */}


        {/* Main Content Area with Sticky Left Filter Sidebar */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Sticky Filter Bar */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24 space-y-6 bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">filter_list</span>
                    Filters
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Reset All
                    </button>
                  )}
                </div>

                {/* Search Bar */}
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Search Courses</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">
                      search
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search title, tech..."
                      className="w-full pl-10 pr-9 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    )}
                  </div>
                </div>

                <hr className="border-outline-variant/60" />

                {/* Categories */}
                <div className="space-y-3">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Category</label>
                  <div className="space-y-1">
                    {CATEGORIES.map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${isActive
                              ? 'bg-primary text-on-primary font-bold shadow-xs'
                              : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                            }`}
                        >
                          <span>{cat}</span>
                          {isActive && <span className="material-symbols-outlined text-[16px]">check</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <hr className="border-outline-variant/60" />

                {/* Price Filter */}
                <div className="space-y-3">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Pricing Tier</label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRICE_FILTERS.map((pf) => {
                      const isActive = selectedPrice === pf;
                      return (
                        <button
                          key={pf}
                          onClick={() => setSelectedPrice(pf)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border text-center ${isActive
                              ? 'bg-primary-container text-on-primary-container border-primary'
                              : 'bg-surface-container-low border-outline-variant text-on-surface-variant hover:border-primary/50'
                            }`}
                        >
                          {pf}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 text-xs text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">workspace_premium</span>
                  <span>All courses include certificate</span>
                </div>
              </div>
            </aside>

            {/* Right Main Grid Area */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-surface-container-lowest border border-outline-variant p-4 rounded-2xl">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Course Catalog</h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Showing <span className="font-bold text-primary">{filteredCourses.length}</span> programs
                    {selectedCategory !== 'All Courses' && ` in "${selectedCategory}"`}
                  </p>
                </div>

                {hasActiveFilters && (
                  <div className="flex flex-wrap items-center gap-2">
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-xs rounded-full border border-outline-variant">
                        Search: "{searchQuery}"
                        <button onClick={() => setSearchQuery('')} className="hover:text-primary"><span className="material-symbols-outlined text-[14px]">close</span></button>
                      </span>
                    )}
                    {selectedCategory !== 'All Courses' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-xs rounded-full border border-outline-variant">
                        Cat: {selectedCategory}
                        <button onClick={() => setSelectedCategory('All Courses')} className="hover:text-primary"><span className="material-symbols-outlined text-[14px]">close</span></button>
                      </span>
                    )}
                    {selectedPrice !== 'All' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-xs rounded-full border border-outline-variant">
                        Tier: {selectedPrice}
                        <button onClick={() => setSelectedPrice('All')} className="hover:text-primary"><span className="material-symbols-outlined text-[14px]">close</span></button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Course Cards Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CatalogCard key={course.title} course={course} />
                  ))}
                </div>
              ) : (
                <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high mx-auto flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-3xl">search_off</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">No matching courses found</h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                    Try adjusting your search terms or clearing your selected category and price filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-on-primary relative overflow-hidden mt-12">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
