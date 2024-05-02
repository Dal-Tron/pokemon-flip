export const createMock = <T>(
  defaults: Required<T>,
  overrides: Partial<T> = {}
): Required<T> => {
  return { ...defaults, ...overrides };
};
