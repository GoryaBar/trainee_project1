import { IUserStore, MobXUserStore } from "../views/authentication/storage/userStore";
import { IRegistrationPresenter, RegistrationPresenter } from "../views/authentication/presenters/registrationPresenter";
import { IRegistrationStore, MobXRegistrationStore } from "../views/authentication/storage/registrationStore";
import { IAsyncStorageHelpmate, AsyncStoragelpmate } from "../modules/storages/asyncStorage";
import { ISplashPresenter, SplashPresenter } from "../views/splashView/splashPresenter";
import { IAddTodoStore, MobXAddTodoStore } from "../views/todos/storage/addTodoStore";
import { ITodosStore, MobXTodosStore } from "../views/todos/storage/todosStore";
import { ITodoListStore, MobXTodoListStore } from "../views/todos/storage/todoListStore";
import { IAddTodoPresenter, MobXAddTodoPresenter } from "../views/todos/presenters/addTodoPresenter";
import { ITodoListPresenter, MobXTodoListPresenter } from "../views/todos/presenters/todoListPresenter";

export interface IStore {
    AsyncStorage: IAsyncStorageHelpmate;
    UserStore: IUserStore;
    RegistrationStore: IRegistrationStore
    RegistrationPresenter: IRegistrationPresenter;
    TodosStore: ITodosStore;
    TodoListStore: ITodoListStore
    TodoListPresenter: ITodoListPresenter;
    AddTodoStore: IAddTodoStore
    AddTodoPresenter: IAddTodoPresenter;
    SplashPresenter: ISplashPresenter ;
};

export class StorageFactory implements IStore {
    private static exist: boolean;
    private static instance: StorageFactory;
    readonly AsyncStorage: IAsyncStorageHelpmate = new AsyncStoragelpmate();;

    // authentication
    readonly UserStore: IUserStore = new MobXUserStore();
    readonly RegistrationStore: IRegistrationStore = new MobXRegistrationStore();
    readonly RegistrationPresenter: IRegistrationPresenter = new RegistrationPresenter(this.UserStore, this.RegistrationStore, this.AsyncStorage);

    // Todos
    readonly TodosStore: ITodosStore = new MobXTodosStore();
    readonly TodoListStore: ITodoListStore = new MobXTodoListStore();
    readonly TodoListPresenter: ITodoListPresenter = new MobXTodoListPresenter(this.TodosStore, this.TodoListStore, this.AsyncStorage);
    readonly AddTodoStore: IAddTodoStore = new MobXAddTodoStore();
    readonly AddTodoPresenter: IAddTodoPresenter = new MobXAddTodoPresenter(this.TodosStore, this.AddTodoStore, this.AsyncStorage);

    readonly SplashPresenter: ISplashPresenter = new SplashPresenter(this.TodosStore, this.UserStore, this.AsyncStorage);

    constructor() {
        if (StorageFactory.exist) {
            return StorageFactory.instance;
        }
        StorageFactory.exist = true;
    }

};

export const Store: IStore = new StorageFactory();
