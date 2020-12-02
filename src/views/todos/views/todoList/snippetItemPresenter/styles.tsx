import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        minHeight: 80,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    infoContainer: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTitle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 22,
    },
    textSnippet: {
        fontSize: 16,
        lineHeight: 20,
    },
    iconContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
