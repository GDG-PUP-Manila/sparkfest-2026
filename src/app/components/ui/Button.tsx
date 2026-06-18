import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  // We use CSS variables for the 3D pixel bevel to keep it reusable.
  // The default colors match the requested Figma highlight (#FFF085) and shadow (#D08700).
  return (
    <button
      className={`group relative z-0 inline-flex items-center gap-2 border-4 border-navy-900 px-4 py-3 font-pixel text-[9px] hover:brightness-110 active:scale-95 transition-all ${className}`}
      style={{
        boxShadow: "inset 4px 4px 0px var(--btn-hl, #FFF085), inset -4px -4px 0px var(--btn-sh, #D08700)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
