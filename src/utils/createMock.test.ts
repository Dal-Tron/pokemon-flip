import { createMock } from "./createMock";

describe("createMock", () => {
  interface Sample {
    name: string;
    age: number;
    active: boolean;
  }

  const defaultSample: Required<Sample> = {
    name: "John Doe",
    age: 30,
    active: false,
  };

  it("should return an object with default values when no overrides are provided", () => {
    const mockResult = createMock<Sample>(defaultSample);
    expect(mockResult).toEqual(defaultSample);
  });

  it("should override default values when overrides are provided", () => {
    const overrides = { name: "Jane Doe", age: 25 };
    const mockResult = createMock<Sample>(defaultSample, overrides);
    expect(mockResult).toEqual({
      ...defaultSample,
      ...overrides,
    });
  });

  it("should return a fully required object even with undefined overrides", () => {
    const mockResult = createMock<Sample>(defaultSample, undefined);
    expect(mockResult).toEqual(defaultSample);
  });
});
