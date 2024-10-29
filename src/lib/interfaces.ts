interface Alternative {
  letter: string;
  text: string;
  file: string | null;
  isCorrect: boolean;
}

export interface QuestionInterface {
  alternatives: Alternative[];
  alternativesIntroduction: string;
  context: string;
  correctAlternative: string;
  discipline: string;
  files: string[]
  index: number;
  language: string;
  title: string;
  year: number;
}

export interface IStates {
  questionIndex: number
  answerArray: UserAnswer[]
  isLeaveModalOpen: boolean
  isFinishModalOpen: boolean
}

export interface UserAnswer {
  index: number,
  alternative: string,
  correctAnswer: string,
  year: number,
}