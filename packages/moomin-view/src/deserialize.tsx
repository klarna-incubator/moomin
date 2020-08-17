import React from "react";
import { View, Text, Image } from "react-native";

export interface SerializedElement {
  type: string;
  props?: { [key: string]: any };
}

const NATIVE_COMPONENTS: { [key: string]: any } = {
  view: View,
  text: Text,
  image: Image,
  frag: React.Fragment,
};

export function deserialize(
  data: SerializedElement,
  components: { [key: string]: any } = {}
): any {
  if (data === null) return null;
  if (typeof data === "string") return data;

  if (Array.isArray(data)) {
    return data.map((val) => deserialize(val, components));
  }

  const Component = components[data.type] || NATIVE_COMPONENTS[data.type];

  if (!Component) {
    console.error(`Unknown component type ${data.type}`);
    return null;
  }

  const { children = null, ...props } = data.props || {};

  if (!children || !children.length) {
    return <Component {...props} />;
  }

  return <Component {...props}>{deserialize(children, components)}</Component>;
}
