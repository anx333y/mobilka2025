import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <ImageBackground
      source={require("../assets/images/back.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" }
});