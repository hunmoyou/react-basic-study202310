import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';

const AddUsers = () => {
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  const userNameChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      userName: e.target.value,
    }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      return;
    }

    if (+userValue.age < 1) return;

    console.log(userValue);

    setUserValue({
      userName: '',
      age: '',
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor='username'>이름</label>
        <input
          id='username'
          type='text'
          onChange={userNameChangeHandler}
          value={userValue.userName}
        />
        <label htmlFor='age'>나이</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type='submit'>가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
