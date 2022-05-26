import { render } from "@testing-library/react";

import Button from "./button";

describe("Button", () => {
  it("should render Button with correct title", () => {
    const component = render(
      <Button title="button" onButtonClick={() => {}} />
    );

    expect(component.getByText("button")).toBeInTheDocument();
  });
});
