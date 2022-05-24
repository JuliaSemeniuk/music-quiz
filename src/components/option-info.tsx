import { mediaUrl } from "../../src/App";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  //   isActive: boolean; //just for choose and show info
  //   isSelected: boolean; //isAnswered - for highlighting red or green
  //   correctAnswerId: string;
  //   isCorrectAnswerSelected: boolean;
}

const OptionInfo: React.FC<Props> = ({
  name,
  songTitle,
  image,
  audio,
  description,
}) => {
  return (
    <div className="">
      <div>{`${name} - ${songTitle}`}</div>
      <div>
        <img style={{ width: "50%" }} src={mediaUrl + image} />
      </div>
      <audio controls src={`${mediaUrl + audio}`}></audio>
      <div>{description}</div>
    </div>
  );
};

export default OptionInfo;
