import {useSleepHormones} from "@/hooks/useSleepHormones";
import {StyleSheet, Text, View} from "react-native";
import HormoneBar from "@/components/HormoneBar";
import {darkTheme} from "@/theme/darkTheme";

const Coda = require('../assets/fonts/Coda_800ExtraBold.ttf');

export default function HormonesScreen({start, end}) {
  const { melatonin, cortisol } = useSleepHormones(start, end);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ГОРМОНЫ БИОРИТМОВ</Text>

      <HormoneBar title="МЕЛАТОНИН" value={melatonin} />
      <HormoneBar title="КОРТИЗОЛ" value={cortisol} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  title: { color: darkTheme.text, fontSize: 16, fontWeight: "bold" , fontFamily: Coda, textAlign: "center" },
});
