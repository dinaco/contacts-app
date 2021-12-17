import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PeopleScreen from './src/screens/peopleScreen';
import PeopleDetailsScreen from './src/screens/peopleDetailsScreen';
import {CapitalLetter} from './src/util';

const Stack = createNativeStackNavigator();

const stackNavigator = () => {
  /*   const {peopley} = navigation.params;
  console.log(peopley); */
  /*   const peopleName = navigation.params.peopley.name.first; */
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
          },
          headerTitleStyle: {
            fontSize: 30,
            color: '#fff',
            flexGrow: 1,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={PeopleScreen}
          options={{title: 'People!'}}
        />
        <Stack.Screen
          name="Details"
          component={PeopleDetailsScreen}
          options={({route}) => ({
            title: CapitalLetter(route.params.peopley.name.first),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stackNavigator;
