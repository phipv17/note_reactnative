// In App.js in a new project

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home/HomeScreen';
import WriteNote from './src/screens/detail/WriteNoteScreen';
import {Colors} from './src/themes';
import {NoteProvider} from './src/contexs/NoteContex';

const Stack = createStackNavigator();

function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'NOTE BOOK',
              headerStyle: {
                backgroundColor: Colors.headerColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="WriteNote"
            component={WriteNote}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}

export default App;
