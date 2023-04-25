import { Link, Stack, useRouter } from "expo-router";
import { Image, Text, View, Button } from "react-native";
import Home from "./views/home";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Index() {
  const router = useRouter();
  return Home();
}
