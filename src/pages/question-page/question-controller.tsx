import { Button } from "../../components/button"

interface QuestionControllerProps {
  progress: number
  setProgress: (arg: number) => void
}

export const QuestionController = ({
  progress,
  setProgress
}: QuestionControllerProps) => {

  const nextQuestion = () => {
    if(progress > 9) {
      return
    }
    setProgress(progress + 1)
  }

  const previousQuestion = () => {
    if(progress < 2) {
      return
    }
    setProgress(progress - 1)
  }

  return (
    <div className="flex justify-between w-full">
      <Button
        size="small"
        disabled={progress == 1 ? true : false}
        onClick={previousQuestion}
      >
        Anterior
      </Button>
      {progress == 10 ? (
        <Button
          size="small"
          onClick={nextQuestion}
        >
          Finalizar
        </Button>
      ) : (
        <Button
          size="small"
          onClick={nextQuestion}
        >
          Próxima
        </Button>
      )}
    </div>
  )
}