import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface Props {
    onPress: () => void;
    testID: string;
};

export const CircleAddButton: FC<Props> = ({ onPress, testID }) => {
    return (
        <Pressable
            testID={testID}
            accessibilityLabel={testID}
            onPress={onPress} style={({ pressed }) => [{ backgroundColor: pressed ? '#B7D4FF' : '#7AB1FF' }, styles.container]}>
            <Text style={styles.title}>+</Text>
        </Pressable>
    )
};

const SIZE = 55;

const styles = StyleSheet.create({
    container: {
        width: SIZE,
        height: SIZE,
        elevation: 3,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 30
    },
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        lineHeight: 30,
    },
});
