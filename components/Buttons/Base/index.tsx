import { Container } from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export default function Header(props: Props) {
  return <Container {...props}>{props.children}</Container>;
}
