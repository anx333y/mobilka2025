import {View, StyleSheet, Text} from "react-native";
import {useState} from "react";
import HormonesScreen from "@/components/HormonesScreen";
import {useSleepTimer} from "../../hooks/useSleepTimer";
import {useNotifications} from "../../hooks/useNotifications";
import {formatTimer} from "@/helpers/timer";
import SleepHistory from "@/components/SleepHistory";
import {SleepSession} from "@/data/sleep";
import {ProgressCircle} from "react-native-svg-charts";
import ScreenWrapper from "@/components/ScreenWrapper";

const Coda = require('../../assets/fonts/Coda_800ExtraBold.ttf');

const UNFILL = '#fff'
const AXIS_COLOR = '#4C61B0';
const BACK_COLOR = '#697AC0';

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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            ПОЛЬЗОВАТЕЛЬ
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Возраст: 21</Text>
          <Text style={styles.headerText}>Пол: М</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Вес: 70</Text>
          <Text style={styles.headerText}>Рост: 170</Text>
        </View>
      </View>
      <View style={[styles.container, styles.alarm]}>
        {
          !running ?
              <Text style={[styles.title]} onPress={start}>ЛЕЧЬ СПАТЬ</Text> :
              <Text style={[styles.title]} onPress={endSession}>ПРОСНУТЬСЯ {formatTimer(elapsed)}</Text>
        }
      </View>
      <View style={styles.container}>
        <ProgressCircle progress={0.7} />
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
      <View style={styles.container}>
        <SleepHistory sessions={sessions} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    marginBottom: 15,
    width: '100%',
    height: 70,
    borderRadius: 40,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,
      height: 5,
    },

    elevation: 5,
  },
  container: {
    backgroundColor: BACK_COLOR,
    borderRadius: 26,
    marginVertical: 10,
    marginHorizontal: 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,
      height: 5,
    },

    elevation: 5,
  },

  alarm: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 260,
    height: 40,
    paddingTop: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: 10,
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    justifyContent: 'center',
    fontFamily: Coda,
    fontWeight: 'bold',
  },
  headerTitle: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignContent: 'center',
    color: BACK_COLOR,
    fontSize: 24,
    justifyContent: 'center',
    fontFamily: Coda,
    fontWeight: 'bold',
  },
  headerText: {
    padding: 5,
    color: '#ffffff',
    fontSize: 16,
    fontFamily: Coda,
    fontWeight: 'bold',
  }
});
