import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const wledSettings = () => {
  const [snipeItUrl, setSnipeItApiUrl] = useState("test");
  return (
    <View>
      <Text>WLED Board IP Address</Text>
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

export default wledSettings;
