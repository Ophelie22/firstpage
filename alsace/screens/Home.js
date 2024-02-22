import React from 'react';
import { View, StyleSheet,Image, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { WebView } from 'react-native-webview';;

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
            <View>
                <CategoryGridTitle />
            </View>
            
        </View>  
    );   
}

const styles = StyleSheet.create({

    image: {
        paddingTop: 100,
        width: 220,
        height: 130,
        paddingHorizontal: 10,
        borderRadius: 28,
        alignSelf: 'center',
        marginTop:10,
    },
    
    imagemilieu: {
        width: 290,
        height: 180,
        borderRadius: 28,
        paddingVertical: 8,
        alignSelf: 'center',
        marginTop:10,
    },
    titleText: {
        color: 'red',
    },
    secondText: {
        color: 'green',
    },
    titlered: {
        color: 'red',
        fontSize: 15,
        paddingBottom: 1,
    },
});