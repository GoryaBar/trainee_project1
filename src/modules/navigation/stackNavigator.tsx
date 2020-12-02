import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashView } from '../../views/splashView';
import { observer } from 'mobx-react';
import { RegistrationView } from '../../views/authentication/views/registration';
import { TodosView } from '../../views/todos/views/todoList';
import { AddSnippetView } from '../../views/todos/views/addTodo';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName="SplashView" >
            <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
             <Stack.Screen name="RegistrationView" component={RegistrationView} />
 
            <Stack.Screen name="TodosView" component={TodosView} />
            <Stack.Screen name="AddSnippetView" component={AddSnippetView} />
 
        </Stack.Navigator >
    );
});