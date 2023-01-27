import React from 'react';
import MainSection from '../ui/main/MainSection';

function Main({checker, setChecker}) {
  return ( 
    <div className='mainWrap'>
      <MainSection 
        checker={checker}
        setChecker={setChecker}
      />
    </div>
   );
}

export default Main;