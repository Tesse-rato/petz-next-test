import { Container, ButtonsContainer } from "./styles";
import { Buttons } from "../..";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <Buttons.Logo />
      <ButtonsContainer>
        <Buttons.Secondary
          onClick={() => router.push("/about")}
          style={{ marginRight: "8px" }}
        >
          Quem Somos
        </Buttons.Secondary>
        <Buttons.Primary
          onClick={() => router.push("/scheduling")}
          style={{ marginLeft: "8px" }}
        >
          Agendar Consulta
        </Buttons.Primary>
      </ButtonsContainer>
    </Container>
  );
}
