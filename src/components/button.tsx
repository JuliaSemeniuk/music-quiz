import React from "react";
import "../components/button.scss";
import Arrow from "../images/arrow.svg";
import classnames from "classnames";

interface Props {
  isDisabled?: boolean;
  onButtonClick: (event: React.SyntheticEvent) => void;
  title: string;
}

const Button: React.FC<Props> = ({
  isDisabled = false,
  onButtonClick,
  title,
}) => {
  return (
    <div className="button__container">
      <button
        className={classnames("button", {
          button__disabled: isDisabled,
          button__active: !isDisabled,
        })}
        onClick={onButtonClick}
        type="button"
        disabled={isDisabled}
      >
        {title.toUpperCase()}
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
