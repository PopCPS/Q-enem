import { useEffect, useRef, useState } from "react"
import { enem } from "../../lib/axios"
import { QuestionInterface } from "../../lib/interfaces"
import { useAppSelector } from "../../store/hooks"
import { QuestionController } from "./question-controller"

export const Question = () => {

  const [ answerArray, setAnswerArray ] = useState<string[]>([])
  const correctAnswers = useRef<string[]>([])
  const progress = useAppSelector(state => state.apiData.questionIndex)
  const [ questions, setQuestions ] = useState<QuestionInterface[] | null>()

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
    const year = Math.round(Math.random() * 15) + 2009
    const offset = Math.round(Math.random() * 170)
    enem.get(`https://api.enem.dev/v1/exams/${year}/questions?offset=${offset}`)
    .then(response => {
      setQuestions(response.data.questions)
    })
  }, [])

  useEffect(() => {
    if(questions) {
      correctAnswers.current = questions.map(question => question.correctAlternative)
    }
  }, [ questions ])

  useEffect(() => {
    console.log(answerArray)
  }, [progress])

  return (
    <>
      {questions && (
        <>
          <h2 className="text-4xl">{getSubjectLabel(questions[progress - 1].discipline)}</h2>
          {questions[progress - 1].files.length > 0 && (
            <div className="flex justify-center">
              {questions[progress - 1].files.map((url, index) => {
                return (
                  <img
                    className="max-h-96" 
                    src={url} 
                    alt="Imagem da questão"
                    key={index} 
                  />
                )
              })}
            </div>
          )}
          <p>{questions[progress - 1].context.replace(/!\[\]\(.*?\)/g, '')}</p>
          <p>
            {questions[progress - 1].alternativesIntroduction && (
              questions[progress - 1].alternativesIntroduction.replace(/!\[\]\(.*?\)/g, '')
            )}
          </p>
          <form className="flex flex-col gap-4">
            {questions[progress - 1].alternatives.map((alternative, index) => {
              return (
                <div key={index} className="flex items-center gap-3">
                  <label className="grid grid-cols-2 gap-2">{alternative.letter}
                    <input 
                      type="radio" 
                      name="alternative" 
                      value={alternative.letter}
                      onChange={event => {
                        console.log(event.target.value)
                        const updatedValues = [...answerArray];
                        updatedValues[progress - 1] = event.target.value;
                        setAnswerArray(updatedValues);
                      }}
                    />
                  </label>
                  {alternative.text && (
                    <p>{alternative.text}</p>
                  )}
                  {alternative.file && (
                    <img src={alternative.file} alt={`Imagem da opção ${alternative.letter}`} />
                  )}
                </div>
              )
            })}
            <QuestionController />
          </form>
        </>
      )}
    </>
  )
}