import { create } from "zustand";
import { getAccessToken } from "../api/auth.api";
import { config } from "../configs/config";

export interface AuthState {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string | null;
}

interface AuthStoreState {
  authDetails: AuthState | null;

  login: () => void;
}

const useProjectStore = create<AuthStoreState>((set) => ({
  authDetails: null,
  login: async () => {
    try {
      const authDetails = await getAccessToken();
      console.log(authDetails);
      if (!authDetails) {
        throw new Error("failed to retrieve auth");
      }
      set({ authDetails: authDetails });
      config.accessToken = `Bearer ${authDetails.access_token}`;
    } catch (e) {
      console.log("failed");
    }
  },
}));

export default useProjectStore;
