import React from 'react';
import { useState } from 'react'; //useState est un hook qui permet de creer un etat dans un composant fonctionnel
import { StyleSheet, Text,View, SafeAreaView,TextInput } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

export default function SearchButton() { 

const [ enteredGoalText, setEnteredGoalText] = useState('');//on va creer un etat pour notre liste de partenaire
const[courseGoals, setCourseGoals] = useState([]); //on va creer un etat pour notre liste de partenaire

  //on va creer une fonction OnChange sur notre TextInput qui va permettre de recuperer la valeur de l'input au fur et à msure que l'utilisateur tape
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder= "Rechercher une activité" />
            </View>
        </View>

    
    );
}
///NOS STYLES/////////////////
const styles = StyleSheet.create({
appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 100,
},
    
inputContainer: {
    flex:1,
    padding:40,
    flexDirection: 'row',
    marginBottom: 24,
    padding: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#red',

},
textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
},
        
    
});
