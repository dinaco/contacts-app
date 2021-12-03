import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View} from 'react-native';

const Contacts = () => {
    return (
        <View>
            <Text>Hi from Contacts</Text>
        </View>
    )
}

const ContactDetails = () => {
    return (
        <View>
            <Text>Hi from Contact Details</Text>
        </View>
    )
}

const CreateContacts = () => {
    return (
        <View>
            <Text>Hi from Create Contact</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Hi from Settings</Text>
        </View>
    )
}

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return(
    <HomeStack.Navigator>
    <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
    <HomeStack.Screen name="Contact Details" component={ContactDetails}></HomeStack.Screen>
    <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
    <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
    );
};

export default HomeNavigator;