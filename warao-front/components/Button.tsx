import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity style={styles.button} onPress={touchableProps.onPress}>
      <Text style={styles.buttonText}>Prosseguir</Text>
    </TouchableOpacity>
  );
});

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B2414',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
