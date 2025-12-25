import {Tabs} from 'expo-router';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';
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
            backgroundColor: darkTheme.backgroundMenu,
            height: 70,
          },
          tabBarItemStyle: {
            alignSelf: 'center',
          },
          tabBarActiveTintColor: darkTheme.primary,
          tabBarInactiveTintColor: darkTheme.secondary,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}: {color: string, focused: boolean}): JSX.Element => {
            let iconSource;
            switch (route.name) {
              case 'chart':
                iconSource = require('../../assets/tabsIcons/stats.png')
                break;
              case 'index':
                iconSource = focused ? require('../../assets/tabsIcons/home-active.jpg') : require('../../assets/tabsIcons/home.jpg');
                break;
              case 'hormones':
                iconSource = require('../../assets/tabsIcons/details.png')
                break;
              case 'settings':
                iconSource = require('../../assets/tabsIcons/settings.png')
                break;
              default:
                iconSource = require('../../assets/tabsIcons/achievem.png');
            }
            return (
              <View>
                <Image
                  source={iconSource}
                  accessibilityLabel={route.name}
                  style={[
                    styles.tabsIcon,
                    {
                      opacity: focused ? 1 : 0.6
                    }
                  ]}
                />
              </View>
            );
          },
        })}
        >
          <Tabs.Screen name="chart" />
          <Tabs.Screen name="hormones" />
          <Tabs.Screen name="index" />
          <Tabs.Screen name="achievements" />
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
  },
  container: {
    flex: 1,
  },
  tabsIcon: {
    width: 58,
    height: 58,
    elevation: 5
  }
});
