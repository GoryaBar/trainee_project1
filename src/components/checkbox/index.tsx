
import React, { FC, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './styles';
import { CheckboxIcon } from '../../assets/svg/checkboxIcon';

interface Props {
    onChange: () => void;
    onValueChange?: (value: boolean) => void;
    value: boolean;
    testID: string,
    disabled?: boolean,
    size?: number;
    backgroundColor?: string;
};

const COLORS = {
    SHADOW: 'rgba(180,180,180,0.2)',
    INACTIVE_BACKGROUND: 'rgba(180,180,180,0.2)',
    ACTIVE_BACKGROUND: 'rgba(28,43,214,0.9)',
    INACTIVE_BORDER: 'rgba(180,180,180,0.2)',
}

export const CheckboxButton: FC<Props> = (props) => {
    const { onChange = () => { }, onValueChange, value, testID, disabled, size = 26, backgroundColor = COLORS.ACTIVE_BACKGROUND } = props;

    useEffect(() => {
        if (typeof onValueChange === 'function') {
            onValueChange(value);
        }
    }, [value]);

    return (
        <Pressable
            onPress={onChange}
            disabled={disabled}
            style={({ pressed }) => [styles.highlightContainer,
            { height: size + 8, width: size + 8, backgroundColor: pressed ? COLORS.SHADOW : 'transparent' }]}
            testID={testID} accessibilityLabel={testID}>
            {({ pressed }) =>
                <View style={[styles.container, { borderColor: value || pressed ? backgroundColor : COLORS.INACTIVE_BORDER }]}>
                    <View style={[styles.container, {
                        borderColor: value || pressed ? backgroundColor : COLORS.INACTIVE_BORDER,
                        backgroundColor: value || pressed ? backgroundColor : COLORS.INACTIVE_BACKGROUND,
                        opacity: pressed ? 0.5 : 1
                    }]}>
                        {value ? <CheckboxIcon color='#FFFFFF' width={14} height={14} /> : null}
                    </View>
                </View>
            }
        </Pressable>
    );
};