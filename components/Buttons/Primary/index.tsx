import Base from "../Base";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton(props: Props) {
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
