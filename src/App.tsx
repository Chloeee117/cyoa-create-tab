import TabBar from './components/TabBar';
import StyleTab from './components/StyleTab';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary flex justify-center">
      <div className="w-full max-w-md bg-bg-primary min-h-screen">
        {/* 상단 헤더 */}
        <header className="flex items-center justify-between px-4 py-3">
          <button className="text-text-secondary text-[20px] cursor-pointer">✕</button>
          <div className="flex items-center gap-2">
            <button className="text-[13px] text-text-secondary cursor-pointer">•••</button>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-[13px] text-text-secondary cursor-pointer">
              임시저장
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-accent text-[13px] text-white font-medium cursor-pointer">
              등록
            </button>
          </div>
        </header>

        <TabBar />
        <StyleTab />
      </div>
    </div>
  );
}
