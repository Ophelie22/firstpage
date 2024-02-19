import React from 'react';
import { useState } from 'react'; //useState est un hook qui permet de creer un etat dans un composant fonctionnel
import { StyleSheet,Button, View, Keyboard,TextInput } from 'react-native';
import { Feather, Entypo, MaterialCommunityIcons  } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
    const loginWithFacebook = () => {
        console.log('Button pressed');
    };
    
    return (
        <View style={styles.container}>
            <View
            style={
                clicked
                ? styles.searchBar__clicked
                : styles.searchBar__unclicked
            }
            >
            {/* search Icon */}
            <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
            />
            {/* Input field */}
            <TextInput
            style={styles.input}
            placeholder="Rechercher une activité"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
                setClicked(true);
                }}
            />
            {/* cross Icon, depending on whether the search bar is clicked or not */}
            {clicked && (
            <Entypo name="cross" size={10} color="black" style={{ padding: 1 }} onPress={() => {
                setSearchPhrase("")
            }}/>
            )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
            <View>
                <Button
                title="Cancel"
                onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                }}
                ></Button>
            </View>
            )}
             {/* search Icon */}
            <View>
                <MaterialCommunityIcons
                name="information-variant"
                size={30}
                color="black"
                style={{ marginLeft: 10, paddingLeft: 10}}  
                />
            </View>
            
        </View>
        );
    };
    export default SearchBar;
    
    // styles
    const styles = StyleSheet.create({
        container: {
        paddingTop: 50,
        paddingHorizontal: 13,
        marginLeft: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "78%",
    
        },
        searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        },
        searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        },
        input: {
        fontSize: 14,
        marginLeft: 12,
        width: "90%",
        },
        iconInfo: {
        flexDirection: "row",
        }
    });