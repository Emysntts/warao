import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from '../components/HeaderQuestion';
import Question from '../components/Question';
import Options from '../components/OptionsQuestion';
import { StatusBar } from 'expo-status-bar';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'navigation';

const QuestionPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'QuestionPage'>>();
  const { moduleText } = route.params;
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const listperguntas = [
    {
      id: 1,
      question: "Azul",
      listatipo: "Warao",
      options: ['Jebura', 'Joko', 'Jene', 'Simo simo'],
      answer: '0',
    },
    {
      id: 2,
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Berlim', 'Madri'],
      answer: '1',
    },
  
  ]
  

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex.toString());
    checkAnswer(optionIndex);
  };

  const checkAnswer = (optionIndex: number) => {
    const correctAnswer = listperguntas[0].answer; // Usando a primeira pergunta como exemplo
    if (optionIndex.toString() === correctAnswer) {
      Alert.alert('Resposta Correta!', 'Você acertou a pergunta.');
    } else {
      Alert.alert('Resposta Errada!', 'Tente novamente.');
    }
  };


  
  return (

    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#6A5ACD" />
      <Header title={moduleText} />

      <View style={{ padding: 16 }}>
        <Question text={`A palavra ${listperguntas[0].question} em ${listperguntas[0].listatipo} é?`} />
        <Options 
          options={[
        `A) ${listperguntas[0].options[0]}`,
        `B) ${listperguntas[0].options[1]}`,
        `C) ${listperguntas[0].options[2]}`, 
        `D) ${listperguntas[0].options[3]}`,
          ]}
          onSelect={(index) => {
            console.log(`Opção selecionada: ${index}`);
            handleOptionSelect(index); // Chama a função para verificar a resposta
          }}
        />
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