// data/sleep.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SleepSession = {
  id: string;
  start: number;
  end: number | null;
};

const STORAGE_KEY = "sleep_sessions_v1";
const ACTIVE_KEY = "sleep_active_session_v1";

export async function getAllSessions(): Promise<SleepSession[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

export async function saveSessions(list: SleepSession[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export async function startSleepSession(): Promise<SleepSession> {
  const newSession: SleepSession = {
    id: Date.now().toString(),
    start: Date.now(),
    end: null,
  };

  await AsyncStorage.setItem(ACTIVE_KEY, JSON.stringify(newSession));
  return newSession;
}

export async function stopSleepSession(): Promise<SleepSession | null> {
  const active = await getActiveSession();
  if (!active) return null;

  const updated: SleepSession = {
    ...active,
    end: Date.now(),
  };

  const sessions = await getAllSessions();
  const updatedList = [...sessions, updated];

  await saveSessions(updatedList);
  await AsyncStorage.removeItem(ACTIVE_KEY);

  return updated;
}

export async function getActiveSession(): Promise<SleepSession | null> {
  const json = await AsyncStorage.getItem(ACTIVE_KEY);
  return json ? JSON.parse(json) : null;
}
