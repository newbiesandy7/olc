function Icon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`.trim()}>{name}</span>;
}

export function SubNav({ links }) {
  return (
    <nav className="sticky top-20 z-40 bg-surface-bright/90 backdrop-blur-lg border-b border-outline-variant">
      <div className="px-margin-desktop max-w-container-max mx-auto flex overflow-x-auto no-scrollbar py-4 space-x-12">
        {links.map((link) => (
          <a
            key={link.label}
            className={link.active ? 'text-deep-navy font-bold border-b-2 border-deep-navy whitespace-nowrap' : `text-slate-gray hover:text-deep-navy transition-colors whitespace-nowrap${link.mobileOnly ? ' lg:hidden' : ''}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function SectionHeading({ title, description }) {
  return (
    <div className="mb-10">
      <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">{title}</h2>
      <p className="text-slate-gray text-body-lg">{description}</p>
    </div>
  );
}

export function SyllabusAccordion({ module }) {
  return (
    <details className="syllabus-accordion group border border-outline-variant rounded-xl overflow-hidden bg-white shadow-sm" open={module.defaultOpen}>
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-ice-blue/50 transition-colors">
        <div className="flex items-center space-x-4">
          <span className="bg-deep-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{module.number}</span>
          <div>
            <h3 className="font-headline-md text-headline-md text-deep-navy">{module.title}</h3>
            <p className="text-label-caps text-slate-gray">{module.meta}</p>
          </div>
        </div>
        <span className="material-symbols-outlined arrow-icon transition-transform duration-300">expand_more</span>
      </summary>
      <div className="p-6 pt-0 border-t border-outline-variant bg-surface-container-low/30">
        <ul className="space-y-4 text-body-md text-on-surface-variant">
          {module.points.map((point) => (
            <li key={point} className="flex items-start space-x-3">
              <Icon name="check_circle" className="text-vibrant-teal text-[20px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-outline-variant shadow-sm hover:shadow-xl transition-all">
      <div className="aspect-video rounded-xl bg-ice-blue mb-6 overflow-hidden">
        <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.image} />
      </div>
      <h4 className="font-headline-md text-headline-md text-deep-navy mb-2">{project.title}</h4>
      <p className="text-on-surface-variant text-body-md mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HighlightItem({ highlight }) {
  return (
    <li className="flex items-start space-x-4">
      <div className="bg-ice-blue p-3 rounded-xl">
        <Icon name={highlight.icon} className="text-vibrant-teal" />
      </div>
      <div>
        <h4 className="font-bold text-deep-navy">{highlight.title}</h4>
        <p className="text-slate-gray text-sm">{highlight.copy}</p>
      </div>
    </li>
  );
}

export function MetaRow({ item }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-slate-gray">{item.label}</span>
      <span className="font-bold">{item.value}</span>
    </div>
  );
}

export function TestimonialCard({ testimonial }) {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-sm pt-12">
      <img alt={testimonial.name} className="absolute -top-6 left-8 w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" src={testimonial.image} />
      <p className="text-slate-gray italic mb-6">"{testimonial.quote}"</p>
      <h4 className="font-bold text-deep-navy">{testimonial.name}</h4>
      <p className="text-vibrant-teal text-sm">{testimonial.role}</p>
    </div>
  );
}

export function FaqItem({ faq }) {
  return (
    <details className="group p-6 border border-outline-variant rounded-xl bg-white cursor-pointer">
      <summary className="font-bold text-deep-navy flex justify-between items-center list-none">
        {faq.question}
        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
      </summary>
      <p className="mt-4 text-slate-gray">{faq.answer}</p>
    </details>
  );
}
