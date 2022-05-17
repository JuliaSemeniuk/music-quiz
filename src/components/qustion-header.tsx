import { useAppSelector } from "../app/hooks";

const QuestionHeader = () => {
  return (
    <div>
      <div>logo</div>
      <div>{useAppSelector((state) => state.quiz.userName)}</div>
      <div>quiz.score</div>
    </div>
  );
};

export default QuestionHeader;
