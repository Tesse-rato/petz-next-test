import { Container } from "./styles";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Base(props: Props) {
  return <Container {...props}>{props.children}</Container>;
}
