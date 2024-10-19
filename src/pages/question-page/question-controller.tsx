import { Button } from "../../components/button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { set_questionIndex } from "../../store/reducers/dataReducer"

export const QuestionController = () => {

  const dispatch = useAppDispatch()
  const progress = useAppSelector(state => state.apiData.questionIndex)

  const nextQuestion = () => {
    if(progress > 9) {
      return
    }
    dispatch(set_questionIndex(progress + 1))
  }

  const previousQuestion = () => {
    if(progress < 2) {
      return
    }
    dispatch(set_questionIndex(progress - 1))
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