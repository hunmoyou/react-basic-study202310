import React, { useEffect, useReducer, useState } from 'react';

import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';

// 리듀서 함수
/*
 이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
 컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
 컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.

 param1 - state: 변경 전의 상태값
 param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
 return: 관리할 상태값들을 반환
*/
const emailReducer = (state, action) => {
  console.log('email reducer called!!!');
  console.log('state: ', state);
  console.log('action: ', action);

  // dispatch 함수가 전달한 액션 객체의 타입에 따라 변경할 상태값을 반환
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: null,
  };
};

const Login = ({ onLogin }) => {
  // email reducer 사용하기
  /*
    param1 - reducer funtion: 위에서 만든 리듀서 함수
    param2 - initial state: 초기 상태값
    return1 - 이메일 관련 상태변수
    return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  // 패스워드 입력값을 지정
  const [enteredPassword, setEnteredPassword] = useState('');
  // 패스워드 입력이 정상적인지 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  //emailState는 객체 형태. -> isValid 프로퍼티가 변경됐을 때만 useEffect를 실행하게 하려면
  // isValid를 디스트럭쳐링 한다.
  const { isValid: emailIsValid } = emailState;

  // 입력란을 모두 체크하여 form의 버튼 disabled를 해제하는 상태 변수
  // 상태변수 formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect called in Login.js!');
      setFormIsValid(emailIsValid && enteredPassword.trim().length > 6);
    }, 1000);

    // clean up 함수 - 컴포넌트가 업데이트 되거나 없어지기 전에 실행
    return () => {
      console.log('clean up!');
      clearTimeout(timer);
    };

    // 이 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 떄 마다 useEffect를 재실행한다.
  }, [emailIsValid, enteredPassword]);

  const emailChangeHandler = (e) => {
    // reducer의 상태 변경은 dispatch함수를 통해 처리
    /*
      param1 - action객체(리듀서 함수의 2번째 파라미터)
    */
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE',
    });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            !emailState.isValid ? styles.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type='submit'
            className={styles.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
