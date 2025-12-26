import { View, Text, FlatList, StyleSheet } from "react-native";
import SleepSessionItem from "../components/SleepSessionItem";
import EmptyState from "../components/EmptyState";
import { SleepSession } from "@/types";
import { darkTheme } from "@/theme/darkTheme";

const Coda = require('../assets/fonts/Coda_800ExtraBold.ttf');

const SleepHistory = ({sessions}: {sessions: SleepSession[]}) => {
  return (
    <View>
      <Text style={styles.title}>ИСТОРИЯ СНА</Text>
      {sessions.length === 0 ? (
        <EmptyState/>
      ) : (
        <FlatList
          data={sessions.slice(0, 3)}
          keyExtractor={i => i.id.toString()}
          renderItem={({item}) => <SleepSessionItem session={item} />}
          maxToRenderPerBatch={3}
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  title: { color: darkTheme.text, marginBottom: 16, fontSize: 16, fontWeight: "bold", fontFamily: Coda, textAlign: "center" },
});

export default SleepHistory;