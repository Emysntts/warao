import { Ionicons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/poppins';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from 'navigation';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { GetData } from 'store/AsyncStorageUtils';
import { useStore } from 'store/store';

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Header() {
  const [fonts_loaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });
  const [user, setUser] = useState('');
  const { username } = useStore();
  const navigation = useNavigation<HeaderNavigationProp>();

  // Função para limpar o user e redirecionar
  const clearUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setUser('NO USERNAME');
      navigation.navigate('Home'); // Redireciona para o Home
    } catch (error: any) {
      console.error('Erro ao limpar o username:', error.message);
    }
  };

  useEffect(() => {
    GetData('username').then((value) => setUser(value ?? 'NO USERNAME'));
  }, [username]);

  if (!fonts_loaded) return null;

  return (
    <View className=' bg-warao-sandcolor'>
      <View className="h-44 w-full flex-row items-center justify-start gap-6 rounded-b-xl bg-warao-brown pl-3 pt-10 ">
        <View className="flex h-24 w-24 items-center justify-center rounded-full border-2 bg-warao-sandcolor">
          <Ionicons name="person" size={32} color="#3B2414" />
        </View>
        <View className="flex flex-col">
          <Text
            className="text-white"
            style={{
              fontFamily: 'Poppins_600SemiBold',
            }}>
            {user}
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
    </View>
  );
}
