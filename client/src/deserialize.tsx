import React from "react";
import { View, Text } from "react-native";
// first step, TODO: make working version
// this version cannot handle fragments

interface Json {
  type: "View" | "Text";
  props: {
    [key: string]: any;
  };
}

const map = {
  View,
  Text,
};

export function deserialize(json: Json | string | Json[], i?: number): any {
  if (json === null) return null;
  if (typeof json === "string") return json;
  if (Array.isArray(json)) return json.map(deserialize);

  const Component: any = map[json.type];

  if (!Component) return null;

  const { children = null, ...rest } = json.props;

  return (
    <Component {...rest} key={i}>
      {deserialize(children)}
    </Component>
  );
}
