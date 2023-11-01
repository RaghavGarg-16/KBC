import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import { useEffect } from "react";
import { useMemo } from "react";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who composed Rhapsody in Blue?",
      answers: [
        {
          text: "Irving Berlin",
          correct: false,
        },
        {
          text: "George Gershwin",
          correct: true,
        },
        {
          text: "Aaron Copland",
          correct: false,
        },
        {
          text: "Cole Porter",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the Celsius equivalent of 77 degrees Fahrenheit?",
      answers: [
        {
          text: "15",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "25",
          correct: true,
        },
        {
          text: "30",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which is the largest city in the USA's largest state?",
      answers: [
        {
          text: "Anchorage",
          correct: true,
        },
        {
          text: "Dallas",
          correct: false,
        },
        {
          text: "New York",
          correct: false,
        },
        {
          text: "Los Angeles",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who was the star of the 1973 hit film Zanjeer?",
      answers: [
        {
          text: "Amitabh Bachchan",
          correct: true,
        },
        {
          text: "Shahrukh Khan",
          correct: false,
        },
        {
          text: "Anil Kapoor",
          correct: false,
        },
        {
          text: "Madhur Mittal",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A picture of three lions is seen in the national emblem of India. What is written underneath it?",
      answers: [
        {
          text: "Money alone triumphs",
          correct: false,
        },
        {
          text: "The truth alone triumphs",
          correct: true,
        },
        {
          text: "Lies alone triumph",
          correct: false,
        },
        {
          text: "Fashion alone triumphs",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In depictions of God Rama, he is famously holding what in his right hand?",
      answers: [
        {
          text: "A flower",
          correct: false,
        },
        {
          text: "A child",
          correct: false,
        },
        {
          text: "A sword",
          correct: false,
        },
        {
          text: "A bow and arrow",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "On an American $100 bill, there is a portrait of which American statesman?",
      answers: [
        {
          text: "Benjamin Franklin",
          correct: true,
        },
        {
          text: "Franklin Roosevelt",
          correct: false,
        },
        {
          text: "George Washington",
          correct: false,
        },
        {
          text: "Abraham Lincoln",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented the first commercially-successful revolver?",
      answers: [
        {
          text: "Oliver Winchester",
          correct: false,
        },
        {
          text: "Daniel Wesson",
          correct: false,
        },
        {
          text: "Samuel Colt",
          correct: true,
        },
        {
          text: "Thomas Edison",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Cambridge Circus is in which U.K. city?",
      answers: [
        {
          text: "London",
          correct: true,
        },
        {
          text: "Cambridge",
          correct: false,
        },
        {
          text: "Oxford",
          correct: false,
        },
        {
          text: "Leeds",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The song Darshan Do Ghanshyam was written by which famous Indian poet, according to the movie?",
      answers: [
        {
          text: "Mirabai",
          correct: false,
        },
        {
          text: "Kabeer",
          correct: false,
        },
        {
          text: "Surdas",
          correct: true,
        },
        {
          text: "Tulsidas",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which cricketer has scored the most first-class centuries?",
      answers: [
        {
          text: "Jimmy Bridges",
          correct: false,
        },
        {
          text: "Ricky Ponting",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
        {
          text: "Jack Hobbs",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Pocahontas",
          correct: true,
        },
        {
          text: "Sleeping Beauty",
          correct: false,
        },
        {
          text: "Cinderella",
          correct: false,
        },
        {
          text: "Elsa",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
