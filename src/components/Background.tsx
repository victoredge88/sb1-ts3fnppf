import React from 'react';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-pink-50">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            url('https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&w=1920&q=5'),
            url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=5')
          `,
          backgroundSize: 'cover, contain',
          backgroundPosition: 'center, right top, left bottom',
          backgroundRepeat: 'no-repeat, repeat-y',
          backgroundBlendMode: 'soft-light, soft-light',
          opacity: 0.7
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}