## React Hooks

React Hooks is the concept of using React with functional components.
In order to use built in hooks we can import them from React and use.

```
import React,{UseState} from 'react';
const [nice, setNice]= UseState(true)
```

true is initial value for state, setNice is function to change it.

If we need we can define our own hook, as below.

```
import { useState } from 'react';

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  function toggle() {
    setState(!state);
  }
  return [state, toggle];
}

export default useToggle;

```

if we need other methods to update state, we can define them here and add to returned array.
