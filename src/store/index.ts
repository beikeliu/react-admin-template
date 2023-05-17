import { create } from "zustand";

interface UserStroe {
  name: string;
  setName: (name: string) => void
}

const useUserStore = create<UserStroe>((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
}));

export { useUserStore };
