import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  it("should render properly", () => {
    render(<Footer />);
    screen.getByText(
      "Todas as marcas e ilustrações utilizadas são de seus resepctivos donos."
    );
  });
});
