export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'red' | 'danger';

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant: ButtonVariant;
}
