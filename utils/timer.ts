class Timer {
    private timeoutId: NodeJS.Timeout | undefined

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
    }
}

export default Timer