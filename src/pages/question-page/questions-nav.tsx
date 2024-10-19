import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../store/hooks"

export const QuestionsNav = () => {

  const navigate = useNavigate()

  const progress = useAppSelector(state => state.apiData.questionIndex)

  const leaveQuestions = () => {
    navigate('/')
  }

  return (
    <div className="flex justify-between">
      <span>{progress}/10</span>
      <button
        onClick={leaveQuestions}
      >
        <X />
      </button>
    </div>
  )
}