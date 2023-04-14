import axios, { AxiosResponse } from "axios";
import https from "https";

import getConfig from "../config";

export async function getAsset(id: number) {
  const snipeItApiUrl = "https://snipe-it.zh.ber.jdew.de/api/v1"; //await getConfig("snipeItApiUrl")
  const snipeItApiToken = "REDACTED"

  const apiUrl = `${snipeItApiUrl}/hardware/${id}`;
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    requestCert: false,
  });
  const res: AxiosResponse = await axios.get(apiUrl, {headers: {Authorization: snipeItApiToken},
    httpsAgent: httpsAgent,
  });
  return await res.data;
}