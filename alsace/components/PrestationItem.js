import { View, Text, Image, StyleSheet} from 'react-native';


function PrestationItem({ title, imageUrl, prix, description, adresse, accesibility}) {
    return ( 
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Image source={{ uri: imageUrl}} style={styles.image} />
            </View>
            <View>
                <Text> {prix} euros </Text>
                <Text> {description} </Text>
                <Text> {adresse} </Text>
                <Text> {accesibility} </Text>
            </View>
        </View>
    )
}
export default PrestationItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});