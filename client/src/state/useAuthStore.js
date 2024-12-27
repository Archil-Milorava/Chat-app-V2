import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const userStore = create((set) => ({
  loading: false,
  isSignIn: false,
  authUser: null,

  getCurrentUser: async () => {
    try {
      set({ loading: true });
      const response = await axios.get("/api/v1/auth/currentuser");
      set({ authUser: response.data.currentUser });
      set({ loading: false });
    } catch (error) {
      set({ authUser: null });
      throw new Error(error);
    } finally {
      set({ loading: false });
    }
  },

  login: async (data) => {
    try {
      set({ isSignIn: true });
      await axios.post("/api/v1/auth/login", data, { withCredentials: true });
      toast.success("Logged In");
      set({ isSignIn: false });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      set({ isSignIn: false });
      throw new Error(error);
    } finally {
      set({ isSignIn: false });
    }
  },
}));
