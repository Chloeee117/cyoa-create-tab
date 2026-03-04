import { useState } from 'react';
import SectionHeader from './SectionHeader';
import ToggleSwitch from './ToggleSwitch';

interface StatusItem {
  icon: string;
  label: string;
  defaultOn: boolean;
}

const bgItems: StatusItem[] = [
  { icon: '📅', label: '날짜', defaultOn: true },
  { icon: '🕐', label: '시간', defaultOn: true },
  { icon: '📍', label: '장소', defaultOn: true },
  { icon: '🌤', label: '날씨', defaultOn: false },
  { icon: '🔮', label: '상황', defaultOn: false },
];

const charItems: StatusItem[] = [
  { icon: '😊', label: '기분', defaultOn: false },
  { icon: '👗', label: '컨디션', defaultOn: false },
  { icon: '💎', label: '착장', defaultOn: false },
];

export default function StatusBarSection() {
  return (
    <>
      <StatusGroup title="배경 상태창" items={bgItems} />
      <StatusGroup title="캐릭터 상태창" items={charItems} />
    </>
  );
}

function StatusGroup({ title, items }: { title: string; items: StatusItem[] }) {
  const [expanded, setExpanded] = useState(true);
  const [toggles, setToggles] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((item) => [item.label, item.defaultOn]))
  );

  return (
    <section className="px-4">
      <SectionHeader
        title={title}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      {expanded && (
        <div className="pb-4 space-y-1">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[16px]">{item.icon}</span>
                <span className="text-[14px] text-text-primary">{item.label}</span>
              </div>
              <ToggleSwitch
                checked={toggles[item.label]}
                onChange={(val) =>
                  setToggles((prev) => ({ ...prev, [item.label]: val }))
                }
              />
            </div>
          ))}

          {title === '배경 상태창' && toggles['날짜'] && (
            <DateFormatPicker />
          )}
        </div>
      )}
    </section>
  );
}

function DateFormatPicker() {
  const [format, setFormat] = useState<'date' | 'elapsed'>('date');

  return (
    <div className="flex gap-2 mt-2 ml-6">
      <button
        onClick={() => setFormat('date')}
        className={`px-4 py-1.5 rounded-lg text-[13px] transition-all cursor-pointer ${
          format === 'date'
            ? 'bg-accent text-white'
            : 'bg-white/5 text-text-secondary hover:bg-white/10'
        }`}
      >
        연월일
      </button>
      <button
        onClick={() => setFormat('elapsed')}
        className={`px-4 py-1.5 rounded-lg text-[13px] transition-all cursor-pointer ${
          format === 'elapsed'
            ? 'bg-accent text-white'
            : 'bg-white/5 text-text-secondary hover:bg-white/10'
        }`}
      >
        경과 일차
      </button>
    </div>
  );
}
