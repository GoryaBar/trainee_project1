import React, { FC, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigator';
import { SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';

export const RootNavigation: FC = observer(() => {
    const navigationRef: any = useRef();

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <NavigationContainer ref={navigationRef}>
                <StackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
});
