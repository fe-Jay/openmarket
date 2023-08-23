import { selector } from "recoil";

import { countAtom, priceAtom } from "./cartCountAtom";

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const count = get(countAtom);
    const price = get(priceAtom);
    return count * price;
  },
});

export const incrementCount = selector({
  key: "incrementCount",
  get: ({ get }) => get(countAtom),
  set: ({ set }) => {
    set(countAtom, prevCount => prevCount + 1);
  },
  return: countAtom,
});

export const descrementCount = selector({
  key: "descrementCount",
  get: ({ get }) => get(countAtom),
  set: ({ set }) => {
    set(countAtom, prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  },
  return: countAtom,
});
