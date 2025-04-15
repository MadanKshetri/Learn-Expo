import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcard</Text>
      <View style={styles.container}>

        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        

      </View>
    </View>
  );
};

export default Flatcard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    
  },
  container: {
    flex:1,
    flexDirection:'row',
    padding:8,

  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height: 100,
    width: 100,
    borderRadius: 3,
    margin:8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
