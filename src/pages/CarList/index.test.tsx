import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CarList } from "./index";

it("should have a list od cars", () => {
  const { container } = render(
    <MemoryRouter>
      <CarList />
    </MemoryRouter>
  );

  const listE1 = container.getElementsByClassName("list"); // 6
  expect(listE1.length).toBeGreaterThan(0); // 6
});

it("should have 5 cars in the list", () => {
  const { container } = render(
    <MemoryRouter>
      <CarList />
    </MemoryRouter>
  );

  const carsList = container.getElementsByClassName("carItem"); // 6
  expect(carsList.length).toEqual(5);
});

export {};
