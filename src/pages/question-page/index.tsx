import { useState } from "react"
import { Header } from "../../components/header"
import { ProgressBar } from "./progress-bar"

export const Questions = () => {

  const [ progress, setProgress ] = useState<number>(1)

  return (
    <div className="p-6">
      <Header />

      <div>
        <ProgressBar progress={progress} />
        <button onClick={() => setProgress(progress + 1)}>+</button>
        <button onClick={() => setProgress(progress - 1)}>-</button>
      </div>
    </div>
  )
}