import { StyleSheet, Text, View } from 'react-native';
export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track your flight</Text>
      <Text style={styles.subtitle}>Keep you informed in real time!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
});