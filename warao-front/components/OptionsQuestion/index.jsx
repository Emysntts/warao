import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Options = ({ options }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionButton}>
          <Text style={styles.optionText}>{option}...</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;