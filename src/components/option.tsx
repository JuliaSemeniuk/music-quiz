import { useAppDispatch, useAppSelector } from "../app/hooks";
import { makeOptionSelected } from "../features/quiz/quizStoreSlice";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  isActive: boolean; //just for choose and show info
  isAnswered: boolean; //isAnswered - for highlighting red or green
  correctAnswerId: string;
  isCorrectAnswerSelected: boolean;
}

const Option: React.FC<Props> = ({
  songTitle,
  id,
  isAnswered,
  correctAnswerId,
}) => {
  const dispatch = useAppDispatch();

  let style = {};

  if (isAnswered) {
    if (id === correctAnswerId) {
      style = { backgroundColor: "green" };
    } else {
      style = { backgroundColor: "red" };
    }
  }

  return (
    <div
      onClick={(event) => {
        dispatch(makeOptionSelected(id));
      }}
      style={style}
    >
      <div>{songTitle}</div>
    </div>
  );
};

export default Option;
