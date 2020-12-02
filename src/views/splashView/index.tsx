import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { IRoute, IStackNavigation } from '../../entities';
import { useAppStore } from '../../storage';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const SplashView: FC<Props> = ({ navigation }) => {
    const { SplashPresenter: { lounchData } } = useAppStore();
    useEffect(() => { lounchData(navigation); }, []);

    return (
        <View style={styles.container}>
            <Text>HELPMATE</Text>
        </View>
    )
};
