import React from "react";
import { StyleSheet, Text, View } from 'react-native';



export default function HOME(){
    return(
        <View style={styles.container}> 
            <Text style={styles.titletext}> Home Screen</Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#FFF5E4'
    },
    titletext: {
        fontFamily: 'Nunito-Black',
        fontSize: 18,
        color: '#8BBCCC',
        justifyContent: "center",
        textAlign: "center",
    }
    
});