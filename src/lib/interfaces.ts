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
  files: string[]; // Assuming files is an array of strings
  index: number;
  language: string;
  title: string;
  year: number;
}

export interface IStates {
  questionIndex: number
  answerArray: string[]
}