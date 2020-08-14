interface Element {
  type: string | Function;
  props?: { [key: string]: any };
  content?: Element | Element[];
}

export function createElement(
  type: string | Function,
  props: { [key: string]: any },
  ...children: Element[]
): Element {
  if (typeof type === "string") {
    return { type, props: { children } };
  }
  const propsWithChildren = { ...(props || {}), children };
  const elementContent = type(propsWithChildren);
  return elementContent;
  // return { type: type.name, props: propsWithChildren, content: elementContent };
}

export const React = {
  createElement,
};
