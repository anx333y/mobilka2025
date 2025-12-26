// app/sleep/achievments.tsx
import {View, Text, ScrollView, FlatList, StyleSheet} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getAllSessions } from "../../data/sleep";
import { useEffect, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import {achievementsData} from "@/data/achievements";

const Coda = require('../../assets/fonts/Coda_800ExtraBold.ttf');

export default function achievements () {
  // const { id } = useLocalSearchParams();
  // const [session, setSession] = useState<any>(null);
  //
  // useEffect(() => {
  //   (async () => {
  //     const all = await getAllSessions();
  //     const s = all.find(x => x.id === id);
  //     setSession(s);
  //   })();
  // }, [id]);
  //
  // if (!session)
  //   return (
  //     <ScreenWrapper>
  //       <View style={{ padding: 30 }}>
  //         <Text style={{ color: "white" }}>Сессия не найдена</Text>
  //       </View>
  //     </ScreenWrapper>
  //   );
  console.log(achievementsData)

  return (
    <ScreenWrapper>
      <FlatList
        style={styles.container}
        data={achievementsData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              item.isCompleted ? styles.completed : styles.incomplete,
            ]}
          >
            <Text
              style={[
                styles.title,
                item.isCompleted && styles.completedText,
              ]}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 20
  },
  item: {
    height: 50,
    width: "100%",
    borderRadius: 40,
    marginVertical: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  completed : {
    backgroundColor: '#697AC0',
    borderColor: '#fff',
    borderStyle: "solid",
    borderWidth: 5
  },
  incomplete: {
    backgroundColor: '#fff',
    borderColor: '#697AC0',
    borderStyle: "solid",
    borderWidth: 5
  },
  title: {
    flexDirection: 'row',
    fontFamily: Coda,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#697AC0',
    textAlign: 'center',
  },
  completedText: {
    color: '#fff',
  },
});
