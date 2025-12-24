import {View, StyleSheet} from "react-native";
import {useState} from "react";
import PrimaryButton from "@/components/PrimaryButton";
import HormonesScreen from "@/components/HormonesScreen";
import {darkTheme} from "../../theme/darkTheme";
import {useSleepTimer} from "../../hooks/useSleepTimer";
import {useNotifications} from "../../hooks/useNotifications";
import {formatTimer} from "@/helpers/timer";
import SleepHistory from "@/components/SleepHistory";
import {SleepSession} from "@/data/sleep";
import {ProgressCircle} from "react-native-svg-charts";
import ScreenWrapper from "@/components/ScreenWrapper";

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
    <ScreenWrapper>
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
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', height: 100, padding: 20 },
  title: { color: darkTheme.text, marginVertical: 16, fontSize: 20 },
  history: {
    maxHeight: 240
  }
});
