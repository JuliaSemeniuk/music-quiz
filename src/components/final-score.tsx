import { useAppSelector } from "../app/hooks";
import Button from "./button";

interface Props {
  userName: string;
}

const FinalScore: React.FC<Props> = ({ userName }) => {
  const finalScore = useAppSelector((state) => state.quiz.finalScore);
  return (
    <div>
      <div>{finalScore}</div>
      <div>
        {finalScore < 10
          ? `${userName}, you can do better, try again!`
          : `${userName}, did so great!`}
      </div>
    </div>
  );
};

export default FinalScore;
