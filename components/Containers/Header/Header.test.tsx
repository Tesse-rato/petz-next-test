import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./";

const pushMock = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({ push: pushMock }),
}));

describe("Header component", () => {
  it("should be in the DOM", () => {
    render(<Header />);
    screen.getByText("Centro Pokémon");
    screen.getByText("Quem Somos");
    screen.getByText("Agendar Consulta");
  });
  it("should redirect corretly when tap Quem Somos", () => {
    render(<Header />);
    fireEvent.click(screen.getByText("Quem Somos"));
    expect(pushMock).toBeCalledWith("/about");
  });
  it("should redirect corretly when tap Agendar Consulta", () => {
    render(<Header />);
    fireEvent.click(screen.getByText("Agendar Consulta"));
    expect(pushMock).toBeCalledWith("/scheduling");
  });
});
