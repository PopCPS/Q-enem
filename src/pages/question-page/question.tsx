import { useEffect, useRef, useState } from "react"
import { enem } from "../../lib/axios"
import { QuestionInterface } from "../../lib/interfaces"

interface QuestionsProps {
  progress: number
}

export const Question = ({
  progress
}: QuestionsProps) => {

  const correctAnswers = useRef<string[]>([])
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
      console.log(response.data.questions)
    })
  }, [])

  useEffect(() => {
    if(questions) {
      correctAnswers.current = questions.map(question => question.correctAlternative)
    }
    console.log(correctAnswers.current)
  }, [ questions ])

  useEffect(() => {
    if(questions) {
      console.log(questions[progress - 1])
    }
  })

  return (
    <>
      {questions && (
        <>
          <h2 className="text-4xl">{getSubjectLabel(questions[progress - 1].discipline)}</h2>
          {questions[progress - 1].files.length > 0 && (
            <div className="flex justify-center">
              {questions[progress - 1].files.map(url => {
                return (
                  <img
                    className="max-h-96" 
                    src={url} 
                    alt="Imagem da questão" 
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
          <form className="flex flex-col gap-2">
            {questions[progress - 1].alternatives.map(alternative => {
              return (
                <div className="flex items-center gap-3">
                  <label className="grid grid-cols-2 gap-2">{alternative.letter}
                    <input 
                      type="radio" 
                      name="alternative" 
                      id="" 
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
          </form>
        </>
      )}
    </>
  )
}