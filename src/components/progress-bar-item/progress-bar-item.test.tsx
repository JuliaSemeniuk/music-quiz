import { getByRole, getByTestId, render } from "@testing-library/react";

import ProgressBarItem from "./progress-bar-item";

describe("ProgressBarItem", () => {
  it("should render violet color", () => {
    const component = render(
      <ProgressBarItem
        genre=""
        isFinished={true}
        isCurrentBarItem={false}
        isCorrectAnswerSelected={false}
        isLastFinishedItem={false}
      />
    );

    const violet = "violet";
    const testedDiv = component.getByTestId("stripe");

    expect(testedDiv.className.includes(violet)).toEqual(true);
  });

  it("should render violet color", () => {
    const component = render(
      <ProgressBarItem
        genre=""
        isFinished={false}
        isCurrentBarItem={false}
        isCorrectAnswerSelected={false}
        isLastFinishedItem={false}
      />
    );

    const grey = "grey";

    const testedDiv = component.getByTestId("stripe");

    expect(testedDiv.className.includes(grey)).toEqual(true);
  });

  it("should render violet color", () => {
    const component = render(
      <ProgressBarItem
        genre=""
        isFinished={false}
        isCurrentBarItem={true}
        isCorrectAnswerSelected={false}
        isLastFinishedItem={false}
      />
    );

    const white = "white";

    const testedDiv = component.getByTestId("stripe");

    expect(testedDiv.className.includes(white)).toEqual(true);
  });
});
