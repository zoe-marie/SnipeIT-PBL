import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";

const homeSettings = () => {
  const router = useRouter();
  const [snipeItUrl, setSnipeItApiUrl] = useState("test");
  return (
    <View>
      <Text>Snipe PBL Settings</Text>
      <Button
        title="Snipe IT Settings"
        onPress={() => router.push("views/settings/snipeIT")}
      />
      <Button
        title="WLED Settings"
        onPress={() => router.push("views/settings/wled")}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="The IP Address of your WLED Instance"
        onChangeText={(newURL) => setSnipeItApiUrl(newURL)}
      />

      <Text>Snipe IT API Key</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="The API Key of your Snipe IT Instance"
        onChangeText={(newURL) => setSnipeItApiUrl(newURL)}
      />
    </View>
  );
};

export default homeSettings;
