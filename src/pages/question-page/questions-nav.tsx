import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface QuestionsNavProps {
  progress: number
}

export const QuestionsNav = ({
  progress
}: QuestionsNavProps) => {

  const navigate = useNavigate()

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