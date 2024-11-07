import React from "react";

export type Component<T = object> = React.FC<T>;

export type ComponentWithChildren<T = object> = React.FC<
  T & { children: React.ReactNode }
>;

export type Color = string;

export type ColorEntry = { color: Color; timestamp: number };

export type ColorHistory = ColorEntry[];
