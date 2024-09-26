import { AtSign, EyeOff, User } from "lucide-react"
import { Input } from "../../components/input"
import { Logo } from "../../components/logo"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signup = () => {

  const navigate = useNavigate()
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-signin bg-no-repeat bg-center bg-cover">
      <form className="flex flex-col gap-8 w-[377px] p-8 bg-transDark/50 rounded-4"> 
        <Logo width={313} />

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Nome de Usuário"
            type="text"
          >
            <User size={24} className="flex-shrink-0" />
          </Input>
          <Input
            placeholder="E-mail"
            type="email"
          >
            <AtSign size={24} className="flex-shrink-0"  />
          </Input>
          <Input
            placeholder="Senha"
            type="password"
          >
            <button onClick={handlePasswordVisibility}>
              <EyeOff size={24} className="flex-shrink-0"  />
            </button>
          </Input>
          <Input
            placeholder="Confirme sua senha"
            type="password"
          >
            <button onClick={handlePasswordVisibility}>
              <EyeOff size={24} className="flex-shrink-0"  />
            </button>
          </Input>
        </div>

        <div className="flex flex-col gap-3">
          <Button>
            CRIAR CONTA
          </Button>
          <Button onClick={e => {
            e.preventDefault()
            navigate('/signin')
          }}>
            LOGIN
          </Button>
        </div>

      </form>
    </div>
  )
}