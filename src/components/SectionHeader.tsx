interface SectionHeaderProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function SectionHeader({ title, expanded, onToggle }: SectionHeaderProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-2 cursor-pointer"
    >
      <span className="text-[15px] font-semibold text-text-primary">{title}</span>
      <svg
        className={`w-5 h-5 text-text-secondary transition-transform duration-200 ${
          expanded ? 'rotate-0' : 'rotate-180'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
