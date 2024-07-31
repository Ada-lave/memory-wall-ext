import type { PlasmoCSConfig } from "plasmo"

class Timer {
    private timeoutId: NodeJS.Timeout | undefined
    public timerEnd: boolean = false

    constructor(private callback: () => void, private delay: number) {}

    start() {
        this.timeoutId = setTimeout(this.callback ,this.delay)
    }

    stop() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
            this.timeoutId = undefined
        }
    }

    restart() {
        this.stop()
        this.start()
        console.log("Timer restarted")
    }
}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
  }

export default Timer