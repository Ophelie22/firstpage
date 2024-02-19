import React from 'react';
import { View, StyleSheet,Image, Text} from 'react-native';
import SearchButton from '../components/SearchButton';

export default function Home() {
    return (
        <View>
            <View >
                <SearchButton />
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/images/aigle.png')} />
                <Text> En ce moment </Text> 
                <Text> Visitez L'Alsace </Text>
                <Text> autrement </Text>
            </View>

        </View>  
    );   
}

const styles = StyleSheet.create({

    image: {
        width: 300,
        height: 100,
        alignSelf: 'center',
        padding: 20,
        marginTop:40,
        margin:20,
    }
});