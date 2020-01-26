import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

class ThemeProvider extends Component {
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

export default ThemeProvider;
