import { render } from "@testing-library/react";
import OptionInfo from "./option-info";

describe("OptionInfo", () => {
  it("should render OptionInfo with correct description", () => {
    const component = render(
      <OptionInfo
        id=""
        name=""
        songTitle=""
        image=""
        audio=""
        description="lorem ipsum"
      />
    );

    expect(component.getByText("lorem ipsum")).toBeInTheDocument();
  });
});
