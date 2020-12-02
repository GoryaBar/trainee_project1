import { StyleSheet } from 'react-native';
import { IColors } from '../../../../profile/storage/profileStore';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {

        },
    });
    return styles;
};