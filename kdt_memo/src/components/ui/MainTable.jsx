import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Table from 'react-bootstrap/Table';
// import data from '../../db/data.json';
import WordList from './WordList';

function MainTable() {

  const [data, setData] = useState();
  
  useEffect(()=>{
    fetch('http://localhost:3001/words')
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
    .catch(err=>console.log(err));
  },[]);

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
            />
          ))
        }
       
      </tbody>
    </Table>
  );
}

export default MainTable;