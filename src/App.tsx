import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizService } from "./services/quiz_service";
import { Quiz } from "./types/quiz-types";
import QuestionCard from "./components/QuestionCard";
import Loading from "./components/quizLoading";
import BeginQuiz from "./components/BeginQuiz";
import Result from "./components/Result";
import { Button } from "@material-ui/core";

function App() {
  let [quiz, setQuiz] = useState<Quiz[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [startQuiz, setStartQuiz] = useState(false);
  let [showResult, setShowresult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const questions: Quiz[] = await getQuizService(3, "easy");
      setQuiz(questions);
      // console.log(questions);
    };
    fetchData();
  }, []);

  let handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const questionScore: Quiz = quiz[currentQuestion];
    console.log(
      `correct answer ${questionScore.correct_answer}, user selection ${userAns}`
    );

    if (userAns === questionScore.correct_answer) {
      setScore(++score);
    }
    if (currentQuestion !== quiz.length - 1)
      setCurrentQuestion(++currentQuestion);
    else {
      setCurrentQuestion(0);
      setStartQuiz(false);
      setShowresult(true);
    }
  };

  if (!quiz.length) {
    return <Loading />;
  }
  if (showResult) {
    console.log(score, quiz);

    return (
      <div className="result-container">
        <Result />
        <h3>Result</h3>
        <p>
          " Quiz completed! Your Final score is <strong>{score}</strong> out of
          <strong> {quiz.length}</strong>"
        </p>
        <Button
          variant="contained"
          style={{ background: "#50A59B", marginTop: "10px" }}
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </Button>
      </div>
    );
  }
  if (!startQuiz) {
    return (
      <div className={"start-quiz"}>
        <div>
          <BeginQuiz />
        </div>
        <button onClick={() => setStartQuiz(!startQuiz)}>START</button>
      </div>
    );
  }
  return (
    <div className="App">
      <QuestionCard
        option={quiz[currentQuestion].options}
        question={quiz[currentQuestion].question}
        callback={handleSubmit}
        totalQuestion={quiz.length}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}

export default App;
