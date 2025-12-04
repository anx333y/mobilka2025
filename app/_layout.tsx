import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { darkTheme, darkTheme1 } from "../theme/darkTheme";
import { ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <ThemeProvider value={darkTheme1}>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: darkTheme.card },
          headerTitleStyle: { color: darkTheme.text, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: darkTheme.card },
          tabBarActiveTintColor: darkTheme.primary,
          tabBarInactiveTintColor: darkTheme.secondary,
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Главная" }} />
        <Tabs.Screen name="achievements" options={{ title: "Достижения" }} />
        <Tabs.Screen name="chart" options={{ title: "График" }} />
        <Tabs.Screen name="hormones" options={{ title: "Гормоны" }} />
        <Tabs.Screen name="settings" options={{ title: "Настройки" }} />
      </Tabs>
    </ThemeProvider>
  );
}
