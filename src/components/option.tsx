import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  makeOptionSelected,
  makeOptionActive,
} from "../features/quiz/quizStoreSlice";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  isActive: boolean; //just for choose and show info
  isSelected: boolean; //isAnswered - for highlighting red or green
  correctAnswerId: string;
  isCorrectAnswerSelected: boolean;
}

const Option: React.FC<Props> = ({
  songTitle,
  id,
  isSelected,
  correctAnswerId,
  isCorrectAnswerSelected,
}) => {
  const dispatch = useAppDispatch();

  let style = {};

  if (isSelected) {
    if (id === correctAnswerId) {
      style = { backgroundColor: "green" };
    } else {
      style = { backgroundColor: "red" };
    }
  }

  return (
    <div
      onClick={(event) => {
        dispatch(makeOptionActive(id));
        if (isCorrectAnswerSelected) {
          return;
        }
        dispatch(makeOptionSelected(id));
      }}
      style={style}
    >
      <div>{songTitle}</div>
    </div>
  );
};

export default Option;
