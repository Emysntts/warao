import ExerciseComp from 'components/Exercise';
import { Platform } from 'expo-modules-core';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
export const ExercisePage = () => {

  const modulos= [
    {
      id: 1,
      title: 'Saudações',
      isUnlocked: true
    },
    {
      id: 2,
      title: 'Apresentações',
      isUnlocked: true
    },
    {
      id: 3,
      title: 'Números',
      isUnlocked: false
    },
    {
      id: 4,
      title: 'Cores',
      isUnlocked: false
    },
    {
      id: 5,
      title: 'Animais',
      isUnlocked: false
    },
    {
      id: 6,
      title: 'Comida',
      isUnlocked: false
    },
    {
      id: 7,
      title: 'Roupas',
      isUnlocked: false
    },
    {
      id: 8,
      title: 'Verbos',
      isUnlocked: false
    },
  ]




  return (
    <>
      <ScrollView className="bg-warao-sandcolor flex h-full flex-col p-5">
        {modulos.map((modulo) => (
          <ExerciseComp 
            key={modulo.id} 
            text={modulo.title} 
            isUnlocked={modulo.isUnlocked} 
          />
        ))}
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
};
export default ExercisePage;
