import axios, { AxiosResponse } from "axios";
import * as SecureStore from "expo-secure-store";

import getConfig from "../config";

export async function saveSecureStore(key, value) {
  console.log(key, value);
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore(key) {
  return await SecureStore.getItemAsync(key).then((response) => {
    return response;
  });
}

export async function getAsset(id) {
  console.log("getAsset");
  const snipeItApiUrl = await getSecureStore("SnipeURL");
  const snipeItApiToken = await getSecureStore("SnipeKEY");
  const apiUrl = `${snipeItApiUrl}/api/v1/hardware/${id}`;
  const apiKey = "Bearer " + snipeItApiToken;

  try {
    const res = await axios.get(apiUrl, {
      headers: { Authorization: apiKey },
    });
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch asset");
  }
}

export async function getLocation(id) {
  console.log("getLocation");
  const snipeItApiUrl = await getSecureStore("SnipeURL");
  const snipeItApiToken = await getSecureStore("SnipeKEY");
  const apiUrl = `${snipeItApiUrl}/locations/${id}`;
  const apiKey = "Bearer " + snipeItApiToken;

  try {
    const res = await axios.get(apiUrl, {
      headers: { Authorization: apiKey },
    });
    console.log("getLocation res" + res)
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch location");
  }
}

export async function setLight(ip, segment) {
  console.log("setLight");
  const apiUrl = `http://${ip}/json`;
  blinkLight(apiUrl, segment);

  console.log("LOCATION_DATA");
}

function blinkLight(apiUrl, segment) {
  lightOn(apiUrl, segment);

  setTimeout(function () {
    //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    lightOff(apiUrl, segment);
  }, 5000);
}

export function lightOn(apiUrl, segment) {
  console.log("LIGHT_ON" + segment);
  const segmentNr = parseInt(segment);

  const json = JSON.stringify({
    on: true,
    bri: 100,
    transition: 0,
    seg: [
      {
        id: segmentNr,
        on: true,
        bri: 255,
        col: [[255, 0, 0, 0]],
        fx: 27,
        sx: 180,
        mi: false,
      },
    ],
  });
  console.log(json);
  axios.post(apiUrl, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function lightOff(apiUrl, segment) {
  console.log("LIGHT_OFF" + segment);
  const segmentNr = parseInt(segment);
  const json = JSON.stringify({
    on: true,
    bri: 100,
    transition: 0,
    seg: [
      {
        id: segmentNr,
        on: false,
        bri: 255,
        col: [[255, 0, 0, 0]],
        fx: 27,
        sx: 180,
        mi: false,
      },
    ],
  });
  console.log(json);

  axios.post(apiUrl, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
