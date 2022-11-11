import { Question } from "./question.class";

export class Questionnaire {
  public id: number;
  private title: string;
  public questions: Question[];

  constructor(id: number, title: string) {
    this.questions = [new Question(1, "Sabes javascript?", "UNIQUE")];
    this.id = id;
    this.title = title;
  }

  public get tilte(): string {
    return this.title;
  }
}
