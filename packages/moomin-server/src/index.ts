export const Text = 'Text';
export const View = 'View';

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
  return type(withKids);
}

export const React = {
  createElement,
};
