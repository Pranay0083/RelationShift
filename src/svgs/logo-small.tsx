import React from 'react';
import { MessageSquareMore, Zap, Bot } from 'lucide-react';

export function LogoSmall({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <div className={`inline-flex items-center gap-0.5 relative ${className}`}>
      <MessageSquareMore
        size={size}
        className="text-blue-500"
        strokeWidth={1.5}
      />
      <Bot
        size={size * 0.8}
        className="text-slate-600 absolute left-1/2 -translate-x-1/2"
        strokeWidth={1.5}
      />
      <Zap
        size={size * 0.7}
        className="text-yellow-400 absolute -top-1 -right-1"
        strokeWidth={2}
      />
    </div>
  );
}