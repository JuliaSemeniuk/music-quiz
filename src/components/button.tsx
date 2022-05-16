import { useAppDispatch, useAppSelector } from "../app/hooks";
import { makeQuestionFinished } from "../features/quiz/quizStoreSlice";

interface Props {
  isCorrectAnswerSelected: boolean;
  questionId: string;
}

const Button: React.FC<Props> = ({ isCorrectAnswerSelected, questionId }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={(event) => {
          dispatch(makeQuestionFinished(questionId));
        }}
        type="button"
        disabled={!isCorrectAnswerSelected}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
