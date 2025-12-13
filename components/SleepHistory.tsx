import { View, Text, FlatList, StyleSheet } from "react-native";
import SleepSessionItem from "../components/SleepSessionItem";
import EmptyState from "../components/EmptyState";
import { SleepSession } from "@/types";
import { darkTheme } from "@/theme/darkTheme";

const SleepHistory = ({sessions}: {sessions: SleepSession[]}) => {
  return (
    <View style={styles.history}>
      <Text style={styles.title}>История сна</Text>
      {sessions.length === 0 ? (
        <EmptyState text="Пока нет записей" />
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={i => i.id.toString()}
          renderItem={({item}) => <SleepSessionItem session={item} />}
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  title: { color: darkTheme.text, marginVertical: 16, fontSize: 20 },
  history: {
    maxHeight: 240
  }
});

export default SleepHistory;