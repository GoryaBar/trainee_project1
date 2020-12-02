import { action, makeAutoObservable } from "mobx";
import { IUser } from "../entities";

export interface IUserStore {
    user: IUser;
    addUser: (user: IUser) => void;
    setKey: (key: number[]) => void;
};

export class MobXUserStore implements IUserStore {
    user: IUser = { uid: '', logo: '', name: '', phone: '', email: '', id: 0, key: [], hashPassword: '', hashPin: '', encryptedPin: [] };

    constructor() {
        makeAutoObservable(this);
    };

    @action addUser = (user: IUser) => {
        this.user = user;
    };

    @action setKey = (key: number[]) => {
        this.user.key = key;
    };

};
