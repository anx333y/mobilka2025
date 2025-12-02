import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import SleepSessionItem from "../components/SleepSessionItem";
import EmptyState from "../components/EmptyState";
import { darkTheme } from "../theme/darkTheme";
import { useSleepTimer } from "../hooks/useSleepTimer";
import { useNotifications } from "../hooks/useNotifications";

export default function HomeScreen() {
  const [sessions, setSessions] = useState([]);
  const { startTime, running, start, stop } = useSleepTimer();
  useNotifications();

  const endSession = () => {
    setSessions(prev => [
      { start: startTime, end: Date.now(), id: prev.length + 1 },
      ...prev
    ]);
    stop();
  };

  return (
    <View style={styles.container}>

      {!running && (
        <PrimaryButton text="Начать сон" onPress={start} />
      )}

      {running && (
        <PrimaryButton text="Закончить сон" onPress={endSession} color={darkTheme.danger} />
      )}

      <Text style={styles.title}>История сна</Text>

      {sessions.length === 0 ? (
        <EmptyState text="Пока нет записей" />
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={i => i.id.toString()}
          renderItem={({ item }) => <SleepSessionItem session={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: darkTheme.background, padding: 20 },
  title: { color: darkTheme.text, marginVertical: 16, fontSize: 20 }
});
