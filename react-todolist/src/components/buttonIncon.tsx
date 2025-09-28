import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(
  `
    inline-flex items-center justify-center cursor-pointer transition group
    `,
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-green-base)] hover:bg-[var(--color-green-dark)]",
        secondary:
          "bg-[var(--color-pink-light)] hover:bg-[var(--color-pink-dark)]",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonIconIconvariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-[var(--color-pink-base)] group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconvariants({ variant, size })} />
    </button>
  );
}
