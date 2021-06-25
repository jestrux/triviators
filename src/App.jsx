import React, { useState } from 'react';
import Map from './Map';
import Question from './components/question';
import sampleQuestions from "./sample-questions";

function shuffle(array) {
  return [...array].sort(_ => Math.random() - 0.5);
}

function startTimer(onChange = () => {}){
  var timeLeft = 20;
  var timer = setInterval(() => {
    timeLeft -= 1;
    onChange(timeLeft);
  }, 2000);

  return () => clearInterval(timer);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);

  function goToNextQuestion(){
    setTimeLeft(20);

    window.clearTimer = startTimer((time) => {
      setTimeLeft(time);
      if(time <= 0)
        answerQuestion("");
    });
  }

  function answerQuestion(answer){
    if(answer === questions[currentIndex].answer){
      setScore(score + timeLeft);
      window.playSound("correct");
    }
    else
      window.playSound("wrong");
    
    window.clearTimer();

    setAnswers(
      answers.map((a, i) => {
        if(i === currentIndex)
          return answer;

        return a;
      })
    );

    
    setTimeout(() => {
      if(currentIndex === questions.length - 1)
        handleGameOver();
      else{
        setCurrentIndex(currentIndex + 1);
        // window.playSound('whoosh');
        goToNextQuestion();
      }
    }, 2000);
  }

  function handleGameOver(){
    setGameOver(true);
    window.stopSound('bg');

    setTimeout(() => {
      window.playSound('gameOver');
    }, 20);
  }

  function handlePlayNow(){
    setCurrentIndex(0);
    setGameStarted(false);
    setGameOver(false);
    setAnswers([null, null, null, null]);
    setTimeLeft(20);
    setScore(0);
    
    setTimeout(() => {
      setQuestions(shuffle(sampleQuestions));
      window.playSound('bg');
      setGameStarted(true);
      goToNextQuestion();
    }, 100);
  }
  
  return (
    <div className="flex h-screen bg-primary text-white relative">
      <div className="pointer-events-none mr-56 z-10 absolute inset-0 bg-gradient-to-r from-primary via-primary"></div>

      <div className="z-20 w-3/5 flex flex-col relative">
        <div className={`relative transform transition-all duration-500 ease-in-out ${!gameStarted && '-translate-y-8 opacity-0'}`}>
          <div className={`h-1 rounded-r-full absolute top-16 mt-1 inset-x-0 bg-gradient-to-r from-red-500 to-green-500 overflow-hidden`}>
            <div className="backdrop-filter backdrop-saturate-0 backdrop-invert-0 h-full absolute right-0"
              style={{width: `${((20 - timeLeft) * 100 / 20)}%` }}
            ></div>
          </div>

          <div className="tracking-wider flex items-center justify-between px-3 py-4">
            <h3 className="logo ml-2 text-2xl font-bold mb-0.5 text-white">
              triviators
            </h3>

            <span className="text-xs bg-white bg-opacity-10 flex items-center rounded py-0.5 px-2.5 border border-white border-opacity-25 mr-6">
              <span className="mr-1 font-semibold text-xs uppercase tracking-widest opacity-90">Time Left:</span>
              <span className="logo font-semibold text-base">{timeLeft}</span>
            </span>

            <span className="text-xs bg-white bg-opacity-10 flex items-center rounded py-0.5 px-2.5 border border-white border-opacity-25">
              <span className="mr-1 font-semibold text-xs uppercase tracking-widest opacity-90">Score:</span>
              <span className="logo font-semibold text-base">{score}</span>
            </span>
          </div>
        </div>

        {
          gameStarted && (
            <div className="flex-1 flex">
              {
                questions.map((q, index) => {
                  const i = index + 1;
                  const offsetX = Math.min(i * 3, 10) + "px";
                  const offsetY = Math.min(i * 3, 10) + "px";

                  return (
                    <div className="absolute inset-0 max-w-lg mx-auto flex flex-col items-center justify-center"
                      key={index}
                      style={{
                        transform: `translate3d(${offsetX},${offsetY},0)`, 
                        zIndex: questions.length - index,
                        pointerEvents: 'none'
                      }}
                    >
                      <Question
                        {...q}
                        open={currentIndex <= index}
                        label = { `${index + 1} of ${questions.length}` }
                        selectedAnswer = { answers[index] }
                        onAnswer={a => answerQuestion(a, index)}
                      />
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </div>
      <div className="-ml-64 flex-1">
        <div className="h-full overflow-hidden border-red-500/40 relative">
          <div className="absolute inset-0">
            <Map details={gameStarted ? questions[currentIndex].mapData : null} />
          </div>
        </div>
      </div>

      { (!gameStarted || gameOver) && (
        <div className={`z-40 fixed inset-0 flex items-center justify-center ${gameOver && 'backdrop-filter backdrop-blur-sm'}`}>
          <div className="max-w-4xl pr-40 pl-12 flex-1 flex flex-col items-center justify-center">
            <div className="animate-float bg-gradient-to-br from-yellow-800 via-purple-800 sto-green-700 border-8 border-double border-white/20 py-12 px-10 rounded-xl text-center">
              <h2 className="fancy-fonts logo text-3xl font-semibold tracking-widest">
                {gameOver ? 'Game Over!' : 'Hello there,'}
              </h2>

              { gameOver &&
                <React.Fragment>
                  <p className="mt-5 fancy-font text-3xl leading-relaxed tracking-tighter">
                    You managed to snug { score } points. { score > 20 ? 'Way to go 🎉🎉' : 'Better luck next time 👊' }
                  </p>
                  <p className="mt-5 mb-3 text-lg text-white text-opacity-70 leading-relaxed">
                    Visit <a href="http://innovate.co.tz/" target="_blank" className="underline text-red-400 hover:text-opacity-80">innovate.co.tz</a> to learn more about innovators in Tanzania.
                  </p>
                </React.Fragment>
              }

              { !gameOver &&
                <React.Fragment>
                  <p className="mt-5 fancy-font text-3xl leading-relaxed tracking-tighter">
                    Welcome to triviators, the trivia game for enthusiasts about the innovation space in Tanzania.
                  </p>
                  <p className="mt-8 text-lg text-white text-opacity-70 leading-relaxed">
                    The data for this game comes from <a href="http://innovate.co.tz/" target="_blank" className="underline text-red-400 hover:text-opacity-80">innovate.co.tz</a>
                  </p>
                </React.Fragment>
              }
            </div>

            <button className="-mt-1 block py-3 px-8 uppercase font-semibold tracking-widest font-mono text-lg text-center rounded border-4 border-white border-opacity-30 hover:border-opacity-50 hover:bg-white hover:bg-opacity-10 text-white text-opacity-90 hover:text-opacity-100 focus:outline-none"
                  onClick={handlePlayNow}
              >
                { gameOver ? 'Play Again' : 'Play Now' }
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
