import Arrow from "../../images/arrow.svg";

import "./progress-bar-item.scss";

import classnames from "classnames";

interface Props {
  genre: string;
  isFinished: boolean;
  isCorrectAnswerSelected: boolean;
  isCurrentBarItem: boolean;
  isLastFinishedItem: boolean;
}

const ProgressBarItem: React.FC<Props> = ({
  genre,
  isFinished,
  isCurrentBarItem,
  isCorrectAnswerSelected,
  isLastFinishedItem,
}) => {
  let color = "";
  let background = "";

  if (isFinished === true) {
    color = "violet";
    if (isLastFinishedItem === false) {
      background = "violet-white-bg";
    } else {
      background = "violet-bg";
    }
  } else {
    if (isCurrentBarItem === false) {
      color = "grey";
      background = "grey-bg";
    } else {
      if (isCorrectAnswerSelected === true) {
        color = "violet";
        background = "violet-grey-bg";
      } else {
        color = "white";
        background = "white-grey-bg";
      }
    }
  }

  return (
    <div className="progressbar__item">
      <div
        data-testid="stripe"
        className={classnames("progressbar__stripe", color, background)}
      ></div>
      <div className="progressbar__content">
        <div className={classnames("progressbar__genre", color)}>{genre}</div>
        <img
          className={classnames("progressbar__arrow", color)}
          src={Arrow}
          alt="next genre"
        />
      </div>
    </div>
  );
};

export default ProgressBarItem;
