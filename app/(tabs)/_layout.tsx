import {Tabs} from 'expo-router';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import {darkTheme} from '@/theme/darkTheme';
import {JSX} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/back.png")}
        style={styles.background}
      >
        <Tabs
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: darkTheme.backgroundMenu
            },
            tabBarActiveTintColor: darkTheme.primary,
            tabBarInactiveTintColor: darkTheme.secondary,
            tabBarShowLabel: false,
            tabBarIcon: ({color}: {color: string}): JSX.Element => {
              let iconSource;
              switch (route.name) {
                case 'chart':
                  iconSource = require('../../assets/tabsIcons/chart.png')
                  break;
                case 'settings':
                  iconSource = require('../../assets/tabsIcons/settings.png')
                  break;
                case 'hormones':
                  iconSource = require('../../assets/tabsIcons/details.png')
                  break;
                default:
                  iconSource = require('../../assets/tabsIcons/achievements.png');
              }
              return (
                <Image
                  source={iconSource}
                  accessibilityLabel={route.name}
                  style={styles.tabsIcon}
                />
              );
            },
          })}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="chart" />
          <Tabs.Screen name="achievements" />
          <Tabs.Screen name="hormones" />
          <Tabs.Screen name="settings" />
        </Tabs>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    height: 100,
  },
  tabsIcon: {
    width: 80,
    height: 80
  }
});
