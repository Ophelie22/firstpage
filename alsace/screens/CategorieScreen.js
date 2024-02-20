import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/fausseData";

function renderCategoryItem(itemData) {
    //console.log(itemData);
    function pressHandler() {
        //console.log("pressed");
    }

    return (
        //a voir si je met la short description
        <CategoryGridTitle 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        shortdescription={itemData.item.shortdescription}
        //detection du clic sur la catégorie
        onPress={pressHandler}
        />
    );
}

//une  autre facon de faire la fonction mais la je vais refactoriser
//function CategorieScreen({navigation}) {
    //return (
    //<FlatList 
        //data={CATEGORIES}
        //keyExtractor={(item) => item.id}
        //on peut faire comme cela
        //renderItem={renderCategoryItem.bind}
        //renderItem={renderCategoryItem}
        //numColumns={2}
    ///>
    //);

//}
export default CategorieScreen;