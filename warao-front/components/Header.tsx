import { Ionicons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/poppins';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { GetData } from 'store/AsyncStorageUtils';

export default function Header() {
  const [fonts_loaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });
  const [username, setUsername] = useState('');

  useEffect(() => {
  feat/util
    GetData('username').then((value) => setUsername(value ?? 'NO USERNAME'));
  }, []);

  if (!fonts_loaded) return null;
  return (
    <View className="h-44 w-full flex-row items-center justify-start gap-6 rounded-b-xl bg-warao-brown pl-3 pt-10">
      feat/util
      <View className="flex h-24 w-24 items-center justify-center rounded-full border-2 bg-warao-sandcolor">
        <Ionicons name="person" size={32} color="brown" />
      </View>
      <View className="flex flex-col">
        <Text
          className="text-white"
          style={{
            fontFamily: 'Poppins_600SemiBold',
          }}>
          {username}
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
