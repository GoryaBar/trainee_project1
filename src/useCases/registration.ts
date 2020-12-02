import { IAsyncStorageHelpmate } from "../modules/storages/asyncStorage";
import { IUser } from "../views/authentication/entities";

interface IRegistrationUseCase {
    registrate: (password: string, name: string, phone: string, email: string, pin: string, isAddBiometry: boolean) => Promise<{
        isSuccess: boolean;
        message: string;
        user: IUser | null;
    }>;
};

export class RegistrationUseCase implements IRegistrationUseCase {
    constructor(private asyncStorage: IAsyncStorageHelpmate) {

    };

    registrate = async (_password: string, name: string, email: string, phone: string, _pin: string, _isAddBiometry: boolean): Promise<{ isSuccess: boolean, message: string, user: IUser | null }> => {
        try {
            const id = 1;
            const uid = 'uid';
            const hashPin = 'hashPin';
            const hashPassword = 'hashPassword';
            const encryptedPin = [1];
            const user: IUser = { logo: '', name, phone, email, key: [], id, uid, hashPassword, hashPin, encryptedPin };
            await this.asyncStorage.set(this.asyncStorage.SERVICES.USER, user);
            return { isSuccess: true, message: '', user };
        } catch (error) {
            console.warn('RegistrationUseCase -> registration: ', error);
            return { isSuccess: false, message: '', user: null };
        }
    };

};
