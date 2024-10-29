import { useEffect, useState } from "react"
import { enem } from "../../lib/axios"
import { QuestionInterface } from "../../lib/interfaces"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { QuestionController } from "./question-controller"
import { LoadingModal } from "../../components/loading-modal"
import { set_answerArray } from "../../store/reducers/dataReducer"

export const Question = () => {

  const dispatch = useAppDispatch()

  const progress = useAppSelector(state => state.apiData.questionIndex)
  const answerArray = useAppSelector(state => state.apiData.answerArray)
  const [ questions, setQuestions ] = useState<QuestionInterface[] | null>()
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const subjects: Record<string, string> = {
      'ciencias-humanas': 'Ciências Humanas',
      'ciencias-natureza': 'Ciências da Natureza',
      'linguagens': 'Linguagens',
      'matematica': 'Matemática'
  }

  const getSubjectLabel = (label: string) => {
    return subjects[label as keyof typeof subjects];
  }

  useEffect(() => {
    setIsLoading(true)
    const year = Math.round(Math.random() * 15) + 2009
    const offset = Math.round(Math.random() * 170)
    enem.get(`https://api.enem.dev/v1/exams/${year}/questions?offset=${offset}`)
    .then(response => {
      setQuestions(response.data.questions)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {questions && (
        <>
          <h2 className="text-4xl">{getSubjectLabel(questions[progress - 1].discipline)}</h2>
          {questions[progress - 1].files.length > 0 && (
            <div className="flex flex-col justify-center">
              {questions[progress - 1].files.map((url, index) => {
                return (
                  <img
                    src={url} 
                    alt="Imagem da questão"
                    key={index} 
                  />
                )
              })}
            </div>
          )}
          {questions[progress - 1].context && (
            <p>{questions[progress - 1].context.replace(/!\[\]\(.*?\)/g, '')}</p>
          )}
          <p>
            {questions[progress - 1].alternativesIntroduction && (
              questions[progress - 1].alternativesIntroduction.replace(/!\[\]\(.*?\)/g, '')
            )}
          </p>
          <form className="flex flex-col gap-4">
            {questions[progress - 1].alternatives.map((alternative, index) => {
              return (
                <div key={index} className="flex items-center gap-3">
                  <label className="flex gap-2">{alternative.letter}
                    <input 
                      type="radio" 
                      name="alternative" 
                      value={alternative.letter}
                      onChange={event => {
                        const updatedValues = [...answerArray];
                        updatedValues[progress - 1] = {
                          year: questions[progress - 1].year,
                          index: questions[progress - 1].index,
                          alternative: event.currentTarget.value,
                          correctAnswer: questions[progress - 1].correctAlternative
                        };
                        console.log(updatedValues)
                        dispatch(set_answerArray(updatedValues));
                      }}
                    />
                    {alternative.text && (
                    <p>{alternative.text}</p>
                    )}
                    {alternative.file && (
                      <img src={alternative.file} alt={`Imagem da opção ${alternative.letter}`} />
                    )}  
                  </label>
                </div>
              )
            })}
            <QuestionController />
          </form>
        </>
      )}
      {isLoading && (
        <LoadingModal />
      )}
    </>
  )
}