// components/SleepSessionItem.tsx
import {View, Text, StyleSheet} from "react-native";
import { SleepSession } from "../data/sleep";
import { formatTimer } from "@/helpers/timer";

const Coda = require('../assets/fonts/Coda_800ExtraBold.ttf');

export default function SleepSessionItem({ session }: { session: SleepSession }) {
  const diff = Number(session.end) - session.start;

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        marginBottom: 20,

        shadowColor: '#4C61B0',
        shadowOffset: {
          width: -2,
          height: 5,
        },

        elevation: 15,
      }}
    >
        <Text style={styles.timeInfo}>
          НАЧАЛО: {new Date(session.start).toLocaleTimeString([], {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
        </Text>
        <Text style={styles.timeInfo}>
          КОНЕЦ: {session.end ? new Date(session.end).toLocaleTimeString([], {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }) : "—"}
        </Text>
      <Text style={styles.timeInfo}>
        ПРОДОЛЖИТЕЛЬНОСТЬ: {formatTimer(diff)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeInfo: {
    color: "#697AC0",
    fontFamily: Coda,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 4
  }
})
