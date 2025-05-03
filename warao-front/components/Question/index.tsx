import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Question = ({ text }: { text: string }) => {
  return (
    <View style={styles.questionContainer}>

      <View style={styles.questionPequeno}>
        <Text style={styles.questionText}>{text}</Text>
      </View>

    </View>
  );
};

export default Question;