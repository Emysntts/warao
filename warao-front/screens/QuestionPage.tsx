import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import Header from '../components/HeaderQuestion';
import Question from '../components/Question';
import Options from '../components/OptionsQuestion';
import { StatusBar } from 'expo-status-bar';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import axios from 'axios';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;


const QuestionPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'QuestionPage'>>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { moduleText } = route.params;
  const [listperguntas, setListPerguntas] = useState<any[]>([]);

  const [numeroPergunta, setNumeroPergunta] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:8000/questions/questions?categoria=${moduleText}`);
        const data = response.data.map((item: any, index: number) => ({
          id: index + 1,
          ...item,
          answer: item.answer.toString(), 
        }));
        setListPerguntas(data);
      } catch (error : any) {
        if (error.response) {
          console.error('Error response:', error.response.data);
          Alert.alert('Erro', `Erro na requisição: ${error.response.data.error || 'Desconhecido'}`);
        }
        else if (error.request){
          console.error("Erro na requisição:", error.request);
        }
        else {
          console.error("Erro no codigo:", error.message);
        }
      }
    };

    fetchData();
  }, [moduleText]);



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

  if (listperguntas.length === 0) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#6A5ACD" />
        <Header title={moduleText} />
        <View style={{ padding: 16 }}>
          <Question text="Carregando perguntas..." />
        </View>
      </View>
    );
  }

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
           (option: string, index: number) => `${String.fromCharCode(65 + index)}) ${option}`
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