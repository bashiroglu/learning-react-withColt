import React from 'react';

const Head = ({ side }) => {
  return (
    <div>
      <img
        src={
          side === 1
            ? 'https://dictionary.cambridge.org/pl/images/thumb/coin_noun_002_07480.jpg?version=5.0.65'
            : 'https://miro.medium.com/fit/c/256/256/2*v7fhWww1JLC61LytGDkprA.png'
        }
        alt="coin"
      />
    </div>
  );
};

export default Head;
