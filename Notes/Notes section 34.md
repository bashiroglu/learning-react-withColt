Coxtext API is the way of to pass props by not using prop drilling with components.
It is used as below:

```
import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, somethingElse: false }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
```

in the main component, mainly in app component

```
import {ThemeProvider} from  './ThemeContext'

render() {
    return (
      <ThemeProvider>
     // by this we give access to ThemeProvider to pass props instead of us
        <Navbar/>
        <OtherComponents/>
      </ThemeProvider>
    );
  }
```

in order to use it we can import our themecontext and get our state inside of it.

```
import {ThemeContext} from  './ThemeContext'
class MyClass extends React.Component {
  static contextType = ThemeContext;
  render() {
    let {isDark} = this.context; // true which comes from our ThemeProvider component
    /* we can render something based on the value of isDark*/
  }
}
```

we can also pass function to toggle or to change our value in theme context, for this we can pass function too as we did state.

```
import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
 constructor(props) {
   super(props);
   this.state = { isDarkMode: false };
   this.toggleTheme = this.toggleTheme.bind(this);
 }
 toggleTheme() {
   this.setState({ isDarkMode: !this.state.isDarkMode });
 }
 render() {
   return (
     <ThemeContext.Provider
       value={{ ...this.state, toggleTheme: this.toggleTheme }}
     >
       {this.props.children}
     </ThemeContext.Provider>
   );
 }
}
```
in consumer we can get like below
```
const { isDarkMode, toggleTheme } = this.context;

<Switch onChange={toggleTheme} />
```
