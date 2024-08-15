import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContainerPresenterScreen from './screens/ContainerPresenterScreen';
// Import other pattern screens here...

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Design Patterns" component={HomeScreen} />
        <Stack.Screen name="Container Presenter" component={ContainerPresenterScreen} />
        {/* Add other pattern screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
