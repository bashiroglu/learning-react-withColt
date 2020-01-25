import React from 'react';
import useToggle from './hooks/useMyToggle';

function Toggler() {
  const [name, toggleName] = useToggle(true);
  const [woman, toggleWoman] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleName}>
        {name ? 'name: Abdulla' : 'surname: Bashiroghlu'}
      </h1>
      <h1 onClick={toggleWoman}>
        {woman ? 'woman' : 'man or something else'}
      </h1>
    </div>
  );
}

export default Toggler;
