import { View, Text, StyleSheet,Pressable } from 'react-native';


function CategoryGridTitle({title, imageUrl, shortdescription}) {

    return (
        
            <View style={styles.gridItem}>
                <Pressable style={styles.button}>
                    <View styles={styles.innerContainer}>
                        <Text>{title}</Text>
                        
                        <Text>{shortdescription}</Text>
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
        marginTop: 2,
        paddingTop: 1,
        margin: 10,
        height: 150,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        elevation: 5,
    },
    
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})