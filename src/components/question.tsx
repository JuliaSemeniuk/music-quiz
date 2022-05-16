import { QuizQuestion } from "../features/quiz/quizStoreSlice";
import Option from "./option";

interface Props {
  quizQuestion: QuizQuestion;
}

const Question: React.FC<Props> = ({ quizQuestion }) => {
  return (
    <div>
      {/* Question[n].QuestionAudioUrl */}
      <audio controls src={`${quizQuestion.questionAudioUrl}`}></audio>

      {/* Question[n].Songs[] */}
      {quizQuestion.songs.map((song) => {
        return (
          <Option
            key={song.id}
            {...song}
            isCorrectAnswerSelected={quizQuestion.isCorrectAnswerSelected}
            correctAnswerId={quizQuestion.correctAnswerId}
          />
        );
      })}
    </div>
  );
};

export default Question;
