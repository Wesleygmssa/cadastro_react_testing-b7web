import { divide, minus, plus, multiply } from "./math";

describe("testing math functions", () => {
  it("should add correctly", () => {
    let result = plus(1, 3);

    // expect(result).toBeGreaterThan(4);
    expect(result).toBe(4);
    // expect(result).toBeLessThan(4);
  });

  it("should reduce correctly", () => {
    let result = minus(5, 3);
    expect(result).toBe(2);
  });

  it("should multiply correctly", () => {
    let result = multiply(5, 3);
    expect(result).toBe(15);
  });

  it("should divide correctly", () => {
    let result = divide(15, 3);
    expect(result).toBe(5);
  });
});

export {};
