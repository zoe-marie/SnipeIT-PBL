import axios, { AxiosResponse } from "axios";
import * as SecureStore from "expo-secure-store";

import getConfig from "../config";

export async function saveSecureStore(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore(key) {  //get data from secure store
    return await SecureStore.getItemAsync(key).then((response) => {
      return response;
    });
  }

export async function setLight(ip, segment) {  //mage the apiurl and run blinkLight
  const apiUrl = `http://${ip}/json`;
  console.log("WLED API URL" + apiUrl)
  blinkLight(apiUrl, segment);
}

function blinkLight(apiUrl, segment) {  // turn on the segment for 5 sec then off
  lightOn(apiUrl, segment);

  setTimeout(function () {
    lightOff(apiUrl, segment);
  }, 5000);
}

export async function lightOn(apiUrl, segment) {  // turn the specified segment on
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

  try {
    const res = await axios.post(apiUrl, json, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    return "success";
  } catch (error) {
    console.error("in get asset: "+error);
  }
}

export async function lightOff(apiUrl, segment) {   // turn the specified segment off
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

  try {
    const res = await axios.post(apiUrl, json, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    return "success";
  } catch (error) {
    console.error("in get asset: "+error);
  }
}
