import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E2D8",
    flexDirection: "column",
    alignItems: 'flex-start', 
    justifyContent: 'center',
    paddingBottom: 20, 
  },

  listcontainer: {   
    width: '100%',
    paddingHorizontal: 16, 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  daytexttitle: {
    fontSize: 12, 
    color: '#000000', 
    marginBottom: 8, 
    paddingHorizontal: 16,
    paddingVertical: 4, 
  },

  dayContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 8, 
    paddingHorizontal: 12,
    paddingVertical: 8, 
  },

  
  notToday: {
    backgroundColor: '#F5F5F5', 
    color: '#333333',
  },
  dayName: {
    fontSize: 12, 
  },
  dayDate: {
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default styles;
