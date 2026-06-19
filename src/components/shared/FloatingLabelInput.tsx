import { useState } from 'react';

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: Array<{ value: string; label: string }>;
  rows?: number;
}

export default function FloatingLabelInput({
  label,
  type = 'text',
  required = false,
  className = '',
  as = 'input',
  options = [],
  rows = 4,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: any) => setValue(e.target.value);

  const isActive = isFocused || value.length > 0;

  const baseInputClass = `w-full bg-transparent border-b border-[#2D2D2D] py-3 text-[#e4e2e1] font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] focus:outline-none focus:border-[#f2ca50] transition-all duration-500 ${className}`;

  if (as === 'textarea') {
    return (
      <div className="floating-label-group relative mb-8">
        <textarea
          className={`${baseInputClass} h-32 resize-none`}
          placeholder=" "
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          rows={rows}
        />
        <label 
          className={`absolute top-3 left-0 pointer-events-none font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#99907c] uppercase transition-all duration-300 ${
            isActive ? 'text-[10px] -top-3 text-[#f2ca50]' : ''
          }`}
        >
          {label}
        </label>
      </div>
    );
  }

  if (as === 'select') {
    return (
      <div className="floating-label-group relative mb-8">
        <select
          className={`${baseInputClass} appearance-none bg-[#1b1c1c]`}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option value="" disabled selected></option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <label 
          className={`absolute top-3 left-0 pointer-events-none font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#99907c] uppercase transition-all duration-300 ${
            isActive ? 'text-[10px] -top-3 text-[#f2ca50]' : ''
          }`}
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="floating-label-group relative mb-8">
      <input
        type={type}
        className={baseInputClass}
        placeholder=" "
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label 
        className={`absolute top-3 left-0 pointer-events-none font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#99907c] uppercase transition-all duration-300 ${
          isActive ? 'text-[10px] -top-3 text-[#f2ca50]' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
}