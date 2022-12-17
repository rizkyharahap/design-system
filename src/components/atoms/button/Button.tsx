import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ loading = false, className = "", children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={`rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
