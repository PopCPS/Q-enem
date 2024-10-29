import { Button } from "../../components/button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { set_isFinishModalOpen, set_questionIndex } from "../../store/reducers/dataReducer"

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
        type="reset"
        size="small"
        variant={progress == 1 ? 'disabled' : 'enabled'}
        onClick={previousQuestion}
      >
        Anterior
      </Button>
      {progress == 10 ? (
        <Button
          type="reset"
          size="small"
          onClick={() => dispatch(set_isFinishModalOpen(true))}
        >
          Finalizar
        </Button>
      ) : (
        <Button
          type="reset"
          size="small"
          onClick={nextQuestion}
        >
          Próxima
        </Button>
      )}
    </div>
  )
}