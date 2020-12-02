export interface IUser {
    name: string;
    phone: string;
    email: string;
    uid: string;
    id: number;
    key: Array<number>;
    encryptedPin: Array<number>;
    hashPassword: string;
    hashPin: string;
    logo: string;
};
