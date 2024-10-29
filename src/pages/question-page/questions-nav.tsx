import { X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { set_isLeaveModalOpen } from "../../store/reducers/dataReducer"

export const QuestionsNav = () => {

  const dispatch = useAppDispatch()

  const progress = useAppSelector(state => state.apiData.questionIndex)

  const openLeaveModal = () => {
    dispatch(set_isLeaveModalOpen(true))
  }

  return (
    <div className="flex justify-between">
      <span>{progress}/10</span>
      <button
        onClick={openLeaveModal}
      >
        <X />
      </button>
    </div>
  )
}