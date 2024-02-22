import  { PRESTATIONS } from "../data/fausseData";
import { View, FlatList, Text, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';


function PrestationScreen({route}) {
    //on va naviguer par les categories
    const catId= route.params.categoryId;

//admettons que l'on veut tretourner pliusieurs prestations pour une catégorie
//on va utiliser la fonction filter et creer une fionction qui va retourner les prestations pour une catégorie
//on veux retourner TRUE si la catégorie est égale à la catégorie de la prestation

const displayedPrestations = PRESTATIONS.filter((prestationItem) => {
    return prestationItem.categoryIds.indexOf(catId) >= 0;
}
)
//On va afficher une Flat list pour afficher les prestations
    return(
        <View style={styles.container}>
            <Text> test - {catId}  </Text>
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
<Text> test - {catId}  </Text>