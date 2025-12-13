import { SleepSession } from "@/types";
import { action, makeObservable, observable } from "mobx";

class SessionStore {
  sessions: SleepSession[] = [];

  constructor() {
    makeObservable(this, {
      sessions: observable,
      setSessions: action
    });
  };

  setSessions = (sessions: SleepSession[]) => {
    this.sessions = sessions;
  };

}

export default SessionStore;