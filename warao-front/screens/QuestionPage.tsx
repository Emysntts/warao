import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/HeaderQuestion';
import Question from '../components/Question';
import Options from '../components/OptionsQuestion';

const QuestionPage = () => {
  return (
    <View style={styles.container}>

      <Header title="Saudações" />

      <View style={{ padding: 16 }}>
        <Question text="Pergunta....." />
        <Options options={['A)', 'B)', 'C)', 'D)']} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingVertical: 16,
  },
});

export default QuestionPage;