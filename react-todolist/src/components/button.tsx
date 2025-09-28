import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `
    cursor-pointer
    transition rounded-lg group gap-2
    `,
  {
    variants: {
      variant: {
        primary: "bg-gray200 hover:bg-[var(--color-pink-light)]",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-[var(--color-pink-base)]",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  children,
  className,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonIconVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
