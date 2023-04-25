import { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary text-white px-8 py-2 rounded hover:bg-opacity-90 ${className}`}
      {...rest}
    />
  );
}
