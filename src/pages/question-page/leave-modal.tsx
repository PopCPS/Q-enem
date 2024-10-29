import { X } from "lucide-react"
import { Button } from "../../components/button"
import { useAppDispatch } from "../../store/hooks"
import { set_isLeaveModalOpen } from "../../store/reducers/dataReducer"
import { useNavigate } from "react-router-dom"

export const LeaveModal = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const closeModal = () => {
    dispatch(set_isLeaveModalOpen(false))
  }
  
  const navToHome = () => {
    navigate('/')
  }

  return (
    <>
      <div className="inset-0 absolute bg-black bg-opacity-60 flex items-center justify-center z-20">
        <div className="flex flex-col gap-6 p-6 rounded-4 w-[550px] bg-white">
          <div className="flex justify-between items-center">
            <span className="text-2xl">Deseja sair das questões?</span>
            <X size={32} onClick={closeModal} />
          </div>
          <div className="w-full h-px bg-gray-200" />
          <p>Seu progresso não será salvo</p>
          <div className="w-full h-px bg-gray-200" />
          <div className="flex items-center justify-end gap-3">
            <Button variant="danger" onClick={closeModal}>
              Cancelar
            </Button>
            <Button onClick={navToHome}>
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}