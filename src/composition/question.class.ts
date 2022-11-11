import { PossibleAnswer } from "./possibleAnswe.class";

export class Question {
  public id: number;
  private statement: string;
  private answerType: string;
  private possibleAnswers: PossibleAnswer[];

  constructor(id: number, statement: string, answerType: string) {
    this.id = id;
    this.statement = statement;
    this.answerType = answerType;
    this.possibleAnswers = [new PossibleAnswer(1, "Si", false), new PossibleAnswer(2, "No", true)];
  }

  public getDiscardCount(): number {
    return this.possibleAnswers.filter((possibleAnswer: PossibleAnswer) => possibleAnswer.isDisposable).length;
  }

  set setAnswerType(answerType: string) {
    this.answerType = answerType;
  }

  public getStatement() {
    return `${this.id}: ${this.statement} y es de tipo ${this.answerType}`;
  }
}
