import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import { ScrollView } from 'react-native';  

export default function App() {

  return (
    <ScrollView style={styles.scrollView}>
        <Home />
      </ScrollView>
  );
  
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
});