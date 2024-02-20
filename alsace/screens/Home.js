import React from 'react';
import { View, StyleSheet,Image, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryGridTitle from '../components/CategoryGridTitle';

export default function Home() {
    return (
        <View>
            <View >
                <SearchBar />
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/images/aigle.png')} />
                <Text style={styles.titleText}> En ce moment </Text> 
                <Text style={styles.secondText}> Visitez L'Alsace</Text>
                <Text> autrement </Text>
            </View>
            <View style={styles.milieu}>
                <Image style={styles.imagemilieu} source={require('../assets/images/cigognes.png')} />
                <Text style = {styles.titlered}> Nos suggestions </Text>
            </View>
<<<<<<< HEAD
            <View>
                <CategoryGridTitle  />
            </View>
=======
>>>>>>> b14057f (recup des nom des categories)
        </View>  
    );   
}

const styles = StyleSheet.create({

    image: {
        paddingTop: 100,
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop:10,
        margin:10,
    },
    imagemilieu: {
        width: 300,
        height: 200,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginTop:10,
        margin:10,
    },
    titleText: {
        color: 'red',
    },
    secondText: {
        color: 'green',
    },
    milieu: {
        flex: 1,
        paddingBottom:10
    },
    titlered: {
        color: 'red',
        fontSize: 15,
        marginBottom: 0,
        paddingBottom: 1,
    }
});