import {View, Text, StyleSheet, FlatList, Pressable} from "react-native";
import { useSleepHormones } from "@/hooks/useSleepHormones";
import ScreenWrapper from "@/components/ScreenWrapper";
import {percentData} from "@/data/chartData";
import getRemainingSleepTime from "@/helpers/getRemainingSleepTime";
import * as Progress from 'react-native-progress';

const UNFILL = '#fff'
const AXIS_COLOR = '#4C61B0';
const BACK_COLOR = '#697AC0';

const Coda = require('../../assets/fonts/Coda_800ExtraBold.ttf');
const DAY_MAP = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const todayLabel = DAY_MAP[new Date().getDay()];
const todayPercent =
  percentData.find(d => d.label === todayLabel)?.value ?? 0;

const calendarData = Array.from({ length: 9 }, (_, i) => ({
  id: i.toString(),
  day: new Date().getDate() - i,
}));

// @ts-ignore
export default function HormonesScreen({start, end}) {
  const [startTime, endTime] = ['20:30', '05:30']
  const { melatonin, cortisol } = useSleepHormones(start, end);
  const {
    percentPassed,
    percentRemaining,
    remainingHours,
    remainingMinutes,
  } = getRemainingSleepTime(startTime, 9);

  return (
    <ScreenWrapper>
      <View style={[styles.container, styles.first]}>
        <Text style={styles.title}>ДЕНЬ 17</Text>
        <View style={[styles.row, styles.subContainer]}>
          <Text style={styles.title}>ВРЕМЯ СПАТЬ: {startTime}</Text>
          <Text style={styles.title}>ПОДЬЁМ: {endTime}</Text>
        </View>
        <View style={[styles.quality]}>
          <Text style={[styles.title, styles.qualityTitle]}>КАЧЕСТВО СНА: {70}%</Text>
          <View style={styles.subContainer}>
            <Progress.Bar
              progress={todayPercent / 100}
              width={null}
              height={15}
              color={AXIS_COLOR}
              unfilledColor={UNFILL}
              borderWidth={0}
              borderRadius={8}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.title, styles.qualityTitle]}>
            Осталось спать: {remainingHours} ч. {remainingMinutes} мин.
          </Text>
          <View style={styles.subContainer}>
            <Progress.Bar
              progress={percentPassed / 100}
              width={null}
              height={15}
              color={AXIS_COLOR}
              unfilledColor={UNFILL}
              borderWidth={0}
              borderRadius={8}
            />
          </View>
        </View>
      </View>
      <View style={[styles.container, styles.alarm]}>
        <Text style={[styles.title]}>ПОДЪЁМ: {endTime}</Text>
      </View>
      <View style={[styles.container, styles.calendar]}>
        <Text style={[styles.title]}>КАЛЕНДАРЬ СНА</Text>
        <FlatList
          data={calendarData}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={styles.flatRow}
          renderItem={({ item }) => (
            <Pressable
              style={styles.cell}
              onPress={() => {
                console.log('День:', item.day);
              }}
            >
              <Text style={styles.cellText}>
                {item.day}
              </Text>
              <Text style={styles.cellMonth}>
                ДЕК
              </Text>
            </Pressable>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  first: {
    marginTop: 70
  },
  container: {
    backgroundColor: BACK_COLOR,
    borderRadius: 26,
    marginVertical: 20,
    marginHorizontal: 40,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,
      height: 5,
    },

    elevation: 5,
  },
  alarm: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 260,
    height: 40,
    paddingTop: 8,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: 10,
    justifyContent: 'center',
  },
  subContainer: {
    marginVertical: 15
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'center',
    fontFamily: Coda,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quality: {
    justifyContent: "space-around",
    marginVertical: 5,
  },
  qualityTitle: {
    alignSelf: "flex-start",
    marginBottom: 0,
  },
  qualityBar: {
    height: 12,
    width: '100%',

    backgroundColor: '#E6E8F0',
    borderRadius: 6,

    overflow: 'hidden',
    justifyContent: 'center',
  },
  flatRow: {
    justifyContent: 'space-between',
    marginVertical: 12,
    fontSize: 16,
    fontFamily: 'Coda',
    fontWeight: 'bold',
  },

  cell: {
    width: 67,
    height: 67,
    aspectRatio: 1,
    backgroundColor: '#4C61B0',
    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 4,
    fontSize: 16,
    fontFamily: 'Coda',
    fontWeight: 'bold',
  },

  cellText: {
    fontSize: 16,
    fontFamily: Coda,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },

  cellMonth: {
    fontSize: 16,
    fontFamily: Coda,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  calendar: {
    paddingHorizontal: 35
  }
});
