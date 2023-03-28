import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >

      <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonActionContent}>
            <AntDesign name="addfolder" size={24} color="#333" />
            <Text style={styles.buttonActionText}>Entrada</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonActionContent}>
            <AntDesign name="addfolder" size={24} color="#333" />
            <Text style={styles.buttonActionText}>Saida</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonActionContent}>
            <AntDesign name="addfolder" size={24} color="#333" />
            <Text style={styles.buttonActionText}>Resumo</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomColor: "#dadada",
        borderBottomWidth: 1,
    },
    buttonAction: {
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonActionContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonActionText: {
        fontSize: 14,
        color: "#333",
        marginTop: 8,
    },

})

