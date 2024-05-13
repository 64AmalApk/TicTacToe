/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/welcome';
import DashboardScreen from '../screen/dashboard';
import GameScreen from '../screen/gameScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{ title: 'Dashboard' }}
                />
                 <Stack.Screen
                    name="Game"
                    component={GameScreen}
                    options={{ title: 'Game' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
