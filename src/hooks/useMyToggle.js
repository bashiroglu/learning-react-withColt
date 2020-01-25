import { useState } from 'react';

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  function toggle() {
    setState(!state);
  }
  return [state, toggle];
}

export default useToggle;
