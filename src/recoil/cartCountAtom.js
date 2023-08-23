import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 1,
});

export const priceAtom = atom({
  key: "priceAtom",
  default: 0,
});

export const stockAtom = atom({
  key: "stockAtom",
  default: true,
});
