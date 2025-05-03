import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import HomeScreen from '../screens/HomeScreen';
import ModulesPage from '../screens/ModulesPage';
import QuestionPage from 'screens/QuestionPage';

export type RootStackParamList = {
  Home: undefined;
  TabNavigator: undefined;
  ModulesPage: undefined;
  QuestionPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
   
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
