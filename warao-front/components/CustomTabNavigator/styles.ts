import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3B2414',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
  },


  iconContainer: {
    padding: 10,
  },
});

export default styles;