import { create } from "zustand";
const useStore = create((set) => ({
  resData: JSON.parse(localStorage.getItem("resData")) || [],
  setResData: (newResData) => set({ resData: newResData }),
}));

export default useStore;
