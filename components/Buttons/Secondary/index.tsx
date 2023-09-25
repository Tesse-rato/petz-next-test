import Base from "../Base";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton(props: Props) {
  return (
    <Base
      {...props}
      style={{
        backgroundColor: "#FFF",
        color: "#000",
        ...props.style,
      }}
    >
      {props.children}
    </Base>
  );
}
