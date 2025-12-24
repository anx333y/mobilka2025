import { View, Text, StyleSheet } from "react-native";
import { darkTheme } from "../../theme/darkTheme";
import { useSleepHormones } from "../../hooks/useSleepHormones";
import HormoneBar from "../../components/HormoneBar";
import ScreenWrapper from "@/components/ScreenWrapper";

// @ts-ignore
export default function HormonesScreen({start, end}) {
  const { melatonin, cortisol } = useSleepHormones(start, end);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Гормоны сна</Text>

        <HormoneBar title="Мелатонин" value={melatonin} />
        <HormoneBar title="Кортизол" value={cortisol} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: darkTheme.text, fontSize: 24, marginBottom: 30 }
});
