import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ElevatedCards from '@/components/Elevatedcar';
import Flatcard from '@/components/Flatcard';

export default function AboutScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style ={styles.cards}>
      <Flatcard />
      < ElevatedCards/>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards:{

  }
});
