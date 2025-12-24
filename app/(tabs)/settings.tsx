// app/settings/chart.tsx
import { View, Text, ScrollView } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function SettingsScreen() {
  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700"}}>
          Настройки
        </Text>

        <View>
          <Text style={{ color: "#999" }}>Позже мы добавим синхронизацию, тему, уведомления и тд</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
