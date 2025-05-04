import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from 'components/Header';
import AboutUsPage from 'screens/AboutUs';

import { StackRouteExerciseLayout } from './stack-exercise-navigation';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#3B2414',
        tabBarInactiveBackgroundColor: '#523622',
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 55,
        },
      }}>
      <Tab.Screen
        component={StackRouteExerciseLayout}
        name="Tarefas"
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" size={28} color="white" />,
        }}
      />
      <Tab.Screen
        component={AboutUsPage}
        name="aboutus"
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="help-circle" size={30} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
}
