import { createContext, useContext } from "react";
import { IStore } from "./storageFactory";

const AppStore = createContext<IStore>({} as IStore);

export const AppProvider = AppStore.Provider;

export const useAppStore = (): IStore => useContext(AppStore);