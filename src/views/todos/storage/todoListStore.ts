import { makeAutoObservable } from "mobx";
import Animated from "react-native-reanimated";

export interface ITodoListStore {
    toastVisibility: Animated.Node<number>
};

export class MobXTodoListStore implements ITodoListStore {
    toastVisibility: Animated.Node<number> = new Animated.Value(0);

    constructor() {
        makeAutoObservable(this);
    };

};
