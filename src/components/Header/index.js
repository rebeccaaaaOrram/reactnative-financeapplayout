import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import {
    Feather
} from '@expo/vector-icons'
import {
    MotiView, MotiText
} from "moti";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 54;

export default function Header({name}) {
    return (
        <View style={styles.container}>
             <View style={styles.content}>
                <Text style={styles.userName}>{name}</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={24} color="#fff" />
                </TouchableOpacity>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8A05BE",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 60,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userName: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    buttonUser: {
        width: 40,
        height: 40,
        backgroundColor: "#A239CA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44,
    }
});

