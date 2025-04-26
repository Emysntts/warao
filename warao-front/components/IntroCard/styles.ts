import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#E8E1DA',
  },

  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3B2414',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 120,
    backgroundColor: '#E8E1DA',
  },

  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E8E1DA',
  },
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B2414',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#3B2414',
    marginBottom: 20,
  },

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
