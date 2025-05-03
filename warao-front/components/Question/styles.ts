import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  questionPequeno: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    height: "100%",
    width: "100%",
  },

  questionContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    height: "45%",
  },
  questionText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000000',
  },
});

export default styles;