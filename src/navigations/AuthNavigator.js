import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../assets/screens/Login';
import SignUp from '../assets/screens/Register';

const AuthNavigator = () => {
const AuthStack = createStackNavigator();
    return(
    <AuthStack.Navigator>
    <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
    <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>

    </AuthStack.Navigator>
    );
};

export default AuthNavigator;