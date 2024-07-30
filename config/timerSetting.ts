import type TimerStorage from "~storage/timerStorage";
class TimerSetting {
    constructor(private timerStorage: TimerStorage) {}

    async getDuration(): Promise<number> {
        let duration = await this.timerStorage.getTimerTime()
        return duration
    }

    async setDurationInSeconds(duration: number) {
        this.timerStorage.setTimerTime(duration * 1000)
    }
}

export default TimerSetting