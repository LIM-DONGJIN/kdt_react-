import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

import data from '../../db/data.json';
import WordList from './WordList';

function MainTable() {


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