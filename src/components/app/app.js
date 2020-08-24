import React from 'react';
import HotDogList from '../hotDogList'
import Header from '../header'
import AddHotDog from '../hotdog-form'


const App = () => {

    return (
      <>
        <Header/>
        <HotDogList />
        <AddHotDog/>
      </>
      );

}

export default  App ;