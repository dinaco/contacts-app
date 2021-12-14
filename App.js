import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import PeopleScreen from './src/screens/peopleScreen';

const Stack = createNativeStackNavigator();

const stackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'People!',
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
          }}
          component={PeopleScreen}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stackNavigator;
