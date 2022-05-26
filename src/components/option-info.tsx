import { mediaUrl } from "../../src/App";

import "../components/option-info.scss";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;
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
      <div className="option-info__title">{`${name} - ${songTitle}`}</div>
      <div className="option-info__image">
        <img src={mediaUrl + image} />
      </div>
      <audio
        className="option-info__player"
        controls
        src={`${mediaUrl + audio}`}
      ></audio>
      <div className="option-info__description">{description}</div>
    </div>
  );
};

export default OptionInfo;
