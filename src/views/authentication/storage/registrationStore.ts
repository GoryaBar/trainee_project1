import { action, makeAutoObservable } from "mobx";

export interface IRegistrationStore {
    fields: {
        name: string;
        password: string;
        phone: string;
        email: string;
        pin: string;
    };
    state: {
        isAddBiometry: boolean;
        disabled: boolean;
        inProgress: boolean;
    };
    updateField: (fieldName: 'name' | 'password' | 'phone' | 'email' | 'pin', value: string) => void;
    updateState: (paramName: 'isAddBiometry' | 'disabled' | 'inProgress', value: boolean) => void;
    clearFields: () => void;
    validateButton: () => void;
};

export class MobXRegistrationStore implements IRegistrationStore {
    fields = { name: '', password: '', phone: '', email: '', pin: '' };
    state = { isAddBiometry: false, disabled: true, inProgress: false };

    constructor() {
        makeAutoObservable(this);
    };

    @action updateField = (fieldName: 'name' | 'password' | 'phone' | 'email' | 'pin', value: string) => {
        this.fields[fieldName] = value;
    };

    @action validateButton = () => {
        const { name, password, pin } = this.fields;
        this.state.disabled = !(name.length > 1 && password.length > 3 && pin.length > 3);
    };

    @action updateState = (paramName: 'isAddBiometry' | 'disabled' | 'inProgress', value: boolean) => {
        this.state[paramName] = value;
    };

    @action clearFields = () => {
        this.fields = { name: '', password: '', phone: '', email: '', pin: '' };
        this.state = { isAddBiometry: false, disabled: true, inProgress: false };
    };

};
