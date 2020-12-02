import React, { FC } from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

interface Props {
    text: string;
    visibility: Animated.Node<number>;
};

export const Toast: FC<Props> = ({ text, visibility }) => {

    return (
        <Animated.View style={[styles.container, { opacity: visibility }]} pointerEvents='none'>
            <Text style={styles.text}>{text}</Text>
        </Animated.View>
    );
};
