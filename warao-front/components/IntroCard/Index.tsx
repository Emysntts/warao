import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IntroCardProps {
  onPress: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Logo.png')} // Imagem improvisada, apenas de teste
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Warao</Text>
        <Text style={styles.subtitle}>Seu aplicativo de ensino da língua Warao!</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroCard;
