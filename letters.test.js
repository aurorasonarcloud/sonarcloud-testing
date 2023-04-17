import { joinStrings } from "./letters";

describe("joinStrings", () => {
  it("should join two strings together", () => {
    expect(joinStrings("Hello", "World")).toBe("HelloWorld");
  });
});