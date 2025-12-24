// components/SleepSessionItem.tsx
import { View, Text } from "react-native";
import { SleepSession } from "../data/sleep";
import { darkTheme1 } from "@/theme/darkTheme";
import { formatTimer } from "@/helpers/timer";
import { getHormonalSleepQuality } from "@/helpers/quality";

export default function SleepSessionItem({ session }: { session: SleepSession }) {
  const diff = Number(session.end) - session.start;
  const isGoodSession = getHormonalSleepQuality(session.start, session.end || 0);
  console.log(isGoodSession)

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: isGoodSession ? darkTheme1.colors.accent : darkTheme1.colors.danger,
        borderRadius: 12,
      }}
    >
      <View>
        <Text style={{ color: "white" }}>
          Начало: {new Date(session.start).toLocaleString()}
        </Text>
        <Text style={{ color: "white" }}>
          Конец: {session.end ? new Date(session.end).toLocaleString() : "—"}
        </Text>
      </View>
      <Text style={{ color: "white" }}>
        {formatTimer(diff)}
      </Text>
    </View>
  );
}
