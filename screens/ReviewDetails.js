import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {    

       return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam("title") }</Text>
            <Text>{ navigation.getParam("body") }</Text>
            <Text>{ navigation.getParam("rating") }</Text>

            
        </View>
    )
}


























// sample code for navigation 

// const pressHandler = () => {        
//     navigation.goBack();        // an alternative navigation method      
// }
// <Button title="Back to Home" onPress={pressHandler} />