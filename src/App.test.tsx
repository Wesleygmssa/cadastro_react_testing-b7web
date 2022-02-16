import { App } from "./App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("teste math functioons", () => {
  it("should add 1 to 1 and return 2", () => {
    let result = 1 + 1;

    expect(result).toBe(2);
  });
});

it("should multiplay 5 by 3 and return 15", () => {
  let result = 5 * 3;
  expect(result).toBe(15);
});

it("should have a container div", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(container.querySelector("div.container")).toBeInTheDocument();
  expect(container.querySelector("div.container")).toHaveClass("container");
  expect(container.querySelector("div.container")).toHaveTextContent("Carros");
});

it("should render NotFound component when entering a non existing route", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/not-found"]}>
      <App />
    </MemoryRouter>
  );

  // const h2 = container.querySelector("h2");
  const h2 = container.getElementsByTagName("h2")[0];
  expect(h2?.innerHTML).toBe("Página não encontrada");
  expect(h2).toHaveTextContent("Página não encontrada");
  const notFoundTextElement = screen.getByText("Página não encontrada");
  expect(notFoundTextElement).toBeInTheDocument();
  // expect(container.querySelector("div.container")).toHaveTextContent("404");
});

it("should go to the registration page when clicking on the register button", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  act(() => {
    const registerButton = container
      .getElementsByClassName("headerRight")[0]
      .getElementsByTagName("a")[0];

    registerButton.click();
  });

  // expect(container.querySelector("div.container")).toHaveTextContent(
  //   "Cadastrar"
  // );

  let registrationTitle = screen.getByText("Cadastro de carro");
  expect(registrationTitle).toBeInTheDocument();
});

export {};
