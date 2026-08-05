import { Link } from 'react-router-dom';

function Icon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`.trim()}>{name}</span>;
}

export function CatalogCard({ course }) {
  const hasImage = !!course.image;
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-[0px_4px_20px_rgba(10,31,93,0.04)] card-hover-effect flex flex-col h-full">
      {hasImage ? (
        <div className="relative h-48">
          <img className="w-full h-full object-cover" alt={course.title} src={course.image} />
          {course.badge && (
            <div className="absolute top-4 left-4">
              <span className={`${course.badgeTone || 'bg-primary text-white'} text-label-caps font-label-caps px-3 py-1 rounded-full`}>{course.badge}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 pb-0">
          <div className="w-12 h-12 bg-ice-blue rounded-lg flex items-center justify-center text-vibrant-teal">
            <Icon name={course.icon || 'school'} className="text-[24px]" />
          </div>
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        {hasImage && (
          <div className="flex items-center gap-2 mb-4">
            <Icon name={course.icon || 'school'} className="text-vibrant-teal text-[20px]" />
            <span className="text-label-caps font-label-caps text-on-surface-variant">{course.category || 'Data Infrastructure'}</span>
          </div>
        )}
        <h3 className="font-headline-md text-headline-md text-primary mb-3">{course.title}</h3>
        {course.description && (
          <p className="text-body-md text-on-surface-variant mb-3 line-clamp-2">{course.description}</p>
        )}
        {course.enrolled && (
          <div className="flex items-center text-on-surface-variant text-xs mb-4">
            <Icon name="group" className="text-[16px] mr-1.5 text-vibrant-teal" />
            <span className="text-label-caps font-label-caps">{course.enrolled}</span>
          </div>
        )}
        <div className="mt-auto">
          <div className="flex items-center justify-between py-4 border-y border-outline-variant/30 mb-6">
            <div className="flex items-center text-on-surface-variant">
              <Icon name="schedule" className="text-[18px] mr-1.5" />
              <span className="text-label-caps font-label-caps">{course.hours}</span>
            </div>
            <span className={course.price === 'Free' ? 'text-[20px] font-bold text-vibrant-teal uppercase' : 'text-[20px] font-bold text-primary'}>{course.price}</span>
          </div>
          <Link to={course.path || '/courses'} className="block text-center w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
            {course.price === 'Free' ? 'Enroll Now' : 'View Details'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function StatCard({ stat }) {
  return (
    <div className="text-center">
      <div className="text-display-xl font-display-xl text-amber-gold mb-2">{stat.value}</div>
      <div className="text-label-caps font-label-caps opacity-70 tracking-widest">{stat.label}</div>
    </div>
  );
}
