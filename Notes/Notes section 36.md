- We can use reducer to state management. It is better than useState in many ways. It also mimic redux and make it easy to learn. 

This is our reducer:
```
import uuid from "uuid/v4";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    default:
      return state;
  }
};
export default reducer;
```


