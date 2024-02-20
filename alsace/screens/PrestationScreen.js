import { FlatList } from "react-native";
<<<<<<< HEAD
import CategoryGridTitle from "../components/CategoryGridTitle";
import  { CATEGORIES } from "../data/fausse-data";

function renderCategoryItem(itemData) {
    return (
        //a voi si je met la short description
=======

import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/fausseData";


function renderCategoryItem(itemData) {
    console.log(itemData);
    return (
        //a voir si je met la short description
>>>>>>> b14057f (recup des nom des categories)
        <CategoryGridTitle title={itemData.item.title} />
    );
}

<<<<<<< HEAD
    function CategoriesScreen() {
        return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
        );
}
export default CategoriesScreen;
=======
function PrestationScreen() {
    return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
    );
}
export default PrestationScreen;
>>>>>>> b14057f (recup des nom des categories)
