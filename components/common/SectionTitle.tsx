interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-gray-700 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
