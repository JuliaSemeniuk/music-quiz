import { QuizQuestion } from "../features/quiz/quizStoreSlice";
import Option from "./option";
import OptionInfo from "./option-info";

interface Props {
  quizQuestion: QuizQuestion;
}

const Question: React.FC<Props> = ({ quizQuestion }) => {
  const activeOptionInfo = quizQuestion.songs.filter(
    (currentOption) => currentOption.isActive === true
  )[0];

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

      {activeOptionInfo ? (
        <OptionInfo
          id={activeOptionInfo.id}
          name={activeOptionInfo.name}
          songTitle={activeOptionInfo.songTitle}
          image={activeOptionInfo.image}
          audio={activeOptionInfo.audio}
          description={activeOptionInfo.description}
        />
      ) : null}
    </div>
  );
};

export default Question;
