import React, { FC, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { CustomTextInput } from '../../../../components/customTextInput';
import { MainButton } from '../../../../components/mainButton';
import { observer } from 'mobx-react';
import { IRoute, IStackNavigation } from '../../../../entities';
import { useAppStore } from '../../../../storage';
import { MultilineInput } from '../../../../components/multilineInput';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const AddSnippetView: FC<Props> = observer(({ navigation, route }) => {
    const { AddTodoPresenter: { updateField, setTodo, clearFields, handleSave }, AddTodoStore: { state: { disabledSave }, todoItem } } = useAppStore();

    useEffect(() => {
        const item = route.params && JSON.parse(route.params) || { body: '', title: '', id: 0 };
        setTodo(item);
        return clearFields;
    }, []);

    return (
        <ScrollView style={styles.container} keyboardDismissMode='interactive' keyboardShouldPersistTaps={'handled'}>
            <View style={styles.inputsContainer}>
                <CustomTextInput value={todoItem.title} onChangeText={(text) => { updateField('title', text) }} placeholder={'title'} isDark={false} testID='inputTitleAddTodoView' />
                <View style={styles.snippetContainer}>
                    <MultilineInput numberOfLines={6} value={todoItem.body} onChangeText={(text) => { updateField('body', text) }} placeholder={'todo'} isDark={false} testID='inputBodyAddTodoView' />
                </View>
            </View>
            <View style={styles.mainButtonContainer}>
                <MainButton
                    testID='buttonSaveAddTodoView'
                    onPress={() => { handleSave(navigation) }}
                    title={'save'}
                    disabled={disabledSave} />
            </View>
        </ScrollView>
    )
});
