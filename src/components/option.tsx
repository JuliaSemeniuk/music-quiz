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

const Option: React.FC<Props> = ({ songTitle }) => {
  return (
    <div>
      <div>{songTitle}</div>
    </div>
  );
};

export default Option;
