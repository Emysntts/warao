import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/HeaderQuestion';
import Question from '../components/Question';
import Options from '../components/OptionsQuestion';
import { StatusBar } from 'expo-status-bar';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'navigation';

const QuestionPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'QuestionPage'>>();
  const { moduleText } = route.params; // Desestruturação para obter o texto do módulo

  
  return (

    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#6A5ACD" />
      <Header title={moduleText} />

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