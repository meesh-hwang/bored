import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './RootNavigation';

// Screens
import Activity from './screens/Activity';
import Home from './screens/Home';
import ActivityResult from './screens/ActivityResult';
import Joke from './screens/Joke';
import JokeResult from './screens/JokeResult';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="ActivityResult" component={ActivityResult} />
          <Stack.Screen name="Joke" component={Joke} />
          <Stack.Screen name="JokeResult" component={JokeResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}