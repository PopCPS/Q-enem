import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-6 rounded-4 bg-black">
      <Logo width={170} />
      <div className="size-10 rounded-3xl bg-white"></div>
    </div>
  )
}