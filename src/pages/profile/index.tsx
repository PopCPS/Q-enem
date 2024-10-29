import { useEffect, useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Pencil, User } from "lucide-react"
import { api } from "../../lib/axios"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"

export const Profile = () => {

  const navigate = useNavigate()

  const [ userName, setUserName ] = useState<string | null>(null) 
  const [ userEmail, setUserEmail ] = useState<string | null>(null) 
  const [ userProfilePic, setUserProfilePic ] = useState<string | null>(null) 

  const getUserData = async () => {
    await api.get('/api/user')
    .then(response => {
      setUserName(response.data.name)
      setUserEmail(response.data.email)
      setUserProfilePic(response.data.image)
    })
    .catch(() => {
      navigate('/login')
    })
  }

  useEffect(() => {
    getUserData()
  })

  return (
    <>
      <div className="p-6 space-y-6">
        <Header isActive={true} />

        <div className="flex justify-center w-full rounded-4 bg-black">
          <div className="flex flex-col items-center gap-6 p-6 w-[500px]">
            <button className="group relative flex items-center justify-center">
              {userProfilePic ? (
                <div className="size-64 rounded-full bg-center bg-cover" style={{ backgroundImage: `url(${userProfilePic})`}} />
              ) : (
                <div className="flex items-center justify-center size-64 rounded-full bg-white">
                  <User size={100} className="flex-1" />
                </div>
              )}
              <div className="rounded-full p-6 absolute hidden border border-black bg-white group-hover:block">
                <Pencil size={30} />
              </div>
            </button>

            <div className="flex flex-col items-center justify-center p-4 w-full rounded-4 text-white bg-gray-800">
                <div className="flex justify-between w-full">
                  <span className="max-w-[150px] truncate">Nome de usuário:</span>
                  <span>{userName}</span>
                </div>
                <div className="flex justify-between w-full">
                  <span className="max-w-[150px] truncate">E-mail:</span>
                  <span>{userEmail}</span>
                </div>
            </div>

            <Button>
              Trocar Senha
            </Button>
            <Button>
              Excluir Conta
            </Button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}