import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContainerPresenterScreen from './screens/ContainerPresenterScreen';
import HOCScreen from './screens/HOCScreen';
import SingleTonScreen from './screens/SingletonScreen';
import LoginPage from './screens/AtomScreen';
import Profile from './screens/ComponentPositionScreen';
// Import other pattern screens here...

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Design Patterns" component={HomeScreen} />
        <Stack.Screen name="Container Presenter" component={ContainerPresenterScreen} />
        <Stack.Screen name="Higher Order Component" component={HOCScreen} />
        <Stack.Screen name="Singleton" component={SingleTonScreen} />
        <Stack.Screen name="Atom" component={LoginPage} />
        <Stack.Screen name="Component Position" component={Profile} />


        {/* Add other pattern screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
