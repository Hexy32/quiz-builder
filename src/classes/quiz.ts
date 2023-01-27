import Question from './question'

export default class Quiz {
  title: string
  questions: Question[]

  constructor({ title, questions }: QuizProps) {
    this.title = title
    this.questions = questions ?? []
  }
}

interface QuizProps {
  title: string
  questions?: Question[]
}
