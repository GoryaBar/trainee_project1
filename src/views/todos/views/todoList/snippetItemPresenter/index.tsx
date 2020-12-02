import React, { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IStackNavigation } from '../../../../../entities';
import { ITodoItem } from '../../../entities';
import { styles } from './styles';

interface Props {
    snippetItem: ITodoItem;
    navigation: IStackNavigation;
    copyTodo: (body: string) => void;
};

export const SnippetItemPresenter: FC<Props> = ({ copyTodo, snippetItem: { title, body } }) => {
    const [isSnippetVisible, setIsSnippetVisible] = useState(false);

    return (
        <Pressable
            testID={`button${title}ItemTodoView`}
            accessibilityLabel={`button${title}ItemTodoView`}
            onPress={() => { setIsSnippetVisible(!isSnippetVisible) }} style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]}  >
            <View style={styles.infoContainer}>
                <Text testID={`title${title}ItemTodoView`} accessibilityLabel={`title${title}ItemTodoView`} numberOfLines={2} style={styles.textTitle}>{title}</Text>
                <Pressable onPress={() => copyTodo(body)} style={({ pressed }) => [styles.iconContainer, { opacity: pressed ? 0.5 : 1 }]}  >
                    <Text>copy</Text>
                </Pressable>
            </View>
            {isSnippetVisible ? <Text testID={`body${title}ItemTodoView`} accessibilityLabel={`body${title}ItemTodoView`} style={styles.textSnippet}>{body}</Text> : null}
        </Pressable>
    )
};
