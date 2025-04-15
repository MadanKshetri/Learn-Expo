import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.Scrollcontainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>ple</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text></Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    },

    Scrollcontainer:{
      padding:8,
      flexDirection:'row',
      

    },
    card:{
      width:100,
      height:100,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row",
      marginHorizontal:5,

    },
    cardElevated:{
      backgroundColor:'#CAD5E2',
      borderRadius: 10,
      elevation: 5, // For Android shadow effect
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    }
})