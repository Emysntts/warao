import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 16,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default styles;