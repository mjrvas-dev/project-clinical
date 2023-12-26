import React from 'react';

export function Label({ children, ...props }) {
  return (
    <label
      className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
