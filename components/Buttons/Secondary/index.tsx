import Base from "../Base";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Secondary(props: Props) {
  return (
    <Base
      {...props}
      style={{
        backgroundColor: "#FFF",
        color: "#000",
        fontWeight: 400,
        ...props.style,
      }}
    >
      {props.children}
    </Base>
  );
}
