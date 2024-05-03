import { delay } from "./delay";

jest.useFakeTimers();

describe("delay", () => {
  it("delays for the specified amount of time", async () => {
    const delayTime = 1000;
    const spy = jest.fn();

    const delayedFunction = async () => {
      await delay(delayTime);
      spy();
    };

    const result = delayedFunction();

    // Fast-forward time by the specified delay
    jest.advanceTimersByTime(delayTime);

    await result; // Wait for the delayedFunction to complete

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("does not immediately resolve", async () => {
    const delayTime = 1000;
    const spy = jest.fn();

    const delayedFunction = async () => {
      await delay(delayTime);
      spy();
    };

    const result = delayedFunction();

    // Fast-forward time by less than the specified delay
    jest.advanceTimersByTime(delayTime / 2);

    // Wait for the current set of pending promises to settle
    await Promise.resolve();

    expect(spy).not.toHaveBeenCalled();

    // Now complete the delay
    jest.advanceTimersByTime(delayTime / 2);
    await result; // Wait for the delayedFunction to complete

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
