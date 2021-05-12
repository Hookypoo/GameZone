import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header () {
    return(
        <View style={StyleSheet.header}>
            {/* icon for the view goes here */}
            <View>
                <Text style={StyleSheet.headerText}>GameZone</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
});