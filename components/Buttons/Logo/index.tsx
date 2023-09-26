import { Container, Label, PokeBall } from "./styles";
import PokeBallSvg from "../../../public/images/white-pokeball.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  const [logoIsOpen, setLogoIsOpen] = useState<boolean>(false);

  useEffect(() => {
    handleLogo();
  }, []);

  function handleLogo() {
    console.log("router");
    if (router.pathname === "/") {
      setLogoIsOpen(true);
      setTimeout(() => setLogoIsOpen(false), 5000);
    }
  }

  return (
    <Container open={logoIsOpen} onClick={() => router.push("/")}>
      <PokeBall src={PokeBallSvg} alt="pokeball" />
      <Label>Centro Pokémon</Label>
    </Container>
  );
}
