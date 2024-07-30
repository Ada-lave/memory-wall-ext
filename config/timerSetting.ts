import TimerStorage from "~storage/timerStorage";
class TimerSetting {
    private timerStorage: TimerStorage = new TimerStorage()
    constructor() {}

    async getDuration(): Promise<number> {
        let duration = await this.timerStorage.getTimerTime()
        if (duration == undefined) {
            return 300000
        }
        return duration
    }

    async setDurationInSeconds(duration: number) {
        this.timerStorage.setTimerTime(duration * 1000)
    }
}

export default TimerSetting