import { useState } from 'react'
import Component from './Components/Interactive';
import Thankyou from './Components/Thankyou';

function App() {
  const [page, setPage] = useState(0);
  const [rating, setRating] = useState(null);


  const oneClicked = () => setRating(1);
  const twoClicked = () => setRating(2);
  const threeClicked = () => setRating(3);
  const fourClicked = () => setRating(4);
  const fiveClicked = () => setRating(5);
  
    
  const thankyou = () => setPage(1); 
  

  return (
    <>
      {page === 0 && (
        <Component
        onClickOne={oneClicked}
        onClickTwo={twoClicked}
        onClickThree={threeClicked}
        onClickFour={fourClicked}
        onClickFive={fiveClicked}
        onClickRating={thankyou}
        />
      )}

      {page === 1 && (
        <Thankyou 
        ratings={rating}             
          
        />
      )}
    </>
  )
}

export default App
