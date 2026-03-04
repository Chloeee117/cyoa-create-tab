import type { CyoaChoice } from '../data/cyoaSamples';
import { renderStyledText } from '../utils/renderStyledText';

interface CyoaPreviewProps {
  choices: CyoaChoice[];
  style: 'hybrid' | 'dialogue';
}

export default function CyoaPreview({ choices, style }: CyoaPreviewProps) {
  return (
    <div className="mt-3 rounded-xl bg-bg-secondary border border-white/5 p-3">
      <div className="text-[11px] text-text-secondary mb-2 uppercase tracking-wider">
        미리보기
      </div>
      <div className="flex flex-col gap-1.5">
        {choices.map((choice) => (
          <div
            key={choice.index}
            className="w-full text-left text-[13px] leading-[1.6]
              px-3 py-2 rounded-xl break-words
              border border-border-choice bg-bg-choice"
          >
            <span className="text-text-primary">
              {style === 'dialogue' ? renderStyledText(choice.text) : choice.text}
            </span>
          </div>
        ))}
        <div
          className="w-full text-center text-[12px] leading-[1.4]
            px-3 py-1.5 rounded-xl
            border border-white/10 bg-white/[0.03]
            text-text-secondary"
        >
          ✏️ 직접 입력
        </div>
      </div>
    </div>
  );
}
