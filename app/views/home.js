import { Link, Stack, useRouter } from "expo-router";
import { Image, Text, View, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function LogoTitle() {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text>Snipe IT - Home </Text>
      </View>
    </View>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Ionicons
              name="md-settings-outline"
              size={32}
              color="grey"
              onPress={() => router.push("views/settings/home")}
            />
          ),
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
          marginBottom: 200,
        }}
      >
        Please choose an option!
      </Text>
      <Button
        onPress={() => router.push("views/camera")}
        title="Scan QR Code"
        style={{ margin: 200 }}
      />
      <Button
        onPress={() => router.push("views/manualSearch")}
        title="Search for an item manualy"
        style={{ margin: 200 }}
      />
    </View>
  );
}
