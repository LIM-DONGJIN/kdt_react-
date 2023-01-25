import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WordForm() {

  const [word, setWord] = useState(
    {
      id: 0,
      day: 0,
      eng: "",
      kor: "",
      isDone: false
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>English Word</Form.Label>
        <Form.Control type="text" placeholder="영어 단어를 입력해 주세요." />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Korean Word</Form.Label>
        <Form.Control type="text" placeholder="한국어 단어를 입력해 주세요." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default WordForm;