import {StyleSheet, View, Text} from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import {hormonesData, percentData, sleepData} from "@/data/chartData";
import {BarChart, LineChart, LegendComponent} from "react-native-gifted-charts";
import { useFonts } from '@expo-google-fonts/coda';

const Coda = require('../../assets/fonts/Coda_800ExtraBold.ttf');
const AXIS_COLOR = '#697AC0';
const melatoninData = hormonesData.map(item => ({
  value: item.melatonin,
  label: item.day,
}));

const cortisolData = hormonesData.map(item => ({
  value: item.cortisol,
}));
export default function ChartScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>РЕКОРД 5 ДНЕЙ!</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>КАЧЕСТВО СНА</Text>
        <View style={styles.bar}>
          <LineChart
            data={percentData}
            curved
            height={120}
            spacing={42}
            thickness={5}
            color={AXIS_COLOR}

            stepValue={25}
            maxValue={100}

            yAxisLabelSuffix="%"
            yAxisLabelWidth={40}
            yAxisTextStyle={{
              color: AXIS_COLOR,
              fontFamily: Coda,
              fontSize: 12,
            }}
            xAxisLabelTextStyle={{
              color: AXIS_COLOR,
              fontFamily: Coda,
              fontSize: 12,
            }}
            hideRules
            rulesColor="transparent"
            xAxisColor={AXIS_COLOR}
            yAxisColor={AXIS_COLOR}
          />
        </View>
      </View>
        <View style={styles.container}>
          <Text style={styles.title}>ПРОДОЛЖИТЕЛЬНОСТЬ СНА</Text>
          <View style={styles.bar}>
            <BarChart
              barBorderTopLeftRadius={12}
              barBorderTopRightRadius={12}
              data={sleepData}
              barWidth={20}
              spacing={15}
              height={120}

              initialSpacing={10}
              yAxisLabelSuffix="ч"
              yAxisTextStyle={{
                color: AXIS_COLOR,
                fontFamily: Coda,
                fontSize: 12,
              }}
              xAxisLabelTextStyle={{
                color: AXIS_COLOR,
                fontFamily: Coda,
                fontSize: 12,
              }}
              stepValue={2}
              maxValue={10}
              xAxisColor={'#4C61B0'}
              yAxisColor={'#4C61B0'}
              rulesType='dotted'

              frontColor={'#4C61B0'}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>ГОРМОНЫ БИОРИТМОВ</Text>
          <View style={styles.legend}>
            <Text style={{  color: AXIS_COLOR, marginRight: 12, fontFamily: Coda }}>
              <Text style={{ color: '#6C63FF'}}>● </Text>
              Мелатонин
            </Text>
            <Text style={{ color: AXIS_COLOR, fontFamily: Coda }}>
              <Text style={{ color: '#FF6B6B'}}>● </Text>
              Кортизол
            </Text>
          </View>
          <View style={styles.bar}>
            <LineChart
              data={melatoninData}
              data2={cortisolData}
              curved
              height={120}
              spacing={42}
              initialSpacing={10}
              thickness={5}
              thickness2={5}

              color="#6C63FF"
              color2="#FF6B6B"

              stepValue={25}
              maxValue={100}
              yAxisLabelSuffix="%"
              yAxisLabelWidth={40}
              yAxisTextStyle={{
                color: AXIS_COLOR,
                fontFamily: Coda,
                fontSize: 12,
              }}
              xAxisLabelTextStyle={{
                color: AXIS_COLOR,
                fontFamily: Coda,
                fontSize: 12,
              }}
              xAxisColor={AXIS_COLOR}
              yAxisColor={AXIS_COLOR}

              hideRules
            />
          </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#697AC0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 15,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,  // тень смещена влево на 4 px
      height: 5,  // тень смещена вниз на 4 px
    },

    // Для Android (эквивалент тени)
    elevation: 5,
  },
  container: {
    backgroundColor: '#697AC0',
    borderRadius: 26,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,  // тень смещена влево на 4 px
      height: 5,  // тень смещена вниз на 4 px
    },

    // Для Android (эквивалент тени)
    elevation: 5,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'center',
    fontFamily: Coda,
    fontWeight: 'normal',
  },
  bar: {
    backgroundColor: '#ffffff',
    borderRadius: 26,
    height: 170,
    paddingVertical: 15,
    shadowColor: '#4C61B0',
    shadowOffset: {
      width: -5,  // тень смещена влево на 4 px
      height: 5,  // тень смещена вниз на 4 px
    },

    // Для Android (эквивалент тени)
    elevation: 5,
  },
  legend: {
    zIndex: 2,
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
    left: 80
  }
});
