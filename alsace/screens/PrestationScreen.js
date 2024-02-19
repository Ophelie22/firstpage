import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import  { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({}) {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => (
                <CategoryGridTitle
                    title={item.title}
                    short_description={item.short_description}
                />
            )}
            numColumns={2}
        />
    );

}