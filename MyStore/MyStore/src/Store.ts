const useStore = (() => {
    let storeInstance: { getStore: () => string; setStore: (value: string) => void; subscribe: (fn: () => void) => void; unSubscribe: (fn: () => void) => void; };

    const createStoreInstance = () => {
        let store = '';
        const subs: (() => void)[] = [];
        const getStore = () => {
            return store
        }
        const setStore = (value: string) => {
            store = value;
            subs.forEach((fn) => fn());
        }

        const subscribe = (fn: () => void) => {
            subs.push(fn);
        }

        const unSubscribe = (fn: () => void) => {
            const index = subs.indexOf(fn);
            subs.splice(index, 1);
        }
        return {getStore, setStore, subscribe, unSubscribe};
    }

    return () => {
        if(!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
})();

export default useStore;