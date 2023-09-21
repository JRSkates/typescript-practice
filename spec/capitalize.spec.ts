import capitalize from "../capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  })

  it("should return a message if an empty string is passed", () => {
    expect(capitalize("")).toBe("Please enter a valid text");
  })
});
