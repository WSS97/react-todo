import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-md-bold": "text-base leading-6 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-sm-bold": "text-sm leading-5 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface textProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: textProps) {
  console.log({ variant, className, props });

  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
