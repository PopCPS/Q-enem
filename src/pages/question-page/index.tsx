import { Header } from "../../components/header"
import { ProgressBar } from "./progress-bar"
import { QuestionsNav } from "./questions-nav"
import { Question } from "./question"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useEffect, useState } from "react"
import { set_questionIndex } from "../../store/reducers/dataReducer"
import { LeaveModal } from "./leave-modal"
import { api } from "../../lib/axios"
import { useNavigate } from "react-router-dom"

export const Questions = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [ isAuth, setIsAuth ] = useState<boolean | null>(null)

  const isLeaveModalOpen = useAppSelector(state => state.apiData.isLeaveModalOpen)

  const pingAuth = async () => {
    await api.post('/api/ping')
    .then(response => {
      if(response.status === 200) {
        setIsAuth(true)
      }
    })
    .catch(() => {
      setIsAuth(false)
    })
  }

  useEffect(() => {
    pingAuth()
    dispatch(set_questionIndex(1))
  }, [])

  useEffect(() => {
    if(isAuth === false) {
      navigate('/')
    }
  }, [ isAuth ])

  return (
    <>
      <div className="flex flex-col items-center gap-24 p-6 min-h-screen">
        <Header />

        <div className="w-[960px] space-y-6">
          <div className="w-full space-y-2">
            <QuestionsNav />
            <ProgressBar />
          </div>

          <Question />

        </div>
      </div>
      
      {isLeaveModalOpen && (
        <LeaveModal />
      )}

    </>
  )
}