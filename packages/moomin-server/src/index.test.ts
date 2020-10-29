import { createElement } from ".";

describe("createElement", () => {
  test("works with string", () => {
    expect(createElement("test")).toEqual({
      type: "test",
      props: { children: [] },
    });
  });

  test("merges children into props", () => {
    const Component = { type: "view" };
    expect(createElement("test", { a: 1 }, Component, Component)).toEqual({
      type: "test",
      props: { a: 1, children: [Component, Component] },
    });
  });

  test("works with functional component", () => {
    const elem = {};
    const Component = jest.fn().mockReturnValue(elem);

    expect(createElement(Component)).toBe(elem);
    expect(Component).toBeCalledWith({ children: [], key: expect.any(String) });
  });

  test("uses React.Frangment when no type is passed", () => {
    expect(createElement()).toEqual({
      type: "frag",
      props: { children: [] },
    });
  });

  test("throws when unsupported type is passed", () => {
    expect(() => createElement(2, {})).toThrow(
      new Error("unsupported component type: 2")
    );
  });
});
