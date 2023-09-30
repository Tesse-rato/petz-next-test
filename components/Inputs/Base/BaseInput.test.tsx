import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./";

const changeMock = jest.fn();

describe("BaseInput Component", () => {
  it("should be in the DOM", () => {
    render(
      <Input label="Label test" value="Value test" onChange={changeMock} />
    );

    screen.getByText("Label test");
    const input = screen.getByDisplayValue("Value test");
  });
});
