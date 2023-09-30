import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TRegionsResponse } from "../pages/api/pokemons/regions";
import { TCitiesResponse } from "../pages/api/pokemons/cities";
import { TPokemonsResponse } from "../pages/api/pokemons/pokemons";
import { TDateResponse } from "../pages/api/scheduling/date";
import { TTimeResponse } from "../pages/api/scheduling/time";

export interface TPayload {
  name: string;
  secondName: string;
  region: string;
  city: string;
  pokemons: string[];
  date: string;
  time: string;
  pokemonsAmount: number;
  subTotal: number;
  tax: number;
  total: number;
}

export default function SchedulingHook() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");

  const [regions, setRegions] = useState<TRegionsResponse["results"]>([]);
  const [cities, setCities] = useState<TCitiesResponse["results"]>([]);
  const [pokemons, setPokemons] = useState<TPokemonsResponse["results"]>([]);

  const [regionSelected, setRegionSelected] = useState("");
  const [citieSelected, setCitieSelected] = useState("");

  const [pokemonsList, setPokemonsList] = useState<Array<string>>([""]);

  const [schedulingDate, setSchedulingDate] = useState<TDateResponse>([]);
  const [schedulingTime, setSchedulingTime] = useState<TTimeResponse>([]);

  const [schedulingDateSelected, setSchedulingDateSelected] = useState("");
  const [schedulingTimeSelected, setSchedulingTimeSelected] = useState("");

  function handlePokemonSelectInList(value: string, index: number) {
    const newList = [...pokemonsList];
    newList[index] = value;
    setPokemonsList([...newList]);
  }

  function addPokemonToList() {
    if (pokemonsList.length < 6) {
      const newList = [...pokemonsList];
      newList.push("");
      setPokemonsList([...newList]);
    }
  }

  function removePokemonInList(index: number) {
    const newList = [...pokemonsList];
    newList.splice(index, 1);
    if (newList.length <= 0) setPokemonsList([""]);
    else setPokemonsList([...newList]);
  }

  function submit() {
    const payload: TPayload = {
      name,
      secondName,
      region: regionSelected,
      city: citieSelected,
      pokemons: pokemonsList,
      date: schedulingDateSelected,
      time: schedulingTimeSelected,
      pokemonsAmount: pokemonsList.filter((v) => v).length,
      subTotal: pokemonsList.filter((v) => v).length * 70,
      tax: 2.1,
      total: pokemonsList.filter((v) => v).length * 70 + 2.1,
    };

    const randomNumber = Math.round(Math.random() * 10);

    sessionStorage.removeItem("successSubmit");

    // 0 == par
    // 1 == impar
    if (randomNumber % 2 === 0) {
      router.push("/submit");
      sessionStorage.setItem("successSubmit", JSON.stringify(payload));
    } else if (randomNumber % 2 === 1) {
      router.push("/submit");
    }
  }

  useEffect(() => {
    if (!regions.length)
      fetch("/api/pokemons/regions")
        .then((d) => d.json())
        .then((data) => setRegions(data.results))
        .catch(() =>
          console.error(
            "Ocorreu um erro enquanto solicitava em /api/pokemons/regions"
          )
        );

    if (!cities.length)
      fetch("/api/pokemons/cities")
        .then((d) => d.json())
        .then((data) => setCities(data.results))
        .catch(() =>
          console.error(
            "Ocorreu um erro enquanto solicitava em /api/pokemons/cities"
          )
        );

    if (!pokemons.length)
      fetch("/api/pokemons/pokemons")
        .then((d) => d.json())
        .then((data) => setPokemons(data.results))
        .catch(() =>
          console.error(
            "Ocorreu um erro enquanto solicitava em /api/pokemons/pokemons"
          )
        );

    if (!schedulingDate.length)
      fetch("/api/scheduling/date")
        .then((resp) => resp.json())
        .then((data) => setSchedulingDate(data))
        .catch((err) =>
          console.error(
            "Ocorreu um erro enquanto solicitava em /api/scheduling/date"
          )
        );

    if (!schedulingTime.length)
      fetch("/api/scheduling/time")
        .then((resp) => resp.json())
        .then((data) => setSchedulingTime(data))
        .catch((err) =>
          console.error(
            "Ocorreu um erro enquanto solicitava em /api/scheduling/time"
          )
        );
  }, [
    regions.length,
    cities.length,
    pokemons.length,
    schedulingDate.length,
    schedulingTime.length,
  ]);

  return {
    regions,
    cities,
    pokemons,
    regionSelected,
    setRegionSelected,
    citieSelected,
    setCitieSelected,
    pokemonsList,
    setPokemonsList,
    handlePokemonSelectInList,
    addPokemonToList,
    removePokemonInList,
    name,
    setName,
    secondName,
    setSecondName,
    schedulingDate,
    schedulingTime,
    schedulingDateSelected,
    setSchedulingDateSelected,
    schedulingTimeSelected,
    setSchedulingTimeSelected,
    pokemonsAmount: pokemonsList.filter((v) => v).length,
    subTotal: pokemonsList.filter((v) => v).length * 70,
    tax: 2.1,
    total: pokemonsList.filter((v) => v).length * 70 + 2.1,
    submit,
  };
}
