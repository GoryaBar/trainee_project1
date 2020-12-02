import { action, makeAutoObservable } from "mobx";

export interface IAppControllerStore {
    isConnected: boolean;
    appStateActivity: string;
    biometryType: string;
    isBiometryAvailable: boolean;
    onIsConnectedChange: (value: boolean) => void;
    onAppStateActivityChange: (value: string) => void;
    onBiometryStateChange: (value: { biometryType: string, isBiometryAvailable: boolean }) => void;
};

export class AppControllerStore implements IAppControllerStore {
    constructor() {
        makeAutoObservable(this)
    }

    isConnected: boolean = true;
    appStateActivity: string = '';
    biometryType: string = '';
    isBiometryAvailable: boolean = false;

    @action onIsConnectedChange(value: boolean) {
        this.isConnected = value;
    }

    @action onAppStateActivityChange(value: string) {
        this.appStateActivity = value;
    }

    @action onBiometryStateChange(value: { biometryType: string; isBiometryAvailable: boolean; }) {
        this.biometryType = value.biometryType;
        this.isBiometryAvailable = value.isBiometryAvailable;
    }
};
