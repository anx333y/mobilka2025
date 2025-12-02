import { View, FlatList, StyleSheet } from "react-native";
import { achievements } from "../../data/achievements";
import AchievementCard from "../../components/AchievementCard";
import { darkTheme } from "../../theme/darkTheme";

export default function AchievementsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={achievements}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <AchievementCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: darkTheme.background, padding: 20 }
});
