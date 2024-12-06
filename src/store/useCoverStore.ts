import { create } from "zustand";

interface CoverState {
  opened: boolean;
  setOpened: (payload: boolean) => void;
}

export const useCoverStore = create<CoverState>()((set) => ({
  opened: false,
  // setOpened: (payload) => set((state) => ({ opened: payload })),
  setOpened: (payload) => set(() => ({ opened: payload })),
}));
