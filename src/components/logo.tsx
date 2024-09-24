interface LogoProps {
  width: number
}

export const Logo = ({
  width
}: LogoProps) => {
  return (
    <div className={`block`} style={{ width: `${width}px` }}>
      <img 
        className="w-full" 
        src="/Logo.svg" 
      />
    </div>
  )
}