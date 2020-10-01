import { QuestionType, Quiz } from "./../types/quiz-types";

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getQuizService = async (
  totalQuestion: number,
  level: string
): Promise<Quiz[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}`
  );
  let { results } = await res.json();
  console.log(results);

  let quiz: Quiz[] = results.map((quesObj: QuestionType) => {
    return {
      question: quesObj.question,
      answer: quesObj.correct_answer,
      correct_answer: quesObj.correct_answer,
      options: shuffleArray([
        ...quesObj.incorrect_answers,
        quesObj.correct_answer,
      ]),
    };
  });
  return quiz;
};
