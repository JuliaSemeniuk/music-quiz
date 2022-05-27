import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

import Option from "./option";

describe("Option", () => {
  it("should render Option with correct songTitle", () => {
    const component = render(
      <Provider store={store}>
        <Option
          songTitle="song title"
          id=""
          audio=""
          description=""
          image=""
          name=""
          isActive
          isSelected
          correctAnswerId=""
          isCorrectAnswerSelected
          questionId=""
        />
      </Provider>
    );

    expect(component.getByText("song title")).toBeInTheDocument;
  });
});
