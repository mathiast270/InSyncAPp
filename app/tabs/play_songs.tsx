import { Text, View, StyleSheet } from 'react-native';
import Dropdown from '@/components/Dropdown';
export default function PlaySongs() {
  return (
    <View style={styles.container}>
     <Dropdown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
