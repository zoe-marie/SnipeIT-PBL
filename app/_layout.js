import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
