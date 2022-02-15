import { App } from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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
export {};
