import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {darkTheme1} from "../theme/darkTheme";
import {ThemeProvider} from "@react-navigation/native";

export default function RootLayout() {
  return (
    <ThemeProvider value={darkTheme1}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
};
