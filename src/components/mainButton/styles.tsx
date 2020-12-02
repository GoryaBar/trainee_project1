import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aeaeae',
        borderRadius: 2,
        elevation: 4,
        minHeight: 40,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        lineHeight: 22,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    absoluteSheet: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    }
}); 