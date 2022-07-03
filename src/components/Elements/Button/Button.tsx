import clsx from "clsx";
import * as React from "react";
import { AsProps } from "../../../features/As/As.type";

export const colorVariants = {
  primary: 'bg-black bg-opacity-20 hover:bg-opacity-30',
  none: ''
}

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    AsProps {
      colorVariant?: keyof typeof colorVariants
    }

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({as, colorVariant = 'primary', ...buttonProps}, ref) => {
  const Component = as || "button";
  return (
    <Component
      ref={ref}
      {...buttonProps}
      className={clsx(
        buttonProps.className,
        "rounded-md",
        "text-white text-sm font-medium px-3 py-1.5",
        colorVariants[colorVariant]
      )}
    />
  );
});
