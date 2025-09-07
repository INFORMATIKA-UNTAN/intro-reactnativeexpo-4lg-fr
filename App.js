import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
      <Text>Nama: Alghi</Text>
      <Text>NIM: H12345678</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff', // warna biru muda
    alignItems: 'center',
    justifyContent: 'center',
  },
});
