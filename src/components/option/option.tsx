import { useAppDispatch } from "../../app/hooks";

import {
  makeOptionSelected,
  makeOptionActive,
  setQuestionScore,
} from "../../app/quiz-store-slice";

import "./option.scss";

import classnames from "classnames";

import CheckItem from "../../images/check-item.svg";
import CrossCheckItem from "../../images/cross-check-item.svg";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  isActive: boolean;
  isSelected: boolean;
  correctAnswerId: string;
  isCorrectAnswerSelected: boolean;
  questionId: string;
}

const Option: React.FC<Props> = ({
  songTitle,
  id,
  isSelected,
  correctAnswerId,
  isCorrectAnswerSelected,
  questionId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={classnames("option__item", {
        option__correct: isSelected && id === correctAnswerId,
        option__uncorrect: isSelected && id !== correctAnswerId,
      })}
      onClick={(event) => {
        dispatch(makeOptionActive(id));
        if (isCorrectAnswerSelected) {
          return;
        }
        dispatch(makeOptionSelected(id));
        dispatch(setQuestionScore(questionId));
      }}
    >
      <div className="item__container">
        {isSelected ? (
          correctAnswerId === id ? (
            <div className="item__check item__check-correct">
              <img src={CheckItem} alt="check" />
            </div>
          ) : (
            <div className="item__check item__check-uncorrect">
              <img src={CrossCheckItem} alt="check" />
            </div>
          )
        ) : (
          <div className="item__check"></div>
        )}
      </div>

      <div>{songTitle}</div>
    </div>
  );
};

export default Option;
