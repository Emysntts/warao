import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
export interface UserState {
  username: string;
  setUsername: (newUsername: string) => void;
  clearUsername: () => void;
}

export const useStore = create<UserState>((set) => ({
  username: '',
  setUsername: (newUsername: string) => {
    AsyncStorage.setItem('username', newUsername);
    set({ username: newUsername });
  },
  clearUsername: () => {
    AsyncStorage.removeItem('username');
    set({ username: '' });
  },
}));

// Initialize the store with the value from AsyncStorage
AsyncStorage.getItem('username').then((storedUsername) => {
  if (storedUsername) {
    useStore.setState({ username: storedUsername });
  }
});
