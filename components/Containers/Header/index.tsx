import { Container, ButtonsContainer } from "./styles";
import { Buttons } from "../..";

export default function Header() {
  return (
    <Container>
      <div>LOGO</div>
      <ButtonsContainer>
        <Buttons.Secondary style={{ marginRight: "8px" }}>
          Quem Somos
        </Buttons.Secondary>
        <Buttons.Primary style={{ marginLeft: "8px" }}>
          Agendar Consulta
        </Buttons.Primary>
      </ButtonsContainer>
    </Container>
  );
}
