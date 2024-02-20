import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import { ScrollView } from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import PrestationsScreen from './screens/PrestationsScreen';
=======
import PrestationScreen from './screens/PrestationScreen';  
>>>>>>> b14057f (recup des nom des categories)

export default function App() {

  return (
    <ScrollView style={styles.scrollView}>
<<<<<<< HEAD
        <Home />
          <NavigationContainer>
            <PrestationsScreen />
          </NavigationContainer>
=======
          <Home />
          <PrestationScreen />
>>>>>>> b14057f (recup des nom des categories)
      </ScrollView>
  );
  
};
const styles = StyleSheet.create({
  scrollView: {
<<<<<<< HEAD
    backgroundColor: '#f1f2f6',
=======
    backgroundColor: '#d1d8e0',
>>>>>>> b14057f (recup des nom des categories)
    marginHorizontal: 20,
  }
});