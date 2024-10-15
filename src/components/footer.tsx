import { Logo } from "./logo"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export const Footer = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 p-10 w-full bg-black">
        <Logo width={180} />
        <ul className="flex gap-14 text-sm text-white">
          <li>Home</li>
          <li>Questões</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <a href="/">
              <Facebook className="text-white" />
            </a>
          </li>
          <li>
            <a href="/">
              <Instagram className="text-white" />
            </a>
          </li>
          <li>
            <a href="/">
              <Linkedin className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}