export const Text = 'text';
export const View = 'view';
export const Frag = 'frag';

interface Element {
  type: any;
  props?: { [key: string]: any };
  content?: Element | Element[];
}

export function createElement(
  type: any,
  props: { [key: string]: any },
  ...children: Element[]
): Element {
  const withKids = props ? { ...props, children } : { children };
  if (typeof type === 'string') {
    return { type, props: withKids };
  }
  if (typeof type === 'function') {
    return type(withKids);
  }
  if (!type) {
    return { type: Frag, props: withKids };
  }
  throw new Error(`unsupported component type: ${type}`);
}

export const React = {
  createElement,
};
