import { useEffect } from "react";
import { useState } from "react";
import useSound from "use-sound";
// import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [Question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  // const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    console.log(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      setQuestionNumber((prev) => (a.correct ? prev + 1 : prev));
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{Question?.question}</div>
      <div className="answers">
        {Question?.answers?.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => {
              handleClick(a);
            }}
          >
            {a?.text}
          </div>
        ))}
      </div>
    </div>
  );
}
