import React from 'react';
import { View, StyleSheet,Image, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <View>
            <View >
                <SearchBar />
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/images/aigle.png')} />
                <Text style={styles.titleText}> En ce moment </Text> 
                <Text style={styles.secondText}> Visitez L'Alsace </Text>
                <Text> autrement </Text>
            </View>
            <View style={styles.milieu}>
                <Image style={styles.imagemilieu} source={require('../assets/images/cigognes.png')} />
            </View>

        </View>  
    );   
}

const styles = StyleSheet.create({

    image: {
        paddingTop: 100,
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop:10,
        margin:10,
    },
    imagemilieu: {
        width: 300,
        height: 100,
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
        paddingBottom:50
    },
});