interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export default function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      {label && <span className="text-[14px] text-text-primary">{label}</span>}
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-[44px] h-[26px] rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${
          checked ? 'bg-accent' : 'bg-white/15'
        }`}
      >
        <span
          className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-200 ${
            checked ? 'translate-x-[18px]' : 'translate-x-0'
          }`}
        />
      </button>
    </label>
  );
}
