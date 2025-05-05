import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreData = async ({ key, value }: { key: string; value: string }) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const GetData = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return 'No data found for the given key';
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
