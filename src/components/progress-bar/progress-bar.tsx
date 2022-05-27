import ProgressBarItem from "../progress-bar-item/progress-bar-item";

import "./progress-bar.scss";

interface ProgressBarItem {
  genre: string;
  isFinished: boolean;
  isCorrectAnswerSelected: boolean;
  isCurrentBarItem: boolean;
}

interface Props {
  progressBar: ProgressBarItem[];
}

const ProgressBar: React.FC<Props> = ({ progressBar }) => {
  return (
    <div className="quiz__progressbar">
      {progressBar.map((progressBarItem, index) => {
        return (
          <ProgressBarItem
            key={progressBarItem.genre}
            {...progressBarItem}
            isLastFinishedItem={
              progressBar[index + 1] &&
              progressBar[index + 1].isCorrectAnswerSelected === true
            }
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
