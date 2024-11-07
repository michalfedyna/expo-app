import React from "react";
import { ColorProvider } from "./state/color";
import { HistoryProvider } from "./state/history";

export const withProviders = (Wrapped: React.ElementType) => {
  const WithProviders = () => (
    <HistoryProvider>
      <ColorProvider>
        <Wrapped />
      </ColorProvider>
    </HistoryProvider>
  );

  return WithProviders;
};
