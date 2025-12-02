import { View, Text, StyleSheet } from "react-native";
import { darkTheme } from "../../theme/darkTheme";
import { useSleepHormones } from "../../hooks/useSleepHormones";
import HormoneBar from "../../components/HormoneBar";

export default function HormonesScreen() {
  const { melatonin, cortisol } = useSleepHormones();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Гормоны сна</Text>

      <HormoneBar title="Мелатонин" value={melatonin} />
      <HormoneBar title="Кортизол" value={cortisol} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: darkTheme.background, padding: 20 },
  title: { color: darkTheme.text, fontSize: 24, marginBottom: 30 }
});
