import { ButtonVariant, IButtonProps } from '@/types/buttonTypes';

const btnType: Record<ButtonVariant, string> = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  outline: 'btn--outline',
  danger: 'btn--danger',
  red: ''
};

function Button({
  children,
  onClick,
  variant = 'primary',
  className,
  ...rest
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
