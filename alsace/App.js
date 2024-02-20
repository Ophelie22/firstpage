import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PrestationsScreen from './screens/PrestationsScreen';

export default function App() {

  return (
    <ScrollView style={styles.scrollView}>
        <Home />
          <NavigationContainer>
            <PrestationsScreen />
          </NavigationContainer>
      </ScrollView>
  );
  
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f1f2f6',
    marginHorizontal: 20,
  }
});