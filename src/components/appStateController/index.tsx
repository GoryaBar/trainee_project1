import { FC, useEffect } from 'react';
import { AppState } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { observer } from 'mobx-react';
import { useAppStore } from '../../storage';

export const AppStateController: FC = observer(() => {
    const { AppControllerStore, AppControllerPresenter } = useAppStore();
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            AppControllerStore.onIsConnectedChange(state.isConnected);
        });
        return () => { unsubscribe(); }
    }, []);

    useEffect(() => {
        const handleAppStateChange = (nextAppState: string) => {
            AppControllerStore.onAppStateActivityChange(nextAppState);
        };
        AppState.addEventListener('change', handleAppStateChange);
        return () => AppState.removeEventListener('change', handleAppStateChange);
    }, []);

    useEffect(() => {
        AppControllerPresenter.onBiometryStateChange();
    }, []);

    return null;
});
