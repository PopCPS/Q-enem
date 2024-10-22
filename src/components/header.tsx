import { useNavigate } from "react-router-dom"
import { Logo } from "./logo"
import { ChevronDown, User } from "lucide-react"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Button } from "./button"

export const Header = () => {

  const navigate = useNavigate()
  const [ isAuth, setIsAuth ] = useState<boolean>(false)
  const [ isDropDownOpen, setIsDropDownOpen ] = useState<boolean>(false)
  const [ userProfilePic, setUserProfilePic ] = useState<string | null>(null) 

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
    navigate('/perfil')
  }

  const navToLogin = () => {
    navigate('/login')
  }

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const checkAuth = async () => {
    await api.post('/api/ping')
    .then(response => {
      if(response.status == 200) {
        setIsAuth(true)
      }
    })
  }

  const getUserData = async () => {
    await api.get('/api/user')
    .then(response => {
      setUserProfilePic(response.data.image)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const logout = async () => {
    await api.post('/api/logout')
    .then(() => {
      setIsAuth(false)
      navigate('/')
    })
  }

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    getUserData()
  }, [ isAuth ])

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 rounded-4 bg-black">
      <Logo onClick={navToHome} width={170} />
      <div className="flex gap-5 relative">
        <button
          onClick={navToQuestions} 
          className="w-20 text-white shrink-0 hover:font-bold">
          Estudar
        </button>
        <button
          onClick={navToAboutUs}  
          className="w-20 text-white shrink-0 hover:font-bold">
          Sobre nós
        </button>
        {isAuth ? (
          <>
            <button 
              onClick={handleDropDown}
              className="flex items-center gap-2"
            >
              {userProfilePic ? (
                <div className="size-10 rounded-3xl bg-center bg-cover" style={{ backgroundImage: `url(${userProfilePic})`}} />
              ) : (
                <div className="flex items-center justify-center size-10 rounded-3xl bg-white">
                  <User className="flex-1" />
                </div>
              )}
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
                <button onClick={logout}>
                  Desconectar
                </button>
              </li>
            </ul>
          </>
        ) : (
          <div className="w-20">
            <Button onClick={navToLogin}>
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}