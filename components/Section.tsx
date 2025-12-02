// components/Section.tsx
import { View, Text } from "react-native";

export default function Section({ title }: { title: string }) {
  return (
    <View style={{ marginVertical: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
    </View>
  );
}
