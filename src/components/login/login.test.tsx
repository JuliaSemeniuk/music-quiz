import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import { store } from "../../app/store";

import Login from "./login";

describe("Login", () => {
  it("should allow letters to be inputed", () => {
    const utils = render(
      <Provider store={store}>
        <Login isLoading={false} />
      </Provider>
    );
    const input = utils.getByLabelText("login-input");
    fireEvent.change(input, { target: { value: "jane" } });
    expect((input as any).value).toBe("jane");
  });
});
