import {StyleSheet, Dimensions, View} from "react-native";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
import { darkTheme } from "../../theme/darkTheme";
import ScreenWrapper from "@/components/ScreenWrapper";

const sample = [
  { x: 1, y: 6.2 },
  { x: 2, y: 7.1 },
  { x: 3, y: 6.8 },
  { x: 4, y: 8.0 }
];

export default function ChartScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <VictoryChart width={Dimensions.get("window").width} theme={VictoryTheme.material}>
          <VictoryLine
            interpolation="natural"
            data={sample}
            style={{
              data: { stroke: darkTheme.primary }
            }}
          />
        </VictoryChart>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
