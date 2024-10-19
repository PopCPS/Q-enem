import { Header } from "../../components/header"
import { ProgressBar } from "./progress-bar"
import { QuestionsNav } from "./questions-nav"
import { Question } from "./question"
import { useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { set_questionIndex } from "../../store/reducers/dataReducer"

export const Questions = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(set_questionIndex(1))
  }, [])

  return (
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
  )
}