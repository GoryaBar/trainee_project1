import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { Text, Pressable, ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string;
    onPress: () => void;
    testID: string;
    disabled?: boolean;
    inProgress?: boolean;
};

export const MainButton: FC<Props> = observer(({ onPress = () => { }, title = '', testID, disabled = false, inProgress = false }) => {

    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [styles.container, { opacity: pressed || disabled ? 0.7 : 1 }]}
            onPress={onPress}
            testID={testID}
            accessibilityLabel={testID}
        >
            <Text style={styles.text} testID={`text${testID}`} accessibilityLabel={`text${testID}`}>{title.toUpperCase()}</Text>
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={'#aa00aa'} size='large' /></View> : null}
        </Pressable>
    );
});