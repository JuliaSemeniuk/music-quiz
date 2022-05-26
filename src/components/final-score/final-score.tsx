import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { makeQuizReadyToRepeat } from "../../features/quiz/quizStoreSlice";

import Button from "../button/button";

import "./final-score.scss";

import Logo from "../../images/logo.svg";
import ScoreAroung from "../../images/score-around.svg";

interface Props {
  userName: string;
}

const FinalScore: React.FC<Props> = ({ userName }) => {
  const dispatch = useAppDispatch();

  const finalScore = useAppSelector((state) => state.quiz.finalScore);
  const repeatQuiz = () => {
    dispatch(makeQuizReadyToRepeat(""));
  };
  return (
    <div className="score__container">
      <div className="logo__image">
        <img src={Logo} alt="" />
      </div>
      <div className="score-image__container">
        <img src={ScoreAroung} alt="final score" />
        <div className="score__wrapper">
          <div className="score__result">{finalScore}</div>
        </div>
      </div>
      <div className="score__content">
        <div className="score__title">
          {finalScore < 10
            ? `${userName}, you can do better, try again!`
            : `${userName}, did so great!`}
        </div>
        <div className="score__subtitle">
          {finalScore < 10
            ? `You've got ${finalScore} of 12 points!`
            : `You got ${finalScore} of 12 points! You are definitely a music lover!`}
        </div>
        <div className="try-again__button">
          <Button onButtonClick={repeatQuiz} title="try again" />
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
