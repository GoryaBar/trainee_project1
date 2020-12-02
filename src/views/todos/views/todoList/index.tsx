import React, { FC, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { observer } from 'mobx-react';
import { IRoute, IStackNavigation } from '../../../../entities';
import { CircleAddButton } from '../../../../components/circleAddButton';
import { useAppStore } from '../../../../storage';
import { SnippetItemPresenter } from './snippetItemPresenter';
import { Toast } from './toast';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const TodosView: FC<Props> = observer(({ navigation }) => {
    const { TodosStore: { todos, }, TodoListStore: { toastVisibility }, TodoListPresenter: { copyTodo, setTodos } } = useAppStore();

    useEffect(() => { setTodos(); }, []);

    return (
        <View style={styles.container}>
            <FlatList
                testID='snippetListTodosView'
                accessibilityLabel='snippetListTodosView'
                data={todos}
                renderItem={({ item }) => <SnippetItemPresenter {...{ navigation, copyTodo }} snippetItem={item} />}
                keyExtractor={(item) => `${item.id}`}
            />
            <CircleAddButton onPress={() => { navigation.navigate('AddSnippetView') }} testID={'buttonAddTodoTodosView'} />
            <Toast text={'copy'} visibility={toastVisibility} />
        </View>
    )
});
