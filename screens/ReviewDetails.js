import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/Global";
import Card from "../shared/Card";



export default function ReviewDetails({ navigation }) {  
    const rating = navigation.getParam("rating");  

       return (
        
            <View style={globalStyles.container}>
                <Card>
                <Text>{ navigation.getParam("title") }</Text>
                <Text>{ navigation.getParam("body") }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text> 
                <Image source={images.ratings[rating]} />  
                </View> 
                </Card>          
            </View>
        
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    }
});

























// sample code for navigation 

// const pressHandler = () => {        
//     navigation.goBack();        // an alternative navigation method      
// }
// <Button title="Back to Home" onPress={pressHandler} />