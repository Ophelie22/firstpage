import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { ScrollView } from 'react-native';


import PrestationScreen from './screens/PrestationScreen';
import CategorieScreen from './screens/CategorieScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    //<View style={styles.scrollView}>
    //<Stack.Screen name="Prestation" component={PrestationScreen} />
    <>
      <Home />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="CategoriesDesPrestations" component={CategorieScreen} />
              <Stack.Screen name="Visite" component={PrestationScreen} />
            </Stack.Navigator>
          </NavigationContainer>
                
    </>

  );
  
};
const styles = StyleSheet.create({
  //scrollView: {
    //backgroundColor: '#d1d8e0',
    //marginHorizontal: 20,
  //}
});