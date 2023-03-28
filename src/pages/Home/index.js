import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movement from '../../components/Movements';

const list = [
  { id: 1, label: "Salário", value: '5000', date: "17/03/2023" , type: 1 },
  { id: 2, label: "Mercado", value: '300', date: "17/03/2023" , type: 0 },
]

export default function Home() {
  
  return (
    <View style={styles.container}>
      <Header name="Rebecca Ignacio"/>
      <Balance saldo="9,500" gastos="-520,00"/>
      <Actions />
      <Text style={styles.title}>Ultimas transações</Text>
      <FlatList
        style={{marginStart: 16, marginEnd: 16}}
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Movement data={item}/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 30,
    marginStart: 16,
  },
});
