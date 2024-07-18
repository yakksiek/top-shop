import { useState } from 'react';

function useLocalStorage<T>(key: string, defaultValue: T): [T, (newData: T) => void] {
    function getJSONFromLocalStorage(): T {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            return JSON.parse(storedData) as T;
        }
        return defaultValue;
    }

    const [data, setData] = useState<T>(() => getJSONFromLocalStorage());

    function setJSONToLocalStorage(newData: T): void {
        setData(newData);
        localStorage.setItem(key, JSON.stringify(newData));
    }

    return [data, setJSONToLocalStorage];
}

export default useLocalStorage;
