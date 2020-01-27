## React Context with react hook

- It is easier to use context with React hook. We can consume it easily in functional component whether it context provider is class based or functional.
  for that we need to import useContext from react and get our context by that. as below

```
import { ThemeContext } from "./contexts/ThemeContext";

const { isDarkMode, toggleTheme } = useContext(ThemeContext); // that is it and we can
// repeat this as much as we want unlike class based component
```

- We can also create our provider by using functional based component and we don't need HOC etc. 

```
import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
 const [isDarkMode, toggleTheme] = useToggleState(false);
 return (
   <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
     {props.children}
   </ThemeContext.Provider>
 );
}
```
