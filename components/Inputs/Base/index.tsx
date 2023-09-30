import { Container, Input, Label } from "./styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

export default function Base({ label, style, value, ...rest }: Props) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Input {...rest} value={value} />
    </Container>
  );
}
