import { useState } from "react"
import { Header } from "../../components/header"
import { ProgressBar } from "./progress-bar"
import { QuestionsNav } from "./questions-nav"
import { QuestionController } from "./question-controller"
import { Question } from "./question"

export const Questions = () => {

  const [ progress, setProgress ] = useState<number>(1)

  return (
    <div className="flex flex-col items-center gap-24 p-6 min-h-screen">
      <Header />

      <div className="w-[960px] space-y-6">
        <div className="w-full space-y-2">
          <QuestionsNav progress={progress} />
          <ProgressBar progress={progress} />
        </div>

        <Question progress={progress} />

        <QuestionController 
          progress={progress} 
          setProgress={setProgress} 
        />
      </div>
    </div>
  )
}