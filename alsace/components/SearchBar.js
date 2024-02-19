import React from 'react';
import { useState } from 'react'; //useState est un hook qui permet de creer un etat dans un composant fonctionnel
import { StyleSheet,Button, View, Keyboard,TextInput } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
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
        </View>
        );
    };
    export default SearchBar;
    
    // styles
    const styles = StyleSheet.create({
        container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "80%",
    
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
        fontSize: 15,
        marginLeft: 10,
        width: "90%",
        },
    });