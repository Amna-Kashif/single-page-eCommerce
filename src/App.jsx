import React from 'react';
import Card from './components/Card/Card';
import {Data} from './components/Data/Data'

const App = () => {
  return (
    <>
    <header>
    <h1 class='site-name'> EzyMart </h1>
    </header>

    { Data ? (
      Data.map((element, index) => {
        return (<Card key={index} image={element.image} title={element.title} id={index}
        description={element.description} price={element.price} category={element.category} rating={element.rating.rate}/>)  
      })
      ) : (
        <h1> Data Not fetch! </h1>
      )}
     
     
    </>
  )
}

export default App