import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import React, { Component } from 'react'
import { useRouter } from "expo-router";


const ManualSearch = () => {
    const [number, onChangeNumber] = React.useState('');
    const router = useRouter();

    return (
      <View style={styles.container}>
        <Text>manualSearch</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
          onPress={() => router.push(`/views/${number}`)}
          title="Search"
          style={{ margin: 200 }}
        />
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
  

export default ManualSearch