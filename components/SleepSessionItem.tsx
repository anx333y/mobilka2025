// components/SleepSessionItem.tsx
import { View, Text } from "react-native";
import { SleepSession } from "../data/sleep";

export default function SleepSessionItem({ session }: { session: SleepSession }) {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#222",
        borderRadius: 12,
        marginVertical: 6,
      }}
    >
      <Text style={{ color: "white" }}>
        Начало: {new Date(session.start).toLocaleString()}
      </Text>
      <Text style={{ color: "white" }}>
        Конец: {session.end ? new Date(session.end).toLocaleString() : "—"}
      </Text>
    </View>
  );
}
