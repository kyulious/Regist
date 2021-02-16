import React, { Component, useRef } from "react";
import { useForm } from 'react-hook-form';


function Regist() {

const { register, watch, errors, handleSubmit } = useForm();
console.log(watch('email'))
//watch는 해당 데이터를 확인한다.
const password = useRef();
//validate를 위해 지정해준다.
password.current = watch("password");
const onSubmit = (data) => {
  console.log('data', data)
}
  return (
    <form id="mainform"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div id="labelform">이메일</div>
      <input
        class="maininput"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
      ref={register({
        //필수입력
        reqired: true,
        pattern: /^\S+@\S+$/i })}/>
        {errors.email &&<p class="alert">이메일을 제대로 입력해주세요.</p>}
        <div id="labelform">아이디</div>
      <input
        class="maininput"
        name="id"
        placeholder="아이디를 입력해주세요.(최대 8글자)"
        ref={register({ required: true, maxLength: 10, pattern: "[a-zA-Z].+" })}
      />
      {errors.id && errors.id.type === "required" && <p class="alert">아이디가 입력되지 않았습니다.</p>}
      {errors.id && errors.id.type === "maxLength" && <p class="alert">아이디는 8글자 이내로 입력해주세요.</p>}
      {errors.id && errors.id.type === "pattern" && <p class="alert">아이디는 이내로 입력해주세요.</p>}
        <div id="labelform">이름</div>
      <input
        class="maininput"
        name="name"
        placeholder="이름을 입력해주세요.(최대 10글자)"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && <p class="alert">이름이 입력되지 않았습니다.</p>}
      {errors.name && errors.name.type === "maxLength" && <p class="alert">이름은 10글자 이내로 입력해주세요.</p>}
      <div id="labelform">비밀번호</div>
      <input
        class="maininput"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요.(6~15글자)"
        ref={register({ required: true, minLength: 6, maxLength: 15 })}
      />
      {errors.password && errors.password.type === "required" && <p class="alert">비밀번호가 입력되지 않았습니다.</p>}
      {errors.password && errors.password.type === "minLength" && <p class="alert">비밀번호는 6글자 이상 입력해주세요.</p>}
      {errors.password && errors.password.type === "maxLength" && <p class="alert">비밀번호는 15글자 이내로 입력해주세요.</p>}
      <div id="labelform">비밀번호 확인</div>
      <input
        class="maininput"
        name="password_confirm"
        type="password"
        placeholder="비밀번호를 입력해주세요.(6~15글자)"
        ref={register({
          required: true,
          //유효성 검사(위에서 password.current 지정해줘야함)
          validate: (value) =>
            value === password.current
        })}
      />
      {errors.password_confirm && errors.password_confirm.type === "required" && <p class="alert">비밀번호가 입력되지 않았습니다.</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p class="alert">비밀번호가 일치하지 않습니다.</p>}
      <input type="submit" id="submit" value="가입하기"/>
    </form>
  );
}

export default Regist;
