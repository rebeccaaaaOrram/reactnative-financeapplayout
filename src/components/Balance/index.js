import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Balance({saldo, gastos}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo Atual</Text>
            <View style={styles.itemValue}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.itemValue}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{gastos}</Text>
            </View>
        </View >

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginTop: -16,
        marginStart: 16,
        marginEnd: 16,
        borderRadius: 8,
        padding: 22,
        elevation: 2,
        zIndex: 2,
    },
    item: {


    },
    itemTitle: {
        fontSize: 20,
        color: "#dadada",
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
    expenses: {
        fontSize: 20,
        color: "#e74c3c",
    },
})