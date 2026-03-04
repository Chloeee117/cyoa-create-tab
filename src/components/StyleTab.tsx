import CyoaSection from './CyoaSection';

export default function StyleTab() {
  return (
    <div className="flex flex-col divide-y divide-white/5">
      {/* 상단 안내 */}
      <div className="px-4 py-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[15px] text-text-primary font-medium leading-snug">
              선택지로 몰입감 있는 스토리를
              <br />
              만들어 보세요
            </p>
            <p className="text-[12px] text-text-secondary mt-1.5 leading-relaxed">
              모델이 매 턴 선택지를 제시하여 유저가
              <br />
              스토리 방향을 직접 결정할 수 있어요
            </p>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-[13px] text-text-secondary hover:bg-white/10 transition-colors cursor-pointer">
            👁 미리보기
          </button>
        </div>
      </div>

      <CyoaSection />
    </div>
  );
}
