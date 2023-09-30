import Image from "next/image";
import { Container, Message, Title } from "./styles";
import { Primary } from "../../Buttons";
import { useRouter } from "next/router";
import { TPayload } from "../../../hooks/scheduling";
import { useEffect, useState } from "react";

import CheckSVG from "../../../public/images/check.svg";
import WarningSVG from "../../../public/images/warning.svg";

export default function SubmitModal() {
  const router = useRouter();
  const successSubmit: string | null = sessionStorage.getItem("successSubmit");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (successSubmit) {
      setSuccess(true);
      const payload: TPayload = JSON.parse(successSubmit);
      const [hour, minutes] = payload.time.split(":");
      setMessage(
        `Seu agendamento para dia ${payload.date}, às ${hour}h${minutes}m, para ${payload.pokemonsAmount}x pokémons foi realizado com sucesso!`
      );
    } else {
      setSuccess(false);
      setMessage(
        "Infelizmente não foi possível salvar seu agendamento, por favor tente um novo agendamento!"
      );
    }
  }, []);

  return (
    <Container>
      <Title>
        {success ? "Consulta Agendada" : "Houve um problema no agendamento"}
      </Title>
      <Image alt="modal-ico" src={success ? CheckSVG : WarningSVG} />
      <Message>{message}</Message>
      <Primary onClick={() => router.push("/scheduling")}>
        Fazer novo Agendamento
      </Primary>
    </Container>
  );
}
