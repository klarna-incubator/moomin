export const Text = 'Text';
export const View = 'View';
export const Fragment = 'Fragment';

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
    return { type: Fragment, props: withKids };
  }
  throw new Error(`unsupported component type: ${type}`);
}

export const React = {
  createElement,
};
