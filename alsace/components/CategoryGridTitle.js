import { View, Text, StyleSheet,Pressable } from 'react-native';
function CategoryGridTitle(title, short_description) {

    return (
        <View style={styles.gridItem}>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTitle;