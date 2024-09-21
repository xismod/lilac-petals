import { TamaguiProvider, TamaguiProviderProps } from "@tamagui/core";
import { PropsWithChildren } from "react";
import config from "./tamagui.config";

type ThemeProviderProps = PropsWithChildren<TamaguiProviderProps>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <TamaguiProvider config={config} {...props}>
      {children}
    </TamaguiProvider>
  );
}