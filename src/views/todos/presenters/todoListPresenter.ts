import Animated, { Easing } from "react-native-reanimated";
import { IAsyncStorageHelpmate } from '../../../modules/storages/asyncStorage';
import { ITodoListStore } from "../storage/todoListStore";
import { ITodosStore } from "../storage/todosStore";
import { ITodosUseCase, TodosUseCase } from "../useCases";

export interface ITodoListPresenter {
    copyTodo: (body: string) => void;
    setTodos: () => Promise<void>;
};

export class MobXTodoListPresenter implements ITodoListPresenter {
    private TodosUseCase: ITodosUseCase = new TodosUseCase(this.asyncStorage);

    constructor(private TodosStore: ITodosStore, private TodoListStore: ITodoListStore, private asyncStorage: IAsyncStorageHelpmate) {

    };

    copyTodo = (_body: string) => {
        Animated.timing(this.TodoListStore.toastVisibility, { toValue: 1, duration: 500, easing: Easing.linear }).start(({ finished }) => {
            if (finished) {
                Animated.timing(this.TodoListStore.toastVisibility, { toValue: 0, duration: 500, easing: Easing.linear }).start();
            }
        });
    };

    setTodos = async () => {
        const Todos = await this.TodosUseCase.getTodos();
        this.TodosStore.setTodos(Todos);
    };

};
