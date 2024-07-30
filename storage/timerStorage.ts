import MemoryWallStorage from "./storage";

class TimerStorage extends MemoryWallStorage {
    setTimerTime(duration: number) {
        this.storage.set("timer_time", duration)
    }

    async getTimerTime(): Promise<number> {
        return await this.storage.get("timer_time")
    }
}

export default TimerStorage