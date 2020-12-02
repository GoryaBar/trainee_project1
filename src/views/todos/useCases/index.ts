import { IAsyncStorageHelpmate } from "../../../modules/storages/asyncStorage";
import { ITodoItem } from "../entities";

export interface ITodosUseCase {
    saveTodos: (snippetItems: Array<ITodoItem>) => Promise<void>;
    getTodos: () => Promise<Array<ITodoItem>>;
};

export class TodosUseCase implements ITodosUseCase {
    constructor(private asyncStorage: IAsyncStorageHelpmate) {

    };

    saveTodos = async (snippetItems: Array<ITodoItem>): Promise<void> => {
        try {
            await this.asyncStorage.set('TODOS', [...snippetItems]);
        } catch (error) {
            console.warn('saveTodos: ', error);
        }
    };

    getTodos = async (): Promise<Array<ITodoItem>> => {
        try {
            let Todos: Array<ITodoItem> = [];
            const result: Array<ITodoItem> = await this.asyncStorage.get('TODOS');
            if (result) {
                Todos = result;
            }
            return Todos;
        } catch (error) {
            console.warn('getTodos: ', error);
            return [];
        }
    };

};
