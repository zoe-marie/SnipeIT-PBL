import axios, { AxiosResponse } from "axios";
import * as SecureStore from "expo-secure-store";

import getConfig from "../config";

export async function saveSecureStore(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore(key) {
  return await SecureStore.getItemAsync(key).then((response) => {
    return response;
  });
}

export async function getAsset(id) {
    const snipeItApiUrl = await getSecureStore("SnipeURL");
    const snipeItApiToken = await getSecureStore("SnipeKEY");

    const apiUrl = `${snipeItApiUrl}/api/v1/hardware/${id}`;
    const apiKey = "Bearer " + snipeItApiToken;

  try {
    const res = await axios.get(apiUrl, {
      headers: { Authorization: apiKey },
    });
    return res.data;
  } catch (error) {
    console.error("in get asset: "+error);
  }
}

export async function getLocation(id) {
  const snipeItApiUrl = await getSecureStore("SnipeURL");
  const snipeItApiToken = await getSecureStore("SnipeKEY");
  const apiUrl = `${snipeItApiUrl}/api/v1/locations/${id}`;
  const apiKey = "Bearer " + snipeItApiToken;

  try {
    const res = await axios.get(apiUrl, {
      headers: { Authorization: apiKey },
    });
    return res.data;
  } catch (error) {
    console.error("in get location: "+error);
  }
}

export async function setLight(ip, segment) {
  const apiUrl = `http://${ip}/json`;
  blinkLight(apiUrl, segment);
}

function blinkLight(apiUrl, segment) {
  lightOn(apiUrl, segment);

  setTimeout(function () {
    //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    lightOff(apiUrl, segment);
  }, 5000);
}

export function lightOn(apiUrl, segment) {
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
  axios.post(apiUrl, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function lightOff(apiUrl, segment) {
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

  axios.post(apiUrl, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
