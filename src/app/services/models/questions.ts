/**
 * The structure of the data returned from the endpoint that
 * retrieves all questions.
 */
 export interface ApiQuestions {
  response_code: number;
  results: ApiQuestionResult[];
}

export interface ApiQuestionResult {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
