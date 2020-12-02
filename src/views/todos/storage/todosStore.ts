import { action, makeAutoObservable } from "mobx";
import { ITodoItem } from "../entities";

export interface ITodosStore {
    todos: Array<ITodoItem>;
    setTodos: (todos: Array<ITodoItem>) => void;
};

export class MobXTodosStore implements ITodosStore {
    todos: Array<ITodoItem> = [];

    constructor() {
        makeAutoObservable(this);
    };

    @action setTodos = (todos: Array<ITodoItem>) => {
        this.todos = todos;
    };

};
