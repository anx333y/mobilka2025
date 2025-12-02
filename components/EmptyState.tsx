// components/EmptyState.tsx
import { View, Text } from "react-native";

export default function EmptyState({ text }: { text: string }) {
  return (
    <View style={{ padding: 40, alignItems: "center" }}>
      <Text style={{ color: "#777", fontSize: 16 }}>{text}</Text>
    </View>
  );
}
