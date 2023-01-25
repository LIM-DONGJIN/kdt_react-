import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WordForm() {

  // 단어 추가를 위한 객체 생성
  const [word, setWord] = useState(
    {
      id: 0,
      day: 1,
      eng: "",
      kor: "",
      isDone: false
    }
  );


  // 데이터 확인용
  useEffect(()=>{
    console.log(word);
  },[word]);

  const handleChange = (e) => {
    setWord({...word, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();
    // 기존 아이디의 마지막 번호 찾기
    let getId = 0;
    fetch('http://localhost:3001/words')
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      getId = data[data.length-1].id
    })
    .catch(err=>console.log(err));
    // 새로운 단어 추가
    fetch('http://localhost:3001/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        ...word, id : getId+1
      })
    }).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>English Word</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="영어 단어를 입력해 주세요." 
          name="eng"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Korean Word</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="한국어 단어를 입력해 주세요." 
          name="kor"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default WordForm;