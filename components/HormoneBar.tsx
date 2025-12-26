import { View, Text, StyleSheet } from "react-native";
import { darkTheme } from "../theme/darkTheme";

const Coda = require('../assets/fonts/Coda_800ExtraBold.ttf');

export default function HormoneBar({ title, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}: {value}%</Text>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${value}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  label: { color: darkTheme.text, marginBottom: 6, fontFamily: Coda, fontSize: 16, fontWeight: 'bold' },
  bar: {
    height: 12,
    backgroundColor: "#ffffff",
    borderRadius: 6
  },
  fill: {
    height: "100%",
    backgroundColor: darkTheme.primary,
    borderRadius: 6
  }
});
