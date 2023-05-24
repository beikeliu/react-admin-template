import { create } from "zustand";

interface UserStore {
  name: string;
  setName: (name: string) => void
}

const useUserStore = create<UserStore>((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
}));

export { useUserStore };
