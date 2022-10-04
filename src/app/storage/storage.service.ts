export class StorageService implements Storage {

    [name: string]: any
    length!: number
    clear(): void {
        throw new Error('Method not implemented.')
    }
    getItem(key: string): string | null {
        throw new Error('Method not implemented.')
    }
    key(index: number): string | null {
        throw new Error('Method not implemented.')
    }
    removeItem(key: string): void {
        throw new Error('Method not implemented.')
    }
    setItem(key: string, value: string): void {
        localStorage.setItem(key, value)
    }

}