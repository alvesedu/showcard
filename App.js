import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{padding: 10, margin: 10}}>
          <Text>Plantão - Unidade 1 </Text>
          <Text>Data</Text>
          <Text>Unidade</Text>
        </Card>

        <Card style={{padding: 10, margin: 10}}>
          <Text>Plantão - Unidade 2 </Text>
          <Text>Data</Text>
          <Text>Unidade</Text>
        </Card>

        <Card style={{padding: 10, margin: 10}}>
          <Text>Plantão - Unidade 3</Text>
          <Text>Data</Text>
          <Text>Unidade</Text>
        </Card>

        <Card style={{padding: 10, margin: 10}}>
          <Text>Plantão - Unidade</Text>
          <Text>Data</Text>
          <Text>Unidade</Text>
        </Card>

        <Card style={{padding: 10, margin: 10}}>
          <Text>Plantão - Unidade</Text>
          <Text>Data</Text>
          <Text>Unidade</Text>
        </Card>
        
     
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
