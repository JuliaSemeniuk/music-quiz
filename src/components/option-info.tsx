import { mediaUrl } from "../../src/App";
import "../components/option-info.scss";

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
    <div className="option-info__container">
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
