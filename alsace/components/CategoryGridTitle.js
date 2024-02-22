import { View, Text, StyleSheet,Pressable, Platform } from 'react-native';

//je rajoute la fonction onPress pour naviguer vers la page de la catégorie
function CategoryGridTitle({title, imageUrl, shortdescription, onPress, navigation}) {

///TODO RAJOUTER L'IMAGE
    return (
        
            <View style={styles.gridItem}>
                <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                    ]}
                    //onva rajouter une fonction pour naviguer vers la page de la catégorie avec OnPress
                    onPress={onPress}
                >
                    <View styles={styles.innerContainer}>
                        <Text style={styles.title}>{title}</Text>                    
                        <Text style={styles.description}>{shortdescription}</Text>
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
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        backgroundColor: 'red',
        marginRight: 70,
        alignItems: 'center',
        paddingRight: 13,
        borderRadius: 10,
    },
    description: {
        fontSize: 10,
    }
})