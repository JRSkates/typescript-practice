import add from '../add';

describe("add function", () => {
  it("should add two positive numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(add(5, -3)).toBe(2);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-7, -2)).toBe(-9);
  });
});
