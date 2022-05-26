import Arrow from "../images/arrow.svg";

import "../components/progress-bar-item.scss";

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

  if (isFinished === true) {
    color = "violet";
  } else {
    if (isCurrentBarItem === false) {
      color = "grey";
    } else {
      if (isCorrectAnswerSelected === true) {
        color = "violet";
      } else {
        color = "white";
      }
    }
  }

  let backgroundColor = "";
  if (isFinished === true) {
    if (isLastFinishedItem === false) {
      backgroundColor =
        //violet - white
        "linear-gradient(90deg, rgba(126,85,178,1) 0%, rgba(220,161,248,1) 50%, rgba(255,255,255,1) 100%)";
    } else {
      backgroundColor = "#7e55b2"; //voilet
    }
  } else {
    if (isCurrentBarItem === false) {
      backgroundColor = "#656565"; //gray
    } else {
      if (isCorrectAnswerSelected === true) {
        backgroundColor =
          //violet - gray
          "linear-gradient(90deg, rgba(126,85,178,1) 0%, rgba(220,161,248,1) 50%, rgba(101,101,101,1) 100%)";
      } else {
        backgroundColor =
          //white-gray
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(101,101,101,1) 100%)";
      }
    }
  }

  return (
    <div className="progressbar__item">
      <div
        className="progressbar__stripe"
        style={{ background: backgroundColor }}
      ></div>
      <div className="progressbar__content">
        <div className="progressbar__genre" style={{ color }}>
          {genre}
        </div>
        <img
          className="progressbar__arrow"
          src={Arrow}
          alt="next genre"
          style={{ color }}
        />
      </div>
    </div>
  );
};

export default ProgressBarItem;
