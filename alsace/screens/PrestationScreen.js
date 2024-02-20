import { FlatList } from "react-native";

import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/fausseData";


function renderCategoryItem(itemData) {
    console.log(itemData);
    return (
        //a voir si je met la short description
        <CategoryGridTitle 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        shortdescription={itemData.item.shortdescription}
        />
    );
}

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
