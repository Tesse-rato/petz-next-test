import React from "react";
import HomePage from "./index";
import { render, screen } from "@testing-library/react";

describe("Home component", () => {
  it("should be in the DOM", () => {
    render(<HomePage />);
    screen.getByText(
      "Cuidamos bem do seu pokémon, para ele cuidar bem de você"
    );

    const image = document.querySelector("img") as HTMLImageElement;
    expect(image.alt).toContain("PokemonHero");
  });
});
