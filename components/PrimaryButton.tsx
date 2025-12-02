// components/PrimaryButton.tsx
import { Pressable, Text } from "react-native";

export default function PrimaryButton({ title, onPress, color }: { title: string; onPress: () => void, color?: string }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: color || "#4E6AF3",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
        {title}
      </Text>
    </Pressable>
  );
}
