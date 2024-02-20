import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import  { CATEGORIES } from "../data/fausse-data";

function renderCategoryItem(itemData) {
    return (
        //a voi si je met la short description
        <CategoryGridTitle title={itemData.item.title} />
    );
}

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
