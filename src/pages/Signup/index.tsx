import { AtSign, Eye, EyeOff, User } from "lucide-react"
import { Input } from "../../components/input"
import { Logo } from "../../components/logo"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { FormEvent, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import axios, { AxiosError } from "axios"
import { LoadingModal } from "../../components/loading-modal"

export const Signup = () => {

  const navigate = useNavigate()

  const [ isAuth, setIsAuth ] = useState<boolean>(false)

  const [ user, setUser ] = useState<string | null>(null)
  const [ email, setEmail ] = useState<string | null>(null)
  const [ pass, setPass ] = useState<string | null>(null)
  const [ repPass, setRepPass ] = useState<string | null>(null)

  const [ isErrorUser, setIsErrorUser ] = useState<boolean>(false)
  const [ isErrorEmail, setIsErrorEmail  ] = useState<boolean>(false)
  const [ isErrorPass, setIsErrorPass  ] = useState<boolean>(false)
  const [ isErrorRepPass, setIsErrorRepPass  ] = useState<boolean>(false)

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

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    let hasError = false
    setErrorMessage(null)

    if(!user) {
      setIsErrorUser(true)
      setErrorMessage('Todos os campos devem ser preenchidos')
      hasError = true
    }
    if(user && user.length < 4){
      setIsErrorUser(true)
      setErrorMessage('Nome de usuário deve ter no mínimo 4 caracteres')
      hasError = true
    }
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
    if(pass && pass.length < 8) {
      setIsErrorPass(true)
      setErrorMessage('Senha deve ter no mínimo 8 caracteres')
      hasError = true
    }
    if(!repPass) {
      setIsErrorRepPass(true)
      setErrorMessage('Todos os campos devem ser preenchidos')
      hasError = true
    }
    if(pass !== repPass) {
      setIsErrorPass(true)
      setIsErrorRepPass(true)
      setErrorMessage('Senhas não são iguais')
      hasError = true
    }
    
    if(hasError) {
      setIsLoading(false)
      return
    }

    await api.post('/api/register', {
      name: user,
      email: email,
      password: pass
    }).catch((error: Error | AxiosError) => {
      setIsLoading(false)
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.error) 
      }
      return
    })  

    await api.post('/api/login', {
      email: email,
      password: pass,
    }).catch((error: Error | AxiosError) => {
      setIsLoading(false)
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.error) 
      }
      navigate('/login')
    })

    navigate('/home')

  }

  const pingAuth = async () => {
    await api.post('/api/ping')
    .then(response => {
      if(response.status === 200) {
        setIsAuth(true)
      }
    })
  }

  useEffect(() => {
    pingAuth()
  })

  useEffect(() => {
    console.log('first')
    navigate('/')
  }, [ isAuth ])

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-signin bg-no-repeat bg-center bg-cover">
        <form 
          onSubmit={e => register(e)} 
          className="flex flex-col gap-8 w-[377px] p-8 bg-transDark/50 rounded-4"
        > 
          <Logo width={313} />

          <p className="text-center text-red-600">{errorMessage}</p>

          <div className="flex flex-col gap-3">
            <Input
              placeholder="Nome de Usuário"
              type="text"
              error={isErrorUser}
              onChange={e => setUser(e.currentTarget.value)}
              onFocus={() => setIsErrorUser(false)}
            >
              <User size={24} className="flex-shrink-0" />
            </Input>
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
              <button tabIndex={-1} onClick={e => {
                e.preventDefault()
                handlePasswordVisibility()
              }}>
                {isPasswordVisible ? (
                <Eye size={24} className="flex-shrink-0" />
              ) : (
                <EyeOff size={24} className="flex-shrink-0" />
              )}
              </button>
            </Input>
            <Input
              placeholder="Confirme sua senha"
              type={isPasswordVisible}
              error={isErrorRepPass}
              onChange={e => setRepPass(e.currentTarget.value)}
              onFocus={() => setIsErrorRepPass(false)}
            >
              <button tabIndex={-1} onClick={e => {
                e.preventDefault()
                handlePasswordVisibility()
              }}>
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
              CRIAR CONTA
            </Button>
            <Button onClick={e => {
              e.preventDefault()
              navigate('/login')
            }}>
              LOGIN
            </Button>
          </div>

        </form>
      </div>
      {isLoading && (
        <LoadingModal />
      )}
    </>
  )
}