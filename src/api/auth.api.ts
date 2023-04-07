import axios from "axios";
import { config } from "../configs/config";
import { AuthState } from "../stores/auth.store";

export const getAccessToken = async function (): Promise<
  AuthState | undefined
> {
  const body = {
    grant_type: config.login.grantType,
    client_id: config.login.clientId,
    client_secret: config.login.clientSecret,
  };
  const { data } = await axios.post(`${config.urlPrefix}oauth`, body);
  return data;
};
