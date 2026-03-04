import { useState } from 'react';
import SectionHeader from './SectionHeader';
import ToggleSwitch from './ToggleSwitch';
import CyoaPreview from './CyoaPreview';
import { hybridChoices, dialogueChoices } from '../data/cyoaSamples';

type CyoaStyle = 'hybrid' | 'dialogue';

export default function CyoaSection() {
  const [expanded, setExpanded] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [style, setStyle] = useState<CyoaStyle>('hybrid');

  return (
    <section className="px-4">
      <SectionHeader
        title="선택지 (CYOA)"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      {expanded && (
        <div className="pb-4">
          <ToggleSwitch
            checked={enabled}
            onChange={setEnabled}
            label="선택지 모드"
          />

          {enabled && (
            <div className="mt-4 space-y-3">
              <div className="space-y-2">
                <RadioOption
                  selected={style === 'hybrid'}
                  onSelect={() => setStyle('hybrid')}
                  label="키워드형"
                  description="선택지의 방향만 짧게 보여주고, AI가 장면으로 풀어줘요"
                />
                <RadioOption
                  selected={style === 'dialogue'}
                  onSelect={() => setStyle('dialogue')}
                  label="문장형"
                  description="유저의 다음 행동을 문장으로 바로 보여줘요"
                />
              </div>

              <CyoaPreview
                choices={style === 'hybrid' ? hybridChoices : dialogueChoices}
                style={style}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function RadioOption({
  selected,
  onSelect,
  label,
  description,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  description: string;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
        selected
          ? 'border-accent bg-accent/10'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            selected ? 'border-accent' : 'border-white/30'
          }`}
        >
          {selected && <div className="w-[10px] h-[10px] rounded-full bg-accent" />}
        </div>
        <div>
          <div className="text-[14px] text-text-primary font-medium">{label}</div>
          <div className="text-[12px] text-text-secondary mt-0.5">{description}</div>
        </div>
      </div>
    </button>
  );
}
