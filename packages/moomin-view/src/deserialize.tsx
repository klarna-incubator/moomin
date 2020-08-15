import React from "react";
import { View, Text } from "react-native";

export interface SerializedElement {
  type: string;
  props?: { [key: string]: any };
}

const NATIVE_COMPONENTS: { [key: string]: any } = {
  view: View,
  text: Text,
  frag: React.Fragment
};

export function deserialize(data: SerializedElement, components: { [key: string]: any } = {}): any {
  if (data === null) return null;
  if (typeof data === "string") return data;
  if (Array.isArray(data)) return data.map(val => deserialize(val, components));

  const Component = components[data.type] || NATIVE_COMPONENTS[data.type];
  if (!Component) {
    throw new Error(`unknown component type ${data.type}`)
  }

  const { children = null, ...props } = data.props || {}

  return (
    <Component {...props}>
      {deserialize(children, components)}
    </Component>
  );
}
