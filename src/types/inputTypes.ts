import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

export interface IRHFTextFieldProps<T extends Record<string, unknown>> {
  type?: string;
  label: string;
  name: Path<T>;
  dir?: 'ltr' | 'rtl';
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  validationSchema?: Record<string, unknown>;
  [key: string]: unknown;
}
