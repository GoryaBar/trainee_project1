import { IStackNavigation } from "../../../entities";
import { IUser } from "../entities";
import { IRegistrationStore } from "../storage/registrationStore";
import { IUserStore } from "../storage/userStore";
import { RegistrationUseCase } from "../../../useCases/registration";
import { Alert } from "react-native";
import { IAsyncStorageHelpmate } from "../../../modules/storages/asyncStorage";

export interface IRegistrationPresenter {
    updateField: (fieldName: 'name' | 'password' | 'phone' | 'email' | 'pin', value: string) => void;
    toogleIsAddBiometry: (value: boolean) => void;
    handleRegistrate: (navigation: IStackNavigation) => void;
};

export class RegistrationPresenter implements IRegistrationPresenter {
    private registrationUseCase: RegistrationUseCase = new RegistrationUseCase(this.asyncStorage);

    constructor(private userStore: IUserStore, private registrationStore: IRegistrationStore,  private asyncStorage: IAsyncStorageHelpmate) {

    };

    updateField = (fieldName: 'name' | 'password' | 'phone' | 'email' | 'pin', value: string) => {
        if (fieldName === 'pin' && !isNaN(Number(value)) || fieldName !== 'pin') {
            this.registrationStore.updateField(fieldName, value);
            this.registrationStore.validateButton();
        }
    };

    toogleIsAddBiometry = (value: boolean) => {
        this.registrationStore.updateState('isAddBiometry', value);
    };

    handleRegistrate = async (navigation: IStackNavigation) => {
        try {
            const { password, name, email, phone, pin } = this.registrationStore.fields;
            const { isAddBiometry } = this.registrationStore.state;
            this.toogleInProgress(true);
            const result = await this.registrationUseCase.registrate(password, name, email, phone, pin, isAddBiometry);
            this.proccesingRegistrationResponce(navigation, result);
            this.toogleInProgress(false);
        } catch (error) {
            console.warn('handleRegistrate: ', error);
        }
    };

    proccesingRegistrationResponce = (navigation: IStackNavigation, { isSuccess, message, user }: { isSuccess: boolean, message: string, user: IUser | null }) => {
        if (isSuccess && user) {
            this.userStore.addUser(user);
            navigation.replace('TodosView');
            this.registrationStore.clearFields();
        } else {
            Alert.alert('Error', message, [{ text: 'Ok', onPress: () => { } }]);
        }
    };

    toogleInProgress = (value: boolean) => {
        this.registrationStore.updateState('inProgress', value);
    };

};
