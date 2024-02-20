import { View, Text, StyleSheet,Pressable } from 'react-native';


<<<<<<< HEAD
function CategoryGridTitle(title) {

    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button}>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
=======
function CategoryGridTitle({title}) {

    return (
        
            <View style={styles.gridItem}>
                <Pressable style={styles.button}>
                    <View>
                        <Text>{title}</Text>
                    </View>
                </Pressable>
            </View>
>>>>>>> b14057f (recup des nom des categories)
    );
}
export default CategoryGridTitle;

// styles
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
<<<<<<< HEAD
        margin: 15,
=======
        marginTop: 2,
        paddingTop: 1,
        margin: 10,
>>>>>>> b14057f (recup des nom des categories)
        height: 150,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        elevation: 5,
    },
<<<<<<< HEAD
    button: {
        flex: 1,
=======
    
    button: {
        flex: 2,
>>>>>>> b14057f (recup des nom des categories)
    },
})