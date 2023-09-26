import { useRouter } from "next/router";

import {
  BreadCrumbContainer,
  BreadcrumbText,
  Container,
  SubTitle,
  Title,
} from "./styles";
import { Buttons } from "../..";

interface Props {
  title: string;
  subTitle: string;
  breadcrumb: { label: string; link: string }[];
}

export default function SubHeader(props: Props) {
  const router = useRouter();

  return (
    <Container>
      <BreadCrumbContainer>
        {Array.isArray(props.breadcrumb) &&
          props.breadcrumb.length > 0 &&
          props.breadcrumb.map((obj, i) => (
            <>
              {i > 0 && (
                <span key={i} style={{ marginRight: "10px", color: "white" }}>
                  {">"}
                </span>
              )}
              <BreadcrumbText
                key={"b" + i}
                onClick={() => router.push(obj.link)}
              >
                {obj.label}
              </BreadcrumbText>
            </>
          ))}
      </BreadCrumbContainer>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </Container>
  );
}
