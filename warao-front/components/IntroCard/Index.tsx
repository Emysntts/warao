import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles';

interface IntroCardProps {
  onPress: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onPress }) => {
  const translateY = useRef(new Animated.Value(200)).current; 
  const imageContainerHeight = useRef(new Animated.Value(1.1)).current; 

  useEffect(() => {
  
    Animated.parallel([
      
      Animated.timing(translateY, {
        toValue: 0, 
        duration: 3000, 
        useNativeDriver: true, 
      }),
      
      Animated.timing(imageContainerHeight, {
        toValue: 0.67, 
        duration: 3000, 
        useNativeDriver: false, 
      }),
    ]).start();

  }, 

  []);

  return (
    <View style={styles.card}>
      
      <Animated.View
        style={[
          styles.imageContainer,
          {
            height: imageContainerHeight.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'], 
            }),
          },
        ]}
      >
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      
      <Animated.View style={[styles.textContainer, { transform: [{ translateY }] }]}>
        <Text style={styles.title}>Warao</Text>
        <Text style={styles.subtitle}>Seu aplicativo de ensino da língua Warao!</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default IntroCard;

