import { Component, OnInit, Input } from '@angular/core';

import { Question } from 'src/app/models/question';
@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  options: string[];
  selectedAnswerIndex = -1;
  isAnswerCorrect: boolean;
  correctAnswerIndex = -1;

  constructor() { }

  ngOnInit() {
    this.question.question = this.decodeText(this.question.question);
    this.options = this.getOptions(this.question.incorrectAnswers, this.question.correctAnswer);
    this.correctAnswerIndex = this.getCorrectAnswerIndex(
      this.options,
      this.decodeText(this.question.correctAnswer)
    );
  }

  onSelectOption(option: string) {
    this.selectedAnswerIndex = this.options.findIndex(opt => opt === option);
    this.isAnswerCorrect = this.question.correctAnswer === option;
  }

  private decodeText(text: string): string {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  private getOptions(incorrectAnswers: string[], correctAnswer: string): string[] {
    // Place the correct answer as the first option.
    const options = [
      this.decodeText(correctAnswer),
      ...incorrectAnswers.map(answer => this.decodeText(answer))
    ];

    // random number in [0, 3]
    const index = Math.floor(Math.random() * 3);

    // Pick the first option, i.e. the correct answer.
    const [correctOption] = options.splice(0, 1);

    // Insert the correct answer in the random index.
    options.splice(index, 0, correctOption);

    return options;
  }

  private getCorrectAnswerIndex(options: string[], correctAnswer: string): number {
    return options.findIndex(option => option === correctAnswer);
  }

}
