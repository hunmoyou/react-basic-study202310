import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');
  // 입력값 검증 상태변수
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredText);

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAdd(enteredText);
    setEnteredText('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input
          type='text'
          onChange={textChangeHandler}
          value={enteredText}
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
