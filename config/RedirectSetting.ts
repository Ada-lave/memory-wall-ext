import { RedirectStorage } from "~storage/redirectStorage"

export class RedirectSetting {
    private redirectStorage: RedirectStorage = new RedirectStorage()
    constructor() {}

    async getState(): Promise<boolean> {
        let state = await this.redirectStorage.getRedirectState()
        if (state == undefined) {
            return true
        }
        return state
    }

    setState(state: boolean) {
        this.redirectStorage.setRedirectState(state)
    }
}