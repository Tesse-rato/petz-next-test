import Base from "../Base";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Primary(props: Props) {
  return (
    <Base
      {...props}
      style={{
        backgroundColor: "#E40F0F",
        color: "#FFF",
        fontWeight: 700,
        ...props.style,
      }}
    >
      {props.children}
    </Base>
  );
}
