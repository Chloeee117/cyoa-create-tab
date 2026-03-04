import type { ReactNode } from 'react';

export function renderStyledText(text: string): ReactNode[] {
  const parts = text.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      const innerText = part.slice(1, -1);
      return (
        <span key={index} className="italic" style={{ opacity: 0.55 }}>
          {innerText}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
