import ProgressBarItem from "./progress-bar-item";

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
    <div>
      {progressBar.map((progressBarItem) => {
        return <ProgressBarItem {...progressBarItem} />;
      })}
    </div>
  );
};

export default ProgressBar;
