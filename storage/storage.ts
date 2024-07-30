import { Storage } from "@plasmohq/storage";

class MemoryWallStorage {
    protected storage: Storage = new Storage()
}

export default MemoryWallStorage