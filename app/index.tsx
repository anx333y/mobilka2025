import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import SleepSessionItem from "../components/SleepSessionItem";
import EmptyState from "../components/EmptyState";
import { darkTheme } from "../theme/darkTheme";
import { useSleepTimer } from "../hooks/useSleepTimer";
import { useNotifications } from "../hooks/useNotifications";
import HormonesScreen from "./hormones";
import { formatTimer } from "@/helpers/timer";
import SleepHistory from "@/components/SleepHistory";
import { SleepSession } from "@/data/sleep";
const { ProgressCircle } = require("react-native-svg-charts");

export default function HomeScreen() {
  const [sessions, setSessions] = useState<SleepSession[]>([]);
  const { startTime, running, start, stop, elapsed } = useSleepTimer();
  useNotifications();

  const endSession = () => {
    if (!startTime) return;
    setSessions(prev => [
      { start: startTime, end: Date.now(), id: prev.length + 1 },
      ...prev
    ]);
    stop();
  };

  console.log(elapsed)

  return (
    <View style={styles.container}>

      {!running ? 
        <PrimaryButton title="Лечь спать" onPress={start} /> :
        <PrimaryButton title={`Проснуться ${formatTimer(elapsed)}`} onPress={endSession} color={darkTheme.danger} />
      }
      <ProgressCircle progress={0.7} />
      <SleepHistory sessions={sessions} />
      <HormonesScreen start={start} end={stop} />
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
        <ProgressCircle
          // style={{ height: 200 }}
          progress={0.7}      // 70%
          // progressColor={"#4CAF50"}
          // backgroundColor={"#ddd"}
          // strokeWidth={20}    // толщина “бара”
        />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: darkTheme.background, padding: 20 },
  title: { color: darkTheme.text, marginVertical: 16, fontSize: 20 },
  history: {
    maxHeight: 240
  }
});
