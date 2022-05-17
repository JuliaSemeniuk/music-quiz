import { useAppSelector } from "../app/hooks";

const QuestionHeader = () => {
  return (
    <div>
      <div> </div>
      <div>{useAppSelector((state) => state.quiz.userName)}</div>
      <div>{useAppSelector((state) => state.quiz.finalScore)}</div>
    </div>
  );
};

export default QuestionHeader;
