import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    inputsContainer: {
        marginTop: 20,
        width: '100%',
        height: 260,
        justifyContent: 'space-between',
    },
    mainButtonContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        marginVertical: 15,
    },
    absoluteSheet: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
