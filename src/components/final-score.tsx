import { useAppSelector } from "../app/hooks";

const FinalScore = () => {
  const finalScore = useAppSelector((state) => state.quiz.finalScore);
  return (
    <div>
      <div>{finalScore}</div>
    </div>
  );
};

export default FinalScore;
