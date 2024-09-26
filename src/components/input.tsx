import { ComponentProps, ReactNode } from "react"

interface InputProps extends ComponentProps<'input'>{
  children: ReactNode
}

export const Input = ({
  children,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center px-2.5 gap-4 rounded-4 h-[50px] bg-white">
      {children}
      <input 
        {...props}
        className="focus:outline-none text-xl bg-transparent"
      />
    </div>
  )
}