import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";

export const inputCheckboxWrapperVariants = cva(
  `
        inline-flex items-center justify-center relative group cursor-pointer
    `
);

export const inputCheckboxVariants = cva(
  `
        appearance-none peer flex items-center justify-center cursor-pointer
        border-2 border-solid transition overflow-hidden border-[var(--color-green-base)]
        hover:border-[var(--color-green-dark)] hover:bg-[var(--color-green-dark)]/20
        checked:border-[var(--color-green-base)] checked:bg-[var(--color-green-base)]
        group-hover:checked:border-[var(--color-green-dark)] group-hover:checked:bg-[var(--color-green-dark)]
    `,
  {
    variants: {
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

export const inputCheckboxIconVariants = cva(
  `
        absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white
    `,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
