import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Options = ({ options }: { options: string[] }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionButton} activeOpacity={0.7}>
          <TouchableOpacity style={styles.optionsPequeno} activeOpacity={0.7}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;