import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PresentationPage from 'screens/Presentation';
import QuestionPage from 'screens/QuestionPage';

import TabNavigator from './tab-navigator';
import HomeScreen from '../screens/HomeScreen';
import ModulesPage from '../screens/ModulesPage';

export type RootStackParamList = {
  Home: undefined;
  TabNavigator: undefined;
  ModulesPage: undefined;
  PresentationPage: undefined;
  QuestionPage: { moduleText: string; quantidadePerguntas: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name="PresentationPage"
          component={PresentationPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="QuestionPage"
          component={QuestionPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
