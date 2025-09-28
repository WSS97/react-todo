import React, { Children } from "react";
import { type VariantProps, cva } from "class-variance-authority";

export const cardVariants = cva(
  `
    rounded-lg border-solid border-gray-200
    bg-white shadow-[var(--shadow-sm)]
    `,
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

interface cardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: cardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
