import { atom } from 'recoil';

const cartCountAtom = atom({
  key: 'cartCount',
  default: 0,
});

export default cartCountAtom;