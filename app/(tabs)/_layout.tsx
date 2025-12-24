import {Navigator, Tabs} from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";
import {darkTheme} from "@/theme/darkTheme";
import Slot = Navigator.Slot;

export default function TabsLayout() {
  return (
    <ImageBackground
      source={require("../../assets/images/back.png")}
      style={styles.background}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: darkTheme.backgroundMenu,
            height: 74
          },
          tabBarActiveTintColor: darkTheme.primary,
          tabBarInactiveTintColor: darkTheme.secondary
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="chart" />
        <Tabs.Screen name="achievements" />
        <Tabs.Screen name="hormones" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, width: "100%"
  }
});
