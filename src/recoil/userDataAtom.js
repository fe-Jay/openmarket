import { atom } from "recoil";
// eslint-disable-next-line import/no-extraneous-dependencies
import { recoilPersist } from "recoil-persist";

// 새로고침해도 상태 유지
const { persistAtom } = recoilPersist({
  key: "loginState",
  storage: localStorage,
});

const userDataAtom = atom({
  key: "user",
  // 로컬스토리지에 저장된 데이터를 기본값으로 설정
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default userDataAtom;
