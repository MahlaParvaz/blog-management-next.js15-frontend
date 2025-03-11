import { btnType } from '@/components/ui/ButtonIcon';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'red';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

// export interface IButtonProps {
//   children: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   className?: string;
//   variant: ButtonVariant;
// }

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: keyof typeof btnType;
}
