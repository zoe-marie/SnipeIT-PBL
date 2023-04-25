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
  // const snipeItApiUrl = "http://snipe-it.zh.ber.jdew.de/api/v1"; //await getConfig("snipeItApiUrl")
  // const snipeItApiToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzUzOWMxMjEwZmEzZGM1MjMxNWZhMTEzZWUzZjk5OTIzNmM4YTYxZTFhOWM4ODEzYzNiMTdkZGY1MWNjOWRkZjg4YTQ2ZTA5OTU2NDY0OTciLCJpYXQiOjE2ODE0OTE0MTYuMjg3MDI2LCJuYmYiOjE2ODE0OTE0MTYuMjg3MDMxLCJleHAiOjIxNTQ4NzcwMTYuMjc1NTQ1LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.N39h3p6n2XOQ-kxOrBga2ZnTfwW4dwkb7tsDVcRrJctWBcZz9K2wuyQB4jo4j2rBtCO-SgyJZWNCJ2hCrsjDyehfiHh9fFJQ4168aGiT2lEv5HFy-shzC5lC1z9TzBdRybMzjNbTQ62z9oWbQc4k0KVNh01jOYxozrv4c4dyiPV56Pk1VWiZ_k9GcarOAEQ0NknZDn9XmhlZQ2H8bDArLHzXW6scKTBXEkirTEW4TIPv5ZbWqT5QoINSMgZulDPlMZ5Zo_QlAeZb4XTppYz5ohgC6V6gcKWHJSLkJAqCi_EgPjHOlJj-4SKg4JawMNmhFVbWi9WsrqNKetf-m8gyxU-vkWzI5xMFH6vNj889PH1VFJCyVbQwUwYaF8t82Z2LxTgPtvriKRUxXEDxF68oT9B4ne6O-xfrEd5Dy2S2hBeCBGo3Pe9KCZLmmOJpuOR_EjWiWi1BM3ELj5cxUA1QrijS8dn2TQ3IfkD2A4Lm6vVXQmEEdd7jZePv7ufsnRukhUiDYobx-1mDlZgZPQUWkOF-4J9EiJelCXSrqIeSkBAMh1XKTlizNZWWrTXJFeCBhKiYJ7n6Fan4UKgpdQuXfix5dsIs9cPY7Pcp6Qg-2KCQueDflPKjITet0xMmZt-ezSassAzi1SDAt09hFod_ecp5w4DmnBwJAKvPsK-e8Os"
  const snipeItApiUrl = "http://64.226.66.117/api/v1";
  const snipeItApiToken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGQ4MzZjOWQ0NjY5ZDg4YzQ1N2FiODMyOGVkOWZiNDZlZTc3Y2I0MmJjZjU5Y2M0YzM5NDYxMTVmMDA5NGQ4MzM4NTU0MTI3YTRiZGY2NTEiLCJpYXQiOjE2ODIyNjc0MzcuNTY2OTE2LCJuYmYiOjE2ODIyNjc0MzcuNTY2OTE4LCJleHAiOjIzMTM0MTk0MzcuNTU4NzcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LUEsD4kto6EVOAu-b_uNKitxXyaXkSwOTvs_TATRcXpFOK8ORneBgF3Bg2pyHjAMtHcXBP5T2df_4rm9c9x6l5rcA8Cnl1GTtjlLDY1n4KNh5rGPpVZMSWSTe1s8sS5ncitiq75ZqEBL5XteRLvNaLlUNeGyv5-hhbkopJ-CxGGLF5mnSgGMAtbYRfwNdVPNbjcAWRrO1996o4gdfl4YlD5F3hBWiWvTSQOHWUbsL-gMe8oRiazyOd7JLN4mz-40PhSiAp1OEb_pTYmI1ebDvWULjaA3qitFNyB7lcVladJ1INyMaPUabYJ2QAxu3kS3irmmyncDM0DMdF7Jtmr6AELf9h9y6S8kgqHtfbLV8nmAGjBBEvEOg5qorGo7TV9ZygyF7R9kNyTfrHpkJaiTKFJ4zZFpuwsyvN5nE6mq_0hfoab7-OLFLdELP_gX8Z-oOytgWB04CwkOBvD9aovmOtLdu30F8JBuM_iuuDaAStBrusuOAV0allkUUKeXx8wT_5B4uN58wK1xbpMzHNfBHUVT3Tkgfyampa_I2HsQMqmZx8avz8N7xoExphH4YAcvCY6g7cUeal3iRTTPrRVMctkTiAEw-q3ZmK97qtepA6Ux3hORb_bvdCEA3R-O-l5YNhT7My2_VUVh1dOwVJlzN0ICPJ2wth9q2viG6MYyjbc";
  await getSecureStore("SnipeURL").then((response) => {
    console.log(response);
  });
  const apiUrl = `${snipeItApiUrl}/hardware/${id}`;

  const res: AxiosResponse = await axios.get(apiUrl, {
    headers: { Authorization: snipeItApiToken },
  });
  return await res.data;
}

