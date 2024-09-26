import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className="flex items-center justify-center w-full py-4 text-xl rounded-4 font-bold text-white bg-cyan">
      {children}
    </button>
  )
}