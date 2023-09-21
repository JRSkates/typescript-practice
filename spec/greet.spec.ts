import { greet } from "../greet";

describe("greet function", () => {
  it("should return 'Hello John' when given 'John'", () => {
    const result = greet("John");
    expect(result).toBe("Hello John");
  });

  it("should return 'Hello Alice' when given 'Alice'", () => {
    const result = greet("Alice");
    expect(result).toBe("Hello Alice");
  });

  it("should return 'Hello World' when given an empty string", () => {
    const result = greet("World");
    expect(result).toBe("Hello World");
  });
});
