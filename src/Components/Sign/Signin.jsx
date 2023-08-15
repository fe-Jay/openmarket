import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { PostSignIn } from "../../ApiHandler";
import useValidations from "../../Hook/useValidations";
import userDataAtom from "../../recoil/userDataAtom";
import Button from "../common/Button";
import TextInput from "../common/Input";

export default function Signin() {
  // * 게시물 유효성 검사
  // 버튼 활성화 상태 관리
  const [disabledBtn, setDisabledBtn] = useState(false);

  // 정규식 패턴
  const username = useValidations(
    "자음 또는 모음, 특수문자를 사용할 수 없습니다.",
    /^[가-힣a-zA-Z\d\s]*$/,
    "",
  );

  const password = useValidations(
    "영소문자를 포함해서 8자 이상 입력하세요.",
    /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
    "",
  );

  // 유효성 검사 실행
  const inputs = [username, password];
  const validationFields = () => {
    let valid = true;
    inputs.forEach(input => {
      if (input.error || !input.value) {
        valid = false;
      }
    });
    setDisabledBtn(!valid);
  };

  // 유효성 검사 실행할 의존성 배열 지정
  useEffect(() => {
    validationFields();
  }, [username, password]);

  // *  로그인 실행
  const { response, error, signIn } = PostSignIn();

  const handleSignIn = e => {
    e.preventDefault();
    e.stopPropagation();
    signIn(username.value, password.value, "SELLER");
  };
  const [userData, setUserData] = useRecoilState(userDataAtom);
  useEffect(() => {
    if (response) {
      console.table(response);
      setUserData(response);
    }
    if (error) {
      console.error(error);
    }
  }, [response, error]);

  // * 로그아웃
  const handleSignOut = () => {
    setUserData(null);
    // recoil-persist 제거
    localStorage.removeItem("recoil-persist");
  };

  return (
    <section>
      <h2>로그인</h2>
      <form onSubmit={handleSignIn}>
        <TextInput
          label="아이디"
          type="text"
          // key="username"
          value={username.value}
          error={username.error}
          onChange={username.onChange}
          placeholder="아이디를 입력하세요"
          errorMsg="아이디를 입력하세요."
          maxlength="10"
          required
        />
        <TextInput
          label="비밀번호"
          type="password"
          // key="password"
          value={password.value}
          error={password.error}
          onChange={password.onChange}
          placeholder="비밀번호를 입력하세요"
          errorMsg="비밀번호를 입력하세요."
          maxlength="8"
          required
        />

        <Button
          type="submit"
          size="cta"
          variant={disabledBtn ? "disabled" : "primary"}
        >
          로그인
        </Button>
        <button type="button" onClick={handleSignOut}>
          로그아웃
        </button>
      </form>
      {userData && (
        <div>
          <p>{userData.id}</p>
          <p>{userData.user_type}</p>
          <p>{userData.token}</p>
        </div>
      )}
    </section>
  );
}
