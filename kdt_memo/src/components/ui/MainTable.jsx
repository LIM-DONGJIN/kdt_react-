import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
// import data from '../../db/data.json';
import WordList from './WordList';


function MainTable({dayId}) {

  const [data, setData] = useState();
  const [isCheck, setIsCheck] = useState(false);

  useEffect(()=>{
    console.log(dayId)
    console.log(isCheck)
    fetch(`http://localhost:3001/words?day=${dayId}`)
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
    .catch(err=>console.log(err));
  },[isCheck]);

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
          data && data.map(word=>(
            <WordList
              key={word.id}
              word={word}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
            />
          )) 
        }
      </tbody>
    </Table>
  );
}

export default MainTable;