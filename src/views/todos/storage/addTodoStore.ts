import { action, makeAutoObservable } from "mobx";
import { ITodoItem } from "../entities";

export interface IAddTodoStore {
    todoItem: ITodoItem,
    state: {
        disabledSave: boolean;
    },
    setTodo: (snippetItem: ITodoItem) => void;
    clearFields: () => void;
    updateField: (name: 'title' | 'body', value: string) => void;
    setDisabledSave: (value: boolean) => void;
};

export class MobXAddTodoStore implements IAddTodoStore {
    todoItem: ITodoItem = { title: '', body: '', id: 0 };
    state = { disabledSave: true };

    constructor() {
        makeAutoObservable(this);
    };

    @action setTodo = (todoItem: ITodoItem) => {
        this.todoItem = todoItem;
    };

    @action clearFields = () => {
        this.todoItem = { title: '', body: '', id: 0 };
    };

    @action updateField = (name: 'title' | 'body', value: string) => {
        this.todoItem[name] = value;
    };

    @action setDisabledSave = (value: boolean) => {
        this.state.disabledSave = value;
    };

};
