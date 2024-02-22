import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/fausseData";

function CategorieScreen({navigation}) {
function renderCategoryItem(itemData) {
    function pressHandler() {
        //navigate veux la page de destination le nom de la page
        navigation.navigate('Visite', {
            categoryId:itemData.item.id,
        });
    }
    return (
        //a voir si je met la short description
        <CategoryGridTitle 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        shortdescription={itemData.item.shortdescription}
        onPress={pressHandler}
        navigation={navigation}
        />
    );
}
//une  autre facon de faire la fonction mais la je vais refactoriser
//function CategorieScreen({navigation}) {
    return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
    );
}
export default CategorieScreen;