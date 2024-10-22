import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"

const inputVariants = tv({
  base: "flex items-center px-2.5 gap-4 rounded-4 h-[50px] bg-white",

  variants: {
    error: {
      true: 'border-2 border-red-600',
      false: 'border-2 border-transparent',
    },
  },

  defaultVariants: {
    error: false, 
  } 
})

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants>{
  children: ReactNode
}

export const Input = ({
  children,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={inputVariants({ error })}>
      {children}
      <input 
        {...props}
        className="focus:outline-none size-full truncate text-xl bg-transparent"
      />
    </div>
  )
}