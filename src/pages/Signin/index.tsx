import { AtSign, Eye, EyeOff, User } from "lucide-react"
import { Logo } from "../../components/logo"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios, { AxiosError } from "axios"
import { api } from "../../lib/axios"

export const SignIn = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState<string | null>(null)
  const [ pass, setPass ] = useState<string | null>(null)

  const [ isErrorEmail, setIsErrorEmail  ] = useState<boolean>(false)
  const [ isErrorPass, setIsErrorPass  ] = useState<boolean>(false)

  const [ errorMessage, setErrorMessage ] = useState<string | null>(null)
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ isPasswordVisible, setIsPasswordVisible ] = useState<string>("text")

  const handlePasswordVisibility = () => {
    if(isPasswordVisible == "text") {
      setIsPasswordVisible("password")
    }
    if(isPasswordVisible == "password") {
      setIsPasswordVisible("text")
    }
  }

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    let hasError = false
    setErrorMessage(null)

    if(!email) {
      setIsErrorEmail(true)
      setErrorMessage('Todos os campos devem ser preenchidos')
      hasError = true
    }

    if(!pass) {
      setIsErrorPass(true)
      setErrorMessage('Todos os campos devem ser preenchidos')
      hasError = true
    }

    if(hasError) {
      setIsLoading(false)
      return
    }

    await api.post('/api/login', {
      email: email,
      password: pass,
    }).catch((error: Error | AxiosError) => {
      setIsLoading(false)
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.error) 
      }
      return
    })

    navigate('/home')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-signin bg-no-repeat bg-center bg-cover">
      <form 
        onSubmit={e => login(e)} 
        className="flex flex-col gap-8 w-[377px] p-8 bg-transDark/50 rounded-4"
      > 

        <Logo width={313} />

        <p className="text-center text-red-600">{errorMessage}</p>

        <div className="flex flex-col gap-3">
          <Input
            placeholder="E-mail"
            type="email"
            error={isErrorEmail}
            onChange={e => setEmail(e.currentTarget.value)}
            onFocus={() => setIsErrorEmail(false)}
          >
            <AtSign size={24} className="flex-shrink-0" />
          </Input>
          <Input
            placeholder="Senha"
            type={isPasswordVisible}
            error={isErrorPass}
            onChange={e => setPass(e.currentTarget.value)}
            onFocus={() => setIsErrorPass(false)} 
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
          <Button type="submit">
            ENTRAR
          </Button>
          <Button onClick={e => {
            e.preventDefault()
            navigate('/cadastro')
          }}>
            CADASTRE-SE
          </Button>
        </div>

      </form>
    </div>
  )
}