import { useNavigate } from "react-router-dom"
import { Logo } from "./logo"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const Header = () => {

  const navigate = useNavigate()
  const [ isDropDownOpen, setIsDropDownOpen ] = useState<boolean>(false)

  const navToHome = () => {
    navigate('/home')
  }

  const navToQuestions = () => {
    navigate('/questoes')
  }

  const navToAboutUs = () => {
    navigate('/sobre')
  }

  const navToProfile = () => {
    console.log('fa')
    navigate('/perfil')
  }

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }


  return (
    <div className="flex justify-between items-center w-full h-20 px-6 rounded-4 bg-black">
      <Logo onClick={navToHome} width={170} />
      <div className="flex gap-5 relative">
        <button
          onClick={navToQuestions} 
          className="w-20 text-white hover:font-bold">
          Estudar
        </button>
        <button
          onClick={navToAboutUs}  
          className="w-20 text-white hover:font-bold">
          Sobre nós
        </button>
        <button 
          onClick={handleDropDown}
          className="flex items-center gap-2"
        >
          <div className="size-10 rounded-3xl bg-white" />
          <ChevronDown className={`text-white transition-all duration-500 ${isDropDownOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
          <ul className={`absolute flex flex-col items-center justify-center -right-6 top-10 p-2 rounded-4 text-center divide-y overflow-hidden transition-all duration-500 bg-black ${isDropDownOpen ? 'h-24 z-10' : 'h-0 -z-10'}`}>
            <li className={`text-white p-2 transition-all overflow-hidden duration-500 ${isDropDownOpen ? 'h-10' : 'h-0'}`}>
              <button
                onClick={navToProfile}
              >
                Seu perfil
              </button>
            </li>
            <li className={`text-white p-2 transition-all overflow-hidden duration-500 ${isDropDownOpen ? 'h-10' : 'h-0'}`}>
              <button>
                Desconectar
              </button>
            </li>
          </ul>
      </div>
    </div>
  )
}