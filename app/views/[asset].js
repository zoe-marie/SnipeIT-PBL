import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { useRouter, useSearchParams } from 'expo-router'

const Asset = () => {
  const router = useRouter();
  const { asset } = useSearchParams();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
    <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Asset ID
        </Text>
      <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            margin: 10,
            marginBottom: 100,
          }}>
          {asset}
          </Text>
      <Button
            title={"Tap to Scan Again"}
            onPress={handleGoBack}
          />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Asset
