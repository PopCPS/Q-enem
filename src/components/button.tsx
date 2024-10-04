import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: "flex items-center justify-center py-4 text-xl rounded-4 font-bold text-white",

  variants: {
    size: {
      full: "w-full",
      small: "p-4"
    },
    disabled: {
      true: 'bg-cyanDisabled',
      false: 'bg-cyan'
    }
  },

  defaultVariants: {
    size: 'full',
    disabled: false
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export const Button = ({
  children,
  size,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ size, disabled })}>
      {children}
    </button>
  )
}