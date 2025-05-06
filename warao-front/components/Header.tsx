import { Ionicons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/poppins';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetData } from 'store/AsyncStorageUtils';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from 'navigation';

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Header() {
  const [fonts_loaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });
  const [username, setUsername] = useState('');
  const navigation = useNavigation<HeaderNavigationProp>();

  // Função para limpar o username e redirecionar
  const clearUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setUsername('NO USERNAME'); 
      navigation.navigate('Home'); // Redireciona para o Home
    } catch (error: any) {
      console.error('Erro ao limpar o username:', error.message);
    }
  };

  useEffect(() => {
    GetData('username').then((value) => setUsername(value ?? 'NO USERNAME'));
  }, []);

  if (!fonts_loaded) return null;

  return (
    <View className="h-44 w-full flex-row items-center justify-start gap-6 rounded-b-xl bg-warao-brown pl-3 pt-10">
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
      <TouchableOpacity
        onPress={clearUsername}
        style={{
          marginLeft: 'auto',
          marginRight: 8,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#8B0000',
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
        }}>
        <Ionicons name="exit-outline" size={20} color="white" />
              </TouchableOpacity>
    </View>
  );
}
