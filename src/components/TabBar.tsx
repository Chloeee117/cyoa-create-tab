import { useState } from 'react';

const tabs = ['프롬프트', '로어북', '스타일', '인트로', '소개', '설정'];

export default function TabBar() {
  const [active, setActive] = useState('스타일');

  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`text-[14px] whitespace-nowrap pb-1 transition-colors cursor-pointer ${
            active === tab
              ? 'text-text-primary border-b-2 border-accent font-medium'
              : 'text-text-secondary'
          }`}
        >
          {tab === '프롬프트' && <span className="text-red-400 mr-0.5">*</span>}
          {tab === '인트로' && <span className="text-red-400 mr-0.5">*</span>}
          {tab}
        </button>
      ))}
    </div>
  );
}
