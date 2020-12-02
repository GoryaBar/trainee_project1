import { IBiometrics } from "../../../modules/biometrics/entities";
import { IAppControllerStore } from "./appControllerStore";

export interface IAppControllerPresenter {
    onBiometryStateChange: () => void;
};

export class AppControllerPresenter implements IAppControllerPresenter {
    constructor(private appControllerStore: IAppControllerStore, private biometrics: IBiometrics) {
    }

    onBiometryStateChange() {
        this.biometrics.isBiometricAvaliable().then(isBiometricAvaliable => {
            this.appControllerStore.onBiometryStateChange(isBiometricAvaliable);
        });
    }
};
