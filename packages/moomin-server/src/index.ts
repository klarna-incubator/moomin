export type ElementType = any;

export interface Element {
  type: ElementType;
  props?: { [key: string]: any };
}

export const Text = 'text';
export const View = 'view';
export const Frag = 'frag';

export function useKnownComponent(key: string): ElementType {
  return key;
}

export function createElement(
  type: ElementType,
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
