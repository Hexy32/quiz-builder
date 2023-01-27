export default class Question {
  title: string
  answers: string[]

  constructor({ title, answers }: QuestionProps) {
    this.title = title
    this.answers = answers ?? []
  }
}

interface QuestionProps {
  title: string
  answers?: string[]
}
