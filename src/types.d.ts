/* eslint-disable @typescript-eslint/no-empty-object-type */
import config from "./themes/tamagui.config";

export type AppConfig = typeof config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}
