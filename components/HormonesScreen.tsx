import {useSleepHormones} from "@/hooks/useSleepHormones";
import {StyleSheet, Text, View} from "react-native";
import HormoneBar from "@/components/HormoneBar";
import {darkTheme} from "@/theme/darkTheme";

export default function HormonesScreen({start, end}) {
  const { melatonin, cortisol } = useSleepHormones(start, end);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Гормоны сна</Text>

      <HormoneBar title="Мелатонин" value={melatonin} />
      <HormoneBar title="Кортизол" value={cortisol} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  title: { color: darkTheme.text, fontSize: 24 }
});
