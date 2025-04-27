import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  
  },
  content: {
    width: "50%",
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingStart: 16,
    position: 'absolute',
    right: 0,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A4B81',
    marginBottom: 8,

  },

  circle: {
    width: "55%",
    aspectRatio: 1,
    borderRadius: 1000,
    backgroundColor: '#5A4B81',
    position: 'absolute',
    top: -45,
    left: -45,
  },
  button: {
    backgroundColor: '#5A4B81',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;