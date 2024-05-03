import { extractOrThrow } from "./extractOrThrow";

describe("extractOrThrow", () => {
  it("extracts JSON if response is successful", async () => {
    // Mock successful response
    const mockResponse = {
      ok: true,
      statusText: "OK",
      json: jest.fn().mockResolvedValue({ data: "test" }),
    } as unknown as Response;

    const result = await extractOrThrow(mockResponse);
    expect(result).toEqual({ data: "test" });
  });

  it("throws an error if response is unsuccessful", () => {
    // Mock failed response
    const mockResponse = {
      ok: false,
      statusText: "Not Found",
    } as unknown as Response;

    expect(() => extractOrThrow(mockResponse)).toThrow("Not Found");
  });
});
