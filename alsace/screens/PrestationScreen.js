import  { PRESTATIONS } from "../data/fausseData";
import { View, Text, StyleSheet} from 'react-native';


function PrestationScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text> test  </Text>
        </View>
    );
    
}

export default PrestationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
});
