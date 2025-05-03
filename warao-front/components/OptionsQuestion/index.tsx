import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Options = ({ options, onSelect }: { options: string[]; onSelect: (index: number) => void }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          activeOpacity={0.7}
          onPress={() => onSelect(index)} // Chama a função onSelect com o índice da opção
        >
          <View style={styles.optionsPequeno}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;