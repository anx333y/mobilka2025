// app/settings/index.tsx
import { View, Text, ScrollView } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
        Настройки
      </Text>

      <View>
        <Text style={{ color: "#999" }}>Позже мы добавим синхронизацию, тему, уведомления и тд</Text>
      </View>
    </ScrollView>
  );
}
