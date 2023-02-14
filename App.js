import { StyleSheet, Text, View } from 'react-native';
// comment added
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello I AM Jigar Rajput !!</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
