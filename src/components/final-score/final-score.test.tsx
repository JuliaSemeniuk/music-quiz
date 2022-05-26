import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../../app/store";

import FinalScore from "./final-score";

describe("FinalScore", () => {
  it("should render FinalScore with correct name", () => {
    const component = render(
      <Provider store={store}>
        <FinalScore userName="jane" />
      </Provider>
    );

    expect(
      component.getByText("jane, you can do better, try again!")
    ).toBeInTheDocument();
  });
});
