import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./";
import React from "react";

const changeMock = jest.fn();

describe("BaseInput Component", () => {
  it("should be in the DOM", () => {
    render(
      <Select
        onChange={changeMock}
        value="Value test"
        label="Label test"
        options={[{ label: "label test", value: "test" }]}
      />
    );

    screen.getByText("Label test");
    const select = screen.getByDisplayValue("Value test");
    fireEvent.change(select, { target: { value: "new value" } });
    expect(select.getAttribute("value")).toBe("new value");
  });
});
