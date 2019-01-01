import React from 'react';

const ImageList = props => {
  const images = props.images.map((image, index) => <img src={image.urls.regular} alt="car" key={index} />)
  return (
    <div>{images}</div>
  )
}

export default ImageList;
