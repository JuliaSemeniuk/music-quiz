import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fillUserName,
  makeQuizReadyToStart,
} from "../features/quiz/quizStoreSlice";

import Button from "./button";

import "../components/login.scss";

import Logo from "../images/logo.svg";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const getUserName = (event: any) => {
    dispatch(fillUserName(event.target.value));
  };

  const userName = useAppSelector((state) => state.quiz.userName);

  const startQuiz = () => {
    dispatch(makeQuizReadyToStart(""));
  };

  return (
    <div className="login__container">
      <div className="login__content">
        <div className="logo__image">
          <img src={Logo} alt="" />
        </div>

        <form className="login__form" action="">
          <div className="form__title">Welcome!</div>
          <div className="form__subtitle">
            Please enter your name and lets start our quiz!
          </div>
          <input
            className="form__input"
            value={userName}
            placeholder="type your name here..."
            type="text"
            onChange={getUserName}
          />
          <div className="login__button">
            {
              <Button
                onButtonClick={startQuiz}
                isDisabled={!userName.length}
                title="Start Quiz"
              />
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
