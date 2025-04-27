import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation';
import styles from './sytles';

interface ExerciseLauncherProps {
  exerciseId: string;
  title: string; 
  circleCard: string;
}

// type NavigationProp = StackNavigationProp<RootStackParamList, 'ExercisePage'>;

const ExerciseLauncher: React.FC<ExerciseLauncherProps> = ({ exerciseId, title, circleCard }) => {
  //const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    //navigation.navigate('ExercisePage', { id: exerciseId });
  };

  return (
    <View style={styles.card}>

    <View style={[styles.circle, {backgroundColor: circleCard}]} />

      <View style={styles.content}>
        
        <Text style={[styles.title, { color: circleCard }]}>{title}</Text>

        <TouchableOpacity style={[styles.button, { backgroundColor: circleCard }]} onPress={handlePress}>
          <Text style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default ExerciseLauncher;