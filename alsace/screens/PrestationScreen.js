import  { PRESTATIONS } from "../data/fausseData";
import { View, FlatList, Text, StyleSheet} from 'react-native';
import PrestationItem from "../components/PrestationItem";


function PrestationScreen({route}) {
 //on va naviguer par les categories
    const catId= route.params.categoryId;

//admettons que l'on veut tretourner pliusieurs prestations pour une catégorie
//on va utiliser la fonction filter et creer une fionction qui va retourner les prestations pour une catégorie
//on veux retourner TRUE si la catégorie est égale à la catégorie de la prestation
const displayedPrestations = PRESTATIONS.filter((prestationItem) => {
    return prestationItem.categoryIds.indexOf(catId) >= 0;
});


function renderPrestationItem(itemData){

    const item = itemData.item;

    const prestationItemProps = { 
    title: item.title,
    imageUrl: item.imageUrl,
    prix: item.prix,
    description: item.description,
    adresse: item.adresse,
    accesibility: item.accesibility,
    }
    return ( 
        <PrestationItem {...prestationItemProps} />
    );
}
//On va afficher une Flat list pour afficher les prestations
//<FlatList data = { displayedPrestations } keyExtractor={( item ) => item.id} /
    return(
        <View style={styles.container}>
            <FlatList 
                data = { displayedPrestations }
                keyExtractor={( item ) => item.id}
                renderItem = {renderPrestationItem}
                />
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
