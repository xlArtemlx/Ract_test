import React, { Fragment } from 'react';


const HotDogListItem = ({ hotDog }) => {
  console.log(hotDog)
  const { title, descriorion, name, image} = hotDog;
  return (
    <Fragment>
      <span>{image}</span>
      <span>{name}</span>
      <span>{title}</span>
      <span>{descriorion}</span>
    </Fragment>
  );
};

export default HotDogListItem;