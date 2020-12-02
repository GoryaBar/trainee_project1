import AsyncStorage from '@react-native-community/async-storage';
import { IStorage } from './entities';

class AsyncStorageService implements IStorage {
    get = async (service: string) => {
        try {
            let payload = await AsyncStorage.getItem(service);
            if (payload) {
                payload = JSON.parse(payload);
            }
            return payload;
        } catch (error) {
            console.warn('getDataFromAsyncStorage: ', error);
            return null;
        }
    };

    set = async (service: string, payload: object) => {
        try {
            const payloadJSON = JSON.stringify(payload)
            await AsyncStorage.setItem(service, payloadJSON);
            return true;
        } catch (error) {
            console.warn('setDataToAsyncStorage: ', error);
            return false;
        }
    };

    remove = async (service: string) => {
        try {
            await AsyncStorage.removeItem(service);
            return true;
        } catch (error) {
            console.warn('removeDataFromAsyncStorage: ', error);
            return false;
        }
    };

    cleanOnFirstLaunch = async () => {
        async () => { }
    };
};

export interface IAsyncStorageHelpmate extends IStorage {
    SERVICES: {
        TODOS: string;
        USER: string;
    },
};


export class AsyncStoragelpmate extends AsyncStorageService implements IAsyncStorageHelpmate {
    SERVICES = {
        TODOS: 'TODOS',
        USER: 'USER',
    };

    constructor() {
        super();
    }

};
