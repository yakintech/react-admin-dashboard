import SecureLS from "secure-ls";


export const storageService = {
    save: (key: string, value: any) => {
        const ls = new SecureLS({ isCompression: false });
        ls.set(key, value);
    },
    get: (key: string) => {
        const ls = new SecureLS({ isCompression: false });
        return ls.get(key);
    },
    remove: (key: string) => {
        const ls = new SecureLS({ isCompression: false });
        ls.remove(key);
    },
}