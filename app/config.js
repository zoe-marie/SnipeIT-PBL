import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";

async function getConfig(key) {
  if (Platform.OS !== "web") {
    const config = {
      snipeItApiToken: await AsyncStorage.getItem("@snipe_it_api_url"),
      snipeItApiUrl: await AsyncStorage.getItem("@snipe_it_api_token"),
    };
    return config["key"];
  } else {
    const config = {
      snipeItApiUrl: process.env.REACT_APP_SNIPE_IT_API_URL,
      //Config.SNIPE_IT_API_URL,
      snipeItApiToken: Config.SNIPE_IT_API_TOKEN,
    };
    return config["key"];
  }
}


/* async const config = await getConfig() */

export default getConfig;