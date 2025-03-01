import { btnType } from "@/components/ui/ButtonIcon";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'red'
  | 'danger';

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant: ButtonVariant;
}

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: keyof typeof btnType;
}
