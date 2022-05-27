import { useAppSelector } from "../../app/hooks";

import "./question-header.scss";

import SongQuizLogo from "../../images/logo.svg";

const QuestionHeader = () => {
  const userName = useAppSelector((state) => state.quiz.userName).toUpperCase();
  const finalScore = useAppSelector((state) => state.quiz.finalScore);
  return (
    <header className="guiz_header header">
      <div className="header__container ">
        <div className="header__logo">
          <img src={SongQuizLogo} alt="logo" />
        </div>
        <div className="header__items">
          <div className="header__username">{userName}</div>
          <div className="header__score-title">Your Score:</div>
          <div className="header__score">{finalScore}</div>
        </div>
      </div>
    </header>
  );
};

export default QuestionHeader;
