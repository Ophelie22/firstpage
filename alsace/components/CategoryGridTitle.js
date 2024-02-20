import { View, Text, StyleSheet,Pressable } from 'react-native';


function CategoryGridTitle(title) {

    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button}>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTitle;

// styles
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        elevation: 5,
    },
    button: {
        flex: 1,
    },
})