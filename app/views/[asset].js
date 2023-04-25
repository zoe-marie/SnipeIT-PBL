import { Text, View, Button, StyleSheet } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "expo-router";
import { getAsset, getLocation, setLight } from "../api/snipeit";

const Asset = () => {
  const router = useRouter();
  const [id, setId] = useState(useSearchParams().asset);
  const [asset, setAsset] = useState();
  const [location, setLocation] = useState();

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    getData();
    /* const { data, status } = useQuery(`asset-${id}`, (id) => getAsset, {
      staleTime: 60 * 10000000, // 10000 minute = around 1 week
      cacheTime: 60 * 10000000,
    }); */
  }, []);
  const getData = async () => {
    console.log("IIIDDDDD");
    console.log(id);
    const assetData = await getAsset(id);
    console.log("ASSET-DATA");
    console.log(assetData);
    setAsset(assetData);
    const assetLocation = await getLocation(assetData.location.id);
    console.log("ASSET-LOCATION");
    console.log(assetLocation);
    setLocation(assetLocation);
  };
  const handleBlink = () => {
    if (location?.address === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.boldtext}>No location found for asset!</Text>
          <Button title={"Tap to Scan Again"} onPress={handleGoBack} />
        </View>
      );
    }
    setLight(location?.address, location?.address2);
  };

  if (asset?.status === "error") {
    return (
      <View style={styles.container}>
        <Text style={styles.boldtext}>{asset?.messages}</Text>
        <Button title={"Tap to Scan Again"} onPress={handleGoBack} />
      </View>
    );
  }
  if (asset?.location === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.boldtext}>No location found for asset!</Text>
        <Button title={"Tap to Scan Again"} onPress={handleGoBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldtext}>Asset ID</Text>
      <Text style={styles.text}>{asset?.id}</Text>
      <Text style={styles.boldtext}>Asset Name</Text>
      <Text style={styles.text}>{asset ? asset.name.toString() : ""}</Text>
      <Text style={styles.boldtext}>Location</Text>
      <Text style={styles.text}>{asset?.location.name}</Text>
      <Button
        style={styles.button}
        title={"Tap to Blink"}
        onPress={handleBlink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boldtext: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default Asset;
