
import React, { FC, useMemo } from 'react';
import { Text, Pressable } from 'react-native';
import { CheckboxButton } from '../../../../../components/checkbox';
import { IColors } from '../../../../profile/storage/profileStore';
import { getStyle } from './styles';

interface Props {
    onChange: (value: boolean) => void;
    value: boolean;
    text: string;
    colors: IColors;
};

export const CheckboxBiometry: FC<Props> = ({ onChange, value, colors, text }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            onPress={() => onChange(!value)}
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]}
            testID={'buttonTextCheckboxBiometry'}
            accessibilityLabel={'buttonTextCheckboxBiometry'}>
            <CheckboxButton {...{ value }} onChange={() => onChange(!value)} testID={'buttonCheckboxBiometry'} />
            <Text numberOfLines={2} style={styles.text}>{text}</Text>
        </Pressable>
    );
};
