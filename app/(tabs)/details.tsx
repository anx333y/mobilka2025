// app/sleep/details.tsx
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getAllSessions } from "../../data/sleep";
import { useEffect, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function SleepDetails() {
  const { id } = useLocalSearchParams();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const all = await getAllSessions();
      const s = all.find(x => x.id === id);
      setSession(s);
    })();
  }, [id]);

  if (!session)
    return (
      <ScreenWrapper>
        <View style={{ padding: 30 }}>
          <Text style={{ color: "white" }}>Сессия не найдена</Text>
        </View>
      </ScreenWrapper>
    );

  return (
    <ScreenWrapper>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>
          Детали сна
        </Text>

        <Text style={{ color: "white", marginVertical: 5 }}>
          Начало: {new Date(session.start).toLocaleString()}
        </Text>
        <Text style={{ color: "white", marginVertical: 5 }}>
          Конец: {session.end ? new Date(session.end).toLocaleString() : "Еще идет"}
        </Text>
      </ScrollView>
    </ScreenWrapper>
  );
}
