import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
//import { ScrollView } from 'react-native';
import PrestationScreen from './screens/PrestationScreen';  

export default function App() {

  return (
    //<View style={styles.scrollView}>
    <View>
          <Home /> 
          <PrestationScreen />      
    </View>
    

  );
  
};
const styles = StyleSheet.create({
  //scrollView: {
    //backgroundColor: '#d1d8e0',
    //marginHorizontal: 20,
  //}
});