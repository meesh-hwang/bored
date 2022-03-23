import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './RootNavigation';
import { View, TouchableOpacity, Image } from 'react-native';

// Screens
import Activity from './screens/Activity';
import Home from './screens/Home';
import ActivityResult from './screens/ActivityResult';
import Joke from './screens/Joke';
import JokeResult from './screens/JokeResult';


const Stack = createStackNavigator();

const logoImg = {uri: "https://i.ibb.co/Rv18tvW/logo.png"}

  function LogoTitle() {
    return (
      <View>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}  style={{paddingTop:10, paddingBottom:10}}>
                <Image source={logoImg} alt="Hwang's Kitchen" className="logo" style={{width:'50vw',height:100, resizeMode:'contain', paddingTop:10}} />
            </TouchableOpacity>
        </View>
    );
  }
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options=
          {{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />, 
            headerStyle: {
            backgroundColor: '#ff5c5c',
          },}} />
          <Stack.Screen name="Activity" component={Activity} options=
          {{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />, 
            headerStyle: {
            backgroundColor: '#ff5c5c',
            },
            headerTintColor: '#fff'}} />
          <Stack.Screen name="ActivityResult" component={ActivityResult} options=
          {{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />, 
            headerStyle: {
            backgroundColor: '#ff5c5c',
          },
          headerTintColor: '#fff'}} />
          <Stack.Screen name="Joke" component={Joke} options=
          {{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />, 
            headerStyle: {
            backgroundColor: '#ff5c5c',
            },headerTintColor: '#fff'}} />
          <Stack.Screen name="JokeResult" component={JokeResult} options=
          {{
            headerTitleAlign: 'center',
            headerTitle: (props) => <LogoTitle {...props} />, 
            headerStyle: {
            backgroundColor: '#ff5c5c',
            },headerTintColor: '#fff'}} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}