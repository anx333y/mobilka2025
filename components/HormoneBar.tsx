import { View, Text, StyleSheet } from "react-native";
import { darkTheme } from "../theme/darkTheme";

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
  label: { color: darkTheme.text, marginBottom: 6 },
  bar: {
    height: 12,
    backgroundColor: "#333",
    borderRadius: 6
  },
  fill: {
    height: "100%",
    backgroundColor: darkTheme.primary,
    borderRadius: 6
  }
});
