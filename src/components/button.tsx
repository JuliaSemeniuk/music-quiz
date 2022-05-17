import React from "react";

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
    <div>
      <button onClick={onButtonClick} type="button" disabled={isDisabled}>
        {title.toUpperCase()}
      </button>
    </div>
  );
};

export default Button;
