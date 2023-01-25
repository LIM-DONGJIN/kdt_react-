import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import data from '../../db/data.json';

function MainTable() {

  const [isView, setIsView] = useState(false);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>check</th>
          <th>english</th>
          <th>korean</th>
          <th>controller</th>
        </tr>
      </thead>
      <tbody>
        {
          data.words.map(word=>(
            <tr key={word.id}>
              <td>{word.id}</td>
              <td>
                <Forms>
                  <Forms.Check 
                    type="checkbox"
                    disabled={word.isDone}
                    defaultChecked={word.isDone}
                  />
                </Forms>
              </td>
              <td>{word.eng}</td>
              <td>{isView ? word.kor : ""}</td>
              <td>
                <Button variant="primary">답 보기</Button>{'  '}
                <Button variant="secondary">삭제</Button>
              </td>
            </tr>
          ))
        }
       
      </tbody>
    </Table>
  );
}

export default MainTable;