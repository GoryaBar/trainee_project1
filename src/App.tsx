import React, { FC } from 'react';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { AppProvider } from './storage';
import { Store } from './storage/storageFactory';

const App: FC = () => {
  return (
    <AppProvider value={Store}>
        <RootNavigation />
    </AppProvider>
  );
};

export default App;