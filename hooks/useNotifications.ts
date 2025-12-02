import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export function useNotifications() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
      })
    });
  }, []);

  const schedule = async () => {
    await Notifications.scheduleNotificationAsync({
      content: { title: "Пора ложиться спать!" },
      trigger: { hour: 23, minute: 0, repeats: true }
    });
  };

  return { schedule };
}
