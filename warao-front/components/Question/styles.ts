import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    height: "35%",
  },
  questionText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000000',
  },
});

export default styles;