import React, { useState } from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import Header from '../components/HeaderQuestion';
import Question from '../components/Question';
import Options from '../components/OptionsQuestion';
import { StatusBar } from 'expo-status-bar';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;


const QuestionPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'QuestionPage'>>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { moduleText } = route.params;

  const [numeroPergunta, setNumeroPergunta] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const listperguntas = [ // receber as perguntas da api
    {
      id: 1,
      question: "Azul", 
      question_type: "Warao",
      options: ['Jebura', 'Joko', 'Jene', 'Simo simo'],
      answer: '0',
    },
    {
      id: 2,
      question: "Vermelho",
      question_type: "Warao",
      options: ['Joko', 'Jebura', 'Simo simo', 'Jene'],
      answer: '2',
    },
    {
      id: 3,
      question: "Amarelo",
      question_type: "Warao",
      options: ['Jene', 'Simo simo', 'Jebura', 'Joko'],
      answer: '1',
    },
    {
      id: 4,
      question: "Verde",
      question_type: "Warao",
      options: ['Simo simo', 'Jene', 'Jebura', 'Joko'],
      answer: '3',
    }
  ];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex.toString());
    checkAnswer(optionIndex);
  };

  const checkAnswer = (optionIndex: number) => {
    const correctAnswer = listperguntas[numeroPergunta].answer; 
    if (optionIndex.toString() === correctAnswer) {
      Alert.alert('Resposta Correta!', 'Você acertou a pergunta.', [
        {
          text: 'OK',
          onPress: () => {
            if (numeroPergunta < listperguntas.length - 1) {
              goToNextQuestion(); 
            } else {
              
              Alert.alert('Parabéns!', 'Você completou todas as perguntas.', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('TabNavigator'),
                },
              ]);
            }
          },
        },
      ]);
    } else {
      Alert.alert('Resposta Errada!', 'Tente novamente.');
    }
  };

  const goToNextQuestion = () => {
    if (numeroPergunta < listperguntas.length - 1) {
      setNumeroPergunta(numeroPergunta + 1); // Vai para a próxima pergunta
      setSelectedOption(null); // Reseta a seleção

    } else {
      Alert.alert('Parabéns!', 'Você completou todas as perguntas.');
 
      navigation.navigate('TabNavigator');
      

    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#6A5ACD" />
      <Header title={moduleText} />

      <View style={{ padding: 16 }}>
        <Question
          text={`A palavra ${listperguntas[numeroPergunta].question} em ${listperguntas[numeroPergunta].question_type} é?`}
        />
        <Options
          options={listperguntas[numeroPergunta].options.map(
            (option, index) => `${String.fromCharCode(65 + index)}) ${option}`
          )}
          onSelect={handleOptionSelect}
        />
      </View>

      <Button
        title="Próxima Pergunta"
        onPress={goToNextQuestion}
        disabled={numeroPergunta >= listperguntas.length - 1}
      />
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