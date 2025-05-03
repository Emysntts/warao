import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from 'components/Header';

import { StackRouteExerciseLayout } from './stack-exercise-navigation';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
      
        animation: 'shift',
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#3B2414',
        
        tabBarIcon: () => <Ionicons name="home" size={28} color="white" />,
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}>
      <Tab.Screen component={StackRouteExerciseLayout} name="Tarefas" options={{
        headerShown:false
      }} />
    </Tab.Navigator>
  );
}
