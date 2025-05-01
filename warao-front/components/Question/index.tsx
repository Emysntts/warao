import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Question = ({ text }: { text: string }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{text}</Text>
    </View>
  );
};

export default Question;