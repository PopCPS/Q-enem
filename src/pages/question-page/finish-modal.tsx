import { PieChart } from '@mui/x-charts/PieChart';
import { UserAnswer } from '../../lib/interfaces';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { set_isFinishModalOpen } from '../../store/reducers/dataReducer';

export const FinishModal = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const userAnswers = useAppSelector(state => state.apiData.answerArray)

  const navToQuestions = () => {
    navigate('/questoes')
  }

  const navToHome = () => {
    navigate('/')
  }

  const checkAnswers = (answers: UserAnswer[]) => {
    let correct = 0
    let wrong = 0

    answers.map(answer => {
      if(!answer) {
      } else {
        if(answer.correctAnswer === answer.alternative) {
          correct++
        }
        if(answer.correctAnswer !== answer.alternative) {
          wrong++
        }
      }
      
    })
    return [
      {
        id: 0,
        value: correct,
        label: 'Correto',
        color: '#32ADE6'
      },
      {
        id: 1,
        value: wrong,
        label: 'Errado',
        color: 'red'
      },
      {
        id: 2,
        value: 10 - wrong - correct,
        label: 'Não respondido',
        color: 'black'
      },
    ]
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0 });
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="inset-0 absolute bg-black bg-opacity-60 flex items-center justify-center z-20">
        <div className='h-fit w-[550px] p-6 rounded-4 bg-white'>
          <span className="block text-2xl text-center">Resultados</span>
          <div className='h-[300px]'>
            <PieChart 
              series={[
                {
                  data: checkAnswers(userAnswers),
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  cx: 150,
                  cy: 150,
                }
              ]}
            />
          </div>
          <div className='flex gap-3 justify-end'>
            <Button onClick={() => {
              navToHome()
              dispatch(set_isFinishModalOpen(false))
            }}>
              Home
            </Button>
            <Button onClick={() => {
              navToQuestions()
              dispatch(set_isFinishModalOpen(false))
            }}>
              Estudar novamente
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}