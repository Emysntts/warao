import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 16,
    width: '100%',
  },

  optionsPequeno: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    justifyContent: 'center',
    borderRadius: 6,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    height: 31,
    
  },


  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 5,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    height: 35,
   
  },
  optionText: {
    paddingStart: 10,
    fontSize: 16,
    color: '#000000',
  },
});

export default styles;