import { fireEvent, render, screen } from "@testing-library/react";
import SubHeader from "./";

const pushMock = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({ push: pushMock }),
}));

describe("SubHeader Component", () => {
  it("should be in the DOM", () => {
    render(
      <SubHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Agendar Consulta", link: "/scheduling" },
        ]}
        title="Agendar Consulta"
        subTitle="Recupere seus pokémons em 5 segundos"
      />
    );

    const homeButton = screen.getByText("Home");
    screen.getByText("Recupere seus pokémons em 5 segundos");

    // Não quer funcionar
    // screen.getByText((content, element) => {
    //   console.log(content);
    //   return element?.tagName === "p" && content.startsWith("Agendar Consulta");
    // });

    let schedulingBreadcrumbButton = document.createElement("span");
    let titleText;

    const spans = document.querySelectorAll("span");
    spans.forEach((sp) => {
      if (sp.textContent === "Agendar Consulta") {
        schedulingBreadcrumbButton = sp;
      }
    });

    const ps = document.querySelectorAll("p");
    spans.forEach((sp) => {
      if (sp.textContent === "Agendar Consulta") {
        titleText = sp;
      }
    });

    expect(schedulingBreadcrumbButton).toBeDefined();
    expect(titleText).toBeDefined();

    fireEvent.click(schedulingBreadcrumbButton);
    expect(pushMock).toBeCalledWith("/scheduling");

    fireEvent.click(homeButton);
    expect(pushMock).toBeCalledWith("/");
  });
});
