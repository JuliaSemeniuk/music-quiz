interface Props {
  genre: string;
  isFinished: boolean;
  isCorrectAnswerSelected: boolean;
  isCurrentBarItem: boolean;
}

const ProgressBarItem: React.FC<Props> = ({
  genre,
  isFinished,
  isCurrentBarItem,
  isCorrectAnswerSelected,
}) => {
  //не має доступу до пропсів внє компонента

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
        color = "silver";
      }
    }
  }

  return <div style={{ color }}>{genre}</div>;
};

export default ProgressBarItem;
