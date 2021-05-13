import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../shared/Card";

export default function ReviewDetails({ navigation }) {    

       return (
        
            <View style={globalStyles.container}>
                <Card>
                <Text>{ navigation.getParam("title") }</Text>
                <Text>{ navigation.getParam("body") }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text> 
                    <Image source={require("../assets/rating-1.png")} />               
                </View> 
                </Card>          
            </View>
        
    )
}

const styles = StyleSheet.create({
    rating: {

    }
})

























// sample code for navigation 

// const pressHandler = () => {        
//     navigation.goBack();        // an alternative navigation method      
// }
// <Button title="Back to Home" onPress={pressHandler} />