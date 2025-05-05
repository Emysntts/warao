import ExerciseComp from 'components/Exercise';
import { Platform } from 'expo-modules-core';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
const ExercisePage = () => {
  // getbancco

  // lista id, titulo e se está desbloqueado ou não
  const modulos = [
    {
      id: 1,
      title: 'Primeiros Passos',
      isUnlocked: true,
    },

    {
      id: 2,
      title: 'Numeros',
      isUnlocked: true,
    },

    {
      id: 3,
      title: 'Saude',
      isUnlocked: false,

    },
    {
      id: 4,
      title: 'Cores',
      isUnlocked: false,
    },

    {
      id: 5,
      title: 'Locais',
      isUnlocked: false,
    },

    {
      id: 6,
      title: 'Transporte',
      isUnlocked: false,
    },
  ];

  return (
    <>
      <ScrollView className="flex h-full flex-col bg-warao-sandcolor p-5">
        {modulos.map((modulo) => (
          <ExerciseComp key={modulo.id} text={modulo.title} isUnlocked={modulo.isUnlocked} />
        ))}
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
};
export default ExercisePage;
