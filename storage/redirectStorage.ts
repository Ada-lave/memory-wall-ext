import MemoryWallStorage from "./storage";

export class RedirectStorage extends MemoryWallStorage {
    setRedirectState(duration: boolean) {
        this.storage.set("redirect_state", duration)
    }

    async getRedirectState(): Promise<boolean> {
        return await this.storage.get("redirect_state")
    }
}