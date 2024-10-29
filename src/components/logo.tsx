import { ComponentProps } from "react"

interface LogoProps extends ComponentProps<'div'> {
  width: number
}

export const Logo = ({
  width,
  ...props
}: LogoProps) => {

  return (
    <div 
      {...props}
      className={`block cursor-pointer`} 
      style={{ width: `${width}px` }}
    >
      <img 
        className="w-full" 
        src="/Logo.svg" 
      />
    </div>
  )
}