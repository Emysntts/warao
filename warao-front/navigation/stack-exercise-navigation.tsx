import { createStackNavigator } from '@react-navigation/stack';
import Header from 'components/Header';
import ExercisePage from 'screens/ExercisePage';
import ModulesPage from 'screens/ModulesPage';

export type StackExerciseLists = {
  home: undefined;
  modules: { text: string };
};

const Stack = createStackNavigator<StackExerciseLists>();

export const StackRouteExerciseLayout = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={ExercisePage}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="modules"
        component={ModulesPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
