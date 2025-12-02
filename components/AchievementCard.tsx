import { View, Text, StyleSheet } from "react-native";
import { darkTheme } from "../theme/darkTheme";

export default function AchievementCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: darkTheme.card,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12
  },
  title: { color: darkTheme.text, fontSize: 18, marginBottom: 4 },
  desc: { color: darkTheme.secondary }
});
