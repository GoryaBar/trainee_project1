import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
    },
    textImput: {
        flex: 1,
        padding: 0,
        fontSize: 18,
        lineHeight: 22,
        marginHorizontal: 10,
        color: '#000',
    },
    iconWrapper: {
        height: 40,
        width: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 