import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Movement({ data }) {
 const [showValue, setshowValue] = useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={
        () => setshowValue(!showValue)
    }>
      <View style={styles.item}>
        <Text style={styles.date}>{data.date}</Text>
            <View style={styles.itemValue}>
                <Text style={styles.itemTitle}>{data.label}</Text>
                <View style={styles.contentValue}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    {
                        showValue ? (
                            <Text style={
                                data.type == 1 ? styles.balance : styles.expenses
                            }>{
                                data.type == 1 ? data.value : "-"+data.value
                            }</Text>
                        )
                        :
                        (
                            <View style={styles.skeleton} />
                        )
                    }
                    
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomColor: "#dadada",
        borderBottomWidth: 1,
    },
    item: {
        padding: 16,
    },
    itemTitle: {
        fontSize: 20,
        color: "#000",
    },
    itemValue: {
        flexDirection: "row",
        alignItems: "center",
    },
    currencySymbol: {
        fontSize: 20,
        color: "#dadada",
        marginRight: 4,
    },
    balance: {
        fontSize: 20,
        color: "#2ecc71",
    },
    date: {
        fontSize: 12,
        color: "#333",
    },
    contentValue: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
    },
    expenses: {
        fontSize: 20,
        color: "#e74c3c",
    },
    skeleton: {
        width: 100,
        height: 20,
        backgroundColor: "#dadada",
        borderRadius: 4,
    }

})