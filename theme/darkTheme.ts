export const darkTheme = {
  background: "#0D0D0D",
  card: "#1A1A1A",
  text: "#FFFFFF",
  secondary: "#999999",
  primary: "#4C61B0",
  accent: "#C77DFF",
  danger: "#FF6B6B",
  backgroundMenu: '#697AC0'
};

// themes.ts
import { Theme } from '@react-navigation/native';
import { Platform } from 'react-native';

// Определяем шрифты в зависимости от платформы
const getFonts = () => {
  if (Platform.OS === 'ios') {
    return {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '700',
      },
      light: {
        fontFamily: 'System',
        fontWeight: '300',
      },
    };
  } else {
    return {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
    };
  }
};

export const darkTheme1: Theme = {
  dark: true,
  colors: {
    primary: "#CD56CA",
    background: "#070A17",
    card: "#1A1A1A",
    text: "#FFFFFF",
    border: "#2A2A2A",
    notification: "#FF6B6B",
    secondary: "#999999",
    accent: "#C77DFF",
    danger: "#FF6B6B",
  },
  fonts: getFonts(),
};