export async function getLocation(id) {
  // const snipeItApiUrl = "http://snipe-it.zh.ber.jdew.de/api/v1"; //await getConfig("snipeItApiUrl")
  // const snipeItApiToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzUzOWMxMjEwZmEzZGM1MjMxNWZhMTEzZWUzZjk5OTIzNmM4YTYxZTFhOWM4ODEzYzNiMTdkZGY1MWNjOWRkZjg4YTQ2ZTA5OTU2NDY0OTciLCJpYXQiOjE2ODE0OTE0MTYuMjg3MDI2LCJuYmYiOjE2ODE0OTE0MTYuMjg3MDMxLCJleHAiOjIxNTQ4NzcwMTYuMjc1NTQ1LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.N39h3p6n2XOQ-kxOrBga2ZnTfwW4dwkb7tsDVcRrJctWBcZz9K2wuyQB4jo4j2rBtCO-SgyJZWNCJ2hCrsjDyehfiHh9fFJQ4168aGiT2lEv5HFy-shzC5lC1z9TzBdRybMzjNbTQ62z9oWbQc4k0KVNh01jOYxozrv4c4dyiPV56Pk1VWiZ_k9GcarOAEQ0NknZDn9XmhlZQ2H8bDArLHzXW6scKTBXEkirTEW4TIPv5ZbWqT5QoINSMgZulDPlMZ5Zo_QlAeZb4XTppYz5ohgC6V6gcKWHJSLkJAqCi_EgPjHOlJj-4SKg4JawMNmhFVbWi9WsrqNKetf-m8gyxU-vkWzI5xMFH6vNj889PH1VFJCyVbQwUwYaF8t82Z2LxTgPtvriKRUxXEDxF68oT9B4ne6O-xfrEd5Dy2S2hBeCBGo3Pe9KCZLmmOJpuOR_EjWiWi1BM3ELj5cxUA1QrijS8dn2TQ3IfkD2A4Lm6vVXQmEEdd7jZePv7ufsnRukhUiDYobx-1mDlZgZPQUWkOF-4J9EiJelCXSrqIeSkBAMh1XKTlizNZWWrTXJFeCBhKiYJ7n6Fan4UKgpdQuXfix5dsIs9cPY7Pcp6Qg-2KCQueDflPKjITet0xMmZt-ezSassAzi1SDAt09hFod_ecp5w4DmnBwJAKvPsK-e8Os"
  const snipeItApiUrl = "http://64.226.66.117/api/v1";
  const snipeItApiToken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGQ4MzZjOWQ0NjY5ZDg4YzQ1N2FiODMyOGVkOWZiNDZlZTc3Y2I0MmJjZjU5Y2M0YzM5NDYxMTVmMDA5NGQ4MzM4NTU0MTI3YTRiZGY2NTEiLCJpYXQiOjE2ODIyNjc0MzcuNTY2OTE2LCJuYmYiOjE2ODIyNjc0MzcuNTY2OTE4LCJleHAiOjIzMTM0MTk0MzcuNTU4NzcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LUEsD4kto6EVOAu-b_uNKitxXyaXkSwOTvs_TATRcXpFOK8ORneBgF3Bg2pyHjAMtHcXBP5T2df_4rm9c9x6l5rcA8Cnl1GTtjlLDY1n4KNh5rGPpVZMSWSTe1s8sS5ncitiq75ZqEBL5XteRLvNaLlUNeGyv5-hhbkopJ-CxGGLF5mnSgGMAtbYRfwNdVPNbjcAWRrO1996o4gdfl4YlD5F3hBWiWvTSQOHWUbsL-gMe8oRiazyOd7JLN4mz-40PhSiAp1OEb_pTYmI1ebDvWULjaA3qitFNyB7lcVladJ1INyMaPUabYJ2QAxu3kS3irmmyncDM0DMdF7Jtmr6AELf9h9y6S8kgqHtfbLV8nmAGjBBEvEOg5qorGo7TV9ZygyF7R9kNyTfrHpkJaiTKFJ4zZFpuwsyvN5nE6mq_0hfoab7-OLFLdELP_gX8Z-oOytgWB04CwkOBvD9aovmOtLdu30F8JBuM_iuuDaAStBrusuOAV0allkUUKeXx8wT_5B4uN58wK1xbpMzHNfBHUVT3Tkgfyampa_I2HsQMqmZx8avz8N7xoExphH4YAcvCY6g7cUeal3iRTTPrRVMctkTiAEw-q3ZmK97qtepA6Ux3hORb_bvdCEA3R-O-l5YNhT7My2_VUVh1dOwVJlzN0ICPJ2wth9q2viG6MYyjbc";
  const apiUrl = `${snipeItApiUrl}/locations/${id}`;

  const res: AxiosResponse = await axios.get(apiUrl, {
    headers: { Authorization: snipeItApiToken },
  });
  return await res.data;
}

export async function setLight(ip, segment) {
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
