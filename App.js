import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';

// nagivation stack to create screens
const Stack = createStackNavigator();

function App() {
  // createt the screen routes
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"> 
        <Stack.Screen name="Login" component={LoginScreen}/> 
        <Stack.Screen name="Home" // 
          options={{
            headerLeft: null, // Hide the back button
          }}
          component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
