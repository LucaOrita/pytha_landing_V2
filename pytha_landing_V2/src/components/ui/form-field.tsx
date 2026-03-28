'use client';

import * as React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
}

interface InputFieldProps extends FormFieldProps {
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputField({
  label, name, required, error, type = 'text', placeholder, value, onChange, className,
}: InputFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={name}>
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  );
}

interface SelectFieldProps extends FormFieldProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SelectField({
  label, name, required, error, options, value, onChange, placeholder, className,
}: SelectFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={name}>
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </Label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-label={label}
        className="dark:bg-input/30 border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:opacity-50 md:text-sm"
      >
        <option value="">{placeholder || 'Selecteaza...'}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  );
}

interface TextareaFieldProps extends FormFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextareaField({
  label, name, required, error, placeholder, value, onChange, className,
}: TextareaFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={name}>
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  );
}

interface RadioFieldProps extends FormFieldProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioField({
  label, name, required, error, options, value, onChange, className,
}: RadioFieldProps) {
  return (
    <fieldset className={cn('space-y-2', className)}>
      <legend className="text-sm font-medium leading-none">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </legend>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="accent-secondary size-4"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error && <p className="text-destructive text-xs">{error}</p>}
    </fieldset>
  );
}

interface CheckboxGroupProps extends FormFieldProps {
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
}

export function CheckboxGroup({
  label, name, required, error, options, values, onChange, className,
}: CheckboxGroupProps) {
  const toggle = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  return (
    <fieldset className={cn('space-y-2', className)}>
      <legend className="text-sm font-medium leading-none">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </legend>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {options.map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              checked={values.includes(opt.value)}
              onChange={() => toggle(opt.value)}
              className="accent-secondary size-4 rounded"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error && <p className="text-destructive text-xs">{error}</p>}
    </fieldset>
  );
}
