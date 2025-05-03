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
  moduleText: string;
  quantidadePerguntas: number; // Adicionando a propriedade quantidadePerguntas
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'QuestionPage'>;

const ExerciseLauncher: React.FC<ExerciseLauncherProps> = ({ exerciseId, title, circleCard, moduleText, quantidadePerguntas }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('QuestionPage', { moduleText, quantidadePerguntas });
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