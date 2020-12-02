import { IStackNavigation } from "../../../entities";
import { IAsyncStorageHelpmate } from "../../../modules/storages/asyncStorage";
import { ITodoItem } from "../entities";
import { IAddTodoStore } from "../storage/addTodoStore";
import { ITodosStore } from "../storage/todosStore";
import { ITodosUseCase, TodosUseCase } from "../useCases";

export interface IAddTodoPresenter {

    setTodo: (TodoItem: ITodoItem) => void;
    clearFields: () => void;
    updateField: (name: 'title' | 'body', value: string) => void;
    handleSave: (navigation: IStackNavigation) => Promise<void>;
};

export class MobXAddTodoPresenter implements IAddTodoPresenter {
    private TodosUseCase: ITodosUseCase = new TodosUseCase(this.asyncStorage);

    constructor(private TodosStore: ITodosStore, private addTodoStore: IAddTodoStore, private asyncStorage: IAsyncStorageHelpmate) {

    };

    setTodo = (TodoItem: ITodoItem) => {
        this.addTodoStore.setTodo(TodoItem);
    };

    clearFields = () => {
        this.addTodoStore.clearFields();
    };

    updateField = (name: 'title' | 'body', value: string) => {
        this.addTodoStore.updateField(name, value);
        this.checkIsDisabledSaveassword();
    };

    handleSave = async (navigation: IStackNavigation) => {
        if (this.addTodoStore.todoItem.id) {
            await this.edditTodo();
        } else {
            await this.addTodo();
        }
        navigation.goBack();
    };

    addTodo = async () => {
        const id = Date.now();
        const newTodoItem = { ...this.addTodoStore.todoItem, id };
        this.TodosStore.setTodos([newTodoItem, ...this.TodosStore.todos]);
        await this.TodosUseCase.saveTodos(this.TodosStore.todos);
    };


    edditTodo = async () => {
        const filteredArray = this.TodosStore.todos.filter(item => item.id !== this.addTodoStore.todoItem.id);
        this.TodosStore.setTodos([this.addTodoStore.todoItem, ...filteredArray]);
        await this.TodosUseCase.saveTodos(this.TodosStore.todos);
    };

    checkIsDisabledSaveassword = () => {
        const { title, body, } = this.addTodoStore.todoItem;
        this.addTodoStore.setDisabledSave(!(!!title && !!body));
    };

};

