import { Eye, EyeOff, User } from "lucide-react"
import { Logo } from "../../components/logo"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

  const navigate = useNavigate()
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  //
  //  Criar lógica para Login 
  //

  return (
    <div className="flex items-center justify-center h-screen bg-signin bg-no-repeat bg-center bg-cover">
      <form className="flex flex-col gap-8 w-[377px] p-8 bg-transDark/50 rounded-4"> 
        <Logo width={313} />

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Usuário" 
            type="email" 
          >
            <User size={24} className="flex-shrink-0" />
          </Input>
          <Input
            placeholder="Senha"
            type={isPasswordVisible ? "text" : "password"}  
          >
            <button onClick={handlePasswordVisibility}>
              {isPasswordVisible ? (
                <Eye size={24} className="flex-shrink-0" />
              ) : (
                <EyeOff size={24} className="flex-shrink-0" />
              )}
            </button>
          </Input>
        </div>

        <div className="flex flex-col gap-3">
          <Button>
            ENTRAR
          </Button>
          <Button onClick={e => {
            e.preventDefault()
            navigate('/signup')
          }}>
            CADASTRE-SE
          </Button>
        </div>

      </form>
    </div>
  )
}