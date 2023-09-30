import React from "react";
import SchedulingPage from "./scheduling";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const routerPushMock = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: jest.fn(() => ({ push: routerPushMock })),
}));

// jest.mock("next/router", () => require("next-router-mock"));

global.fetch = jest.fn((arg) => {
  return Promise.resolve({
    json: () => {
      switch (arg) {
        case "/api/pokemons/regions": {
          return Promise.resolve({
            count: 10,
            next: null,
            previous: null,
            results: [
              { name: "kanto", url: "https://pokeapi.co/api/v2/region/1/" },
              { name: "johto", url: "https://pokeapi.co/api/v2/region/2/" },
              { name: "hoenn", url: "https://pokeapi.co/api/v2/region/3/" },
              { name: "sinnoh", url: "https://pokeapi.co/api/v2/region/4/" },
              { name: "unova", url: "https://pokeapi.co/api/v2/region/5/" },
              { name: "kalos", url: "https://pokeapi.co/api/v2/region/6/" },
              { name: "alola", url: "https://pokeapi.co/api/v2/region/7/" },
              { name: "galar", url: "https://pokeapi.co/api/v2/region/8/" },
              { name: "hisui", url: "https://pokeapi.co/api/v2/region/9/" },
              { name: "paldea", url: "https://pokeapi.co/api/v2/region/10/" },
            ],
          });
          break;
        }
        case "/api/pokemons/cities": {
          return Promise.resolve({
            count: 850,
            next: "https://pokeapi.co/api/v2/location/?offset=20&limit=20",
            previous: null,
            results: [
              {
                name: "canalave-city",
                url: "https://pokeapi.co/api/v2/location/1/",
              },
              {
                name: "eterna-city",
                url: "https://pokeapi.co/api/v2/location/2/",
              },
              {
                name: "pastoria-city",
                url: "https://pokeapi.co/api/v2/location/3/",
              },
            ],
          });
          break;
        }
        case "/api/pokemons/pokemons": {
          return Promise.resolve({
            count: 1292,
            next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
            previous: null,
            results: [
              {
                name: "bulbasaur",
                url: "https://pokeapi.co/api/v2/pokemon/1/",
              },
              {
                name: "ivysaur",
                url: "https://pokeapi.co/api/v2/pokemon/2/",
              },
              {
                name: "venusaur",
                url: "https://pokeapi.co/api/v2/pokemon/3/",
              },
              {
                name: "charmander",
                url: "https://pokeapi.co/api/v2/pokemon/4/",
              },
              {
                name: "charmeleon",
                url: "https://pokeapi.co/api/v2/pokemon/5/",
              },
              {
                name: "charizard",
                url: "https://pokeapi.co/api/v2/pokemon/6/",
              },
            ],
          });
          break;
        }
        case "/api/scheduling/date": {
          return Promise.resolve([
            "30/09/2023",
            "01/10/2023",
            "02/10/2023",
            "03/10/2023",
            "04/10/2023",
            "05/10/2023",
            "06/10/2023",
          ]);
          break;
        }
        case "/api/scheduling/time": {
          return Promise.resolve([
            "10:00:00",
            "10:30:00",
            "11:00:00",
            "11:30:00",
            "13:00:00",
            "13:30:00",
            "14:00:00",
            "14:30:00",
            "15:00:00",
            "15:30:00",
            "16:00:00",
            "16:30:00",
            "17:00:00",
            "17:30:00",
            "18:00:00",
            "18:30:00",
          ]);
          break;
        }
      }
    },
  });
});

describe("Scheduling component", () => {
  it("should be in the DOM", async () => {
    await act(() => render(<SchedulingPage />));
    screen.getByText("Nome");
    screen.getByPlaceholderText("Digite seu nome");
    screen.getByText("Sobrenome");
    screen.getByPlaceholderText("Digite seu sobrenome");
    screen.getByText("Região");
    screen.getByPlaceholderText("Selecione sua região");
    screen.getByText("Cidade");
    screen.getByPlaceholderText("Selecione sua cidade");
    screen.getByText("Cadastre seu time");
    screen.getByText("Atendemos até 06 pokémons por vez");
    screen.getByText("Adicionar novo pokémon ao time...");
    screen.getByText("Data para atendimento");
    screen.getByPlaceholderText("Selecione uma data");
    screen.getByText("Horário para atendimento");
    screen.getByPlaceholderText("Selecione um horário");
    screen.getByText("Número de pokémons a serem atendidos:");
    screen.getByText("Atendimento unitário por pokémon:");
    screen.getByText("Subtotal:");
    screen.getByText("Taxa geracional*:");
    screen.getByText(
      "*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%"
    );
    screen.getByText(/Valor Total: */);
    screen.getByText("Concluir Agendamento");
  });

  it("should call submit function", async () => {
    await act(() => render(<SchedulingPage />));
    const button = screen.getByText("Concluir Agendamento");
    fireEvent.click(button);
    expect(routerPushMock).toBeCalled();
  });

  it("should add a new pokémon to list", async () => {
    await act(() => render(<SchedulingPage />));
    screen.getByText("Pokémon 01");
    const pokeTwo = screen.queryByText("Pokémon 02");
    expect(pokeTwo).toBeNull();

    const addButton = screen.getByText("Adicionar novo pokémon ao time...");

    fireEvent.click(addButton);
    screen.getByText("Pokémon 02");

    fireEvent.click(addButton);
    screen.getByText("Pokémon 03");

    fireEvent.click(addButton);
    screen.getByText("Pokémon 04");

    fireEvent.click(addButton);
    screen.getByText("Pokémon 05");

    fireEvent.click(addButton);
    screen.getByText("Pokémon 06");

    fireEvent.click(addButton);
    const buttonSeven = screen.queryByText("Pokémon 07");
    expect(buttonSeven).toBeNull();
  });

  it("should exclude pokémon of list", async () => {
    await act(() => render(<SchedulingPage />));

    screen.getByText("Pokémon 01");

    const addButton = screen.getByText("Adicionar novo pokémon ao time...");

    fireEvent.click(addButton);

    screen.getByText("Pokémon 02");

    const trashButton = document.querySelector(
      "img[alt='trash']"
    ) as HTMLImageElement;
    expect(trashButton).toBeTruthy();

    fireEvent.click(trashButton);

    const pokemonTwo = screen.queryByText("Pokémon 02");
    expect(pokemonTwo).toBeNull();
  });

  it("should had select options", async () => {
    await act(() => render(<SchedulingPage />));

    screen.getByText("kanto");
    screen.getByText("canalave-city");
    screen.getByText("bulbasaur");
    screen.getByText("30/09/2023");
    screen.getByText("10:00:00");
  });

  it("should sum values corretly", async () => {
    jest.useFakeTimers();
    await act(() => render(<SchedulingPage />));

    const addButton = screen.getByText("Adicionar novo pokémon ao time...");
    for (let i = 0; i < 6; i++) fireEvent.click(addButton);

    const inputs = document.querySelectorAll(
      "input[placeholder='Selecione um pokémon']"
    ) as NodeListOf<Element>;

    for (let i = 0; i < 6; i++) {
      fireEvent.click(
        inputs[i].parentElement?.querySelector("div")?.children[
          i
        ] as HTMLDivElement
      );
    }

    screen.getByText("06");
    screen.getByText("R$ 420,00");
    screen.getByText("Valor Total: R$ 422,10");
  });
});
