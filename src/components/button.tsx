interface Props {
  isCorrectAnswerSelected: boolean;
  questionId: string;
}

const Button: React.FC<Props> = ({ isCorrectAnswerSelected, questionId }) => {
  return (
    <div>
      <button
        onClick={(event) => {}}
        type="button"
        disabled={!isCorrectAnswerSelected}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
