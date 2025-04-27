import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const CustomTabNavigator = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('TabNavigator');
  };


  return (

    <View style={styles.tabBar}>
      
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="help-circle-outline" size={40} color="white" />
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
        <Ionicons name="home" size={28} color="white" />
      </TouchableOpacity>

  
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="person" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabNavigator;