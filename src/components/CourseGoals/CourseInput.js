import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredText);

    onAdd(enteredText);
    setEnteredText('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
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
