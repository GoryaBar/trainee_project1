import { IStackNavigation } from '../../entities';
import { IAsyncStorageHelpmate } from '../../modules/storages/asyncStorage';
import { IUserStore } from '../authentication/storage/userStore';
import { ITodosStore } from '../todos/storage/todosStore';

export interface ISplashPresenter {
    lounchData: (navigation: IStackNavigation) => Promise<void>
};

export class SplashPresenter implements ISplashPresenter {
    constructor(private todosStore: ITodosStore, private userStore: IUserStore, private asyncStorage: IAsyncStorageHelpmate) {

    };

    lounchData = async (navigation: IStackNavigation) => {
        try {
            const todos = await this.asyncStorage.get(this.asyncStorage.SERVICES.TODOS);
            if (todos) {
                this.todosStore.setTodos(todos);
            }
            const user = await this.asyncStorage.get(this.asyncStorage.SERVICES.USER);
            if (user) {
                this.userStore.addUser(user);
                navigation.replace('TodosView');
            } else {
                navigation.replace('RegistrationView');
            }
        } catch (error) {
            console.warn('lounchData: ', error);
            navigation.replace('RegistrationView');
        }
    };

};
