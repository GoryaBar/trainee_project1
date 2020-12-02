export interface IStorage {
    get: (service: string) => Promise<any>;
    set: (service: string, payload: Object) => Promise<boolean>;
    remove: (service: string) => Promise<boolean>;
    cleanOnFirstLaunch: (servicesArray: Array<string>) => Promise<void>;
};
