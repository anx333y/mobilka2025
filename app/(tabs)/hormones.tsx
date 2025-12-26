import { View, Text, StyleSheet } from "react-native";
import { useSleepHormones } from "@/hooks/useSleepHormones";
import ScreenWrapper from "@/components/ScreenWrapper";
import {percentData} from "@/data/chartData";
import { BarChart } from 'react-native-gifted-charts';
import getRemainingSleepTime from "@/helpers/getRemainingSleepTime";
import * as Progress from 'react-native-progress';

const AXIS_COLOR = '#170606';
const AXIS_COLOR2 = '#e1e1e1';
const BACK_COLOR = '#697AC0';

const Coda = require('../../assets/fonts/Coda_800ExtraBold.ttf');
const DAY_MAP = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const todayLabel = DAY_MAP[new Date().getDay()];
const todayPercent =
  percentData.find(d => d.label === todayLabel)?.value ?? 0;
// @ts-ignore
export default function HormonesScreen({start, end}) {
  const { melatonin, cortisol } = useSleepHormones(start, end);
  const { percentPassed, percentRemaining } = getRemainingSleepTime('20:30', 4);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>ДЕНЬ 17</Text>
        <View style={[styles.row, styles.subContainer]}>
          <Text style={styles.title}>ВРЕМЯ СНА: 12:12</Text>
          <Text style={styles.title}>ВРЕМЯ ПОДЬЁМА: 12:12</Text>
        </View>
        <View style={[styles.quality]}>
          <Text style={[styles.title, styles.qualityTitle]}>КАЧЕСТВО СНА: {70}%</Text>
          <View style={styles.qualityBar}>
            <BarChart
              horizontal
              data={[{ value: 70 }]}
              maxValue={100}

              height={48}
              barWidth={113}

              frontColor={AXIS_COLOR}

              hideAxesAndRules
              hideYAxisText
              noOfSections={1}

              yAxisThickness={0}
              xAxisThickness={0}
              yAxisLabelWidth={0}

              barBorderRadius={6}
              isAnimated
            />
          </View>
        </View>
        <View>
          <Text style={[styles.title, styles.qualityTitle]}>
            Осталось спать: {percentRemaining}%
          </Text>
          <View style={{ width: '100%', padding: 16 }}>
            <Progress.Bar
              progress={0.7}
              width={null}
              height={12}
              color={AXIS_COLOR}
              unfilledColor={AXIS_COLOR2}
              borderWidth={0}
              borderRadius={6}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text>52</Text>
      </View>
      <View style={styles.container}>
        <Text>52</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACK_COLOR,
    borderRadius: 26,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,
      height: 5,
    },

    elevation: 5,
  },
  subContainer: {
    marginVertical: 20
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'center',
    fontFamily: Coda,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quality: {
    justifyContent: "space-around",
  },
  qualityTitle: {
    alignSelf: "flex-start",
  },
  qualityBar: {
    height: 12,
    width: '100%',

    backgroundColor: '#E6E8F0',
    borderRadius: 6,

    overflow: 'hidden',
    justifyContent: 'center',
  }
});
