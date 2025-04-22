import { useFonts } from '@expo-google-fonts/poppins';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { View, Text } from 'react-native';

export default function Header() {
  const [fonts_loaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

  if (!fonts_loaded) return null;

  return (
    <View className="bg-warao-brown h-44 w-full flex-row items-center justify-start gap-6 rounded-b-xl pl-3 pt-10">
      <View className="h-24 w-24 rounded-full border-2 border-white" />
      <View className="flex flex-col">
        <Text
          className="text-white"
          style={{
            fontFamily: 'Poppins_600SemiBold',
          }}>
          Fulano de Tal
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
          }}
          className="text-warao-green-dark">
          Português Brasileño
        </Text>
      </View>
    </View>
  );
}
