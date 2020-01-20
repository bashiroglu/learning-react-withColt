- In React the keyword this is almost always problem.

There are several ways to avoid id.

1. Binding function in constructor to this.
2. using implicit arrow function
3. using implicit binding
4. using experimental class field function

- When we need to pass argument to function, we will face with problem. We can solve it like below:

```
 changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

<button style={colorObj} onClick={() => this.changeColor(c)}>c- is argument we pass
      Click on me!
</button>

```

Or like this

```
 changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

<button style={colorObj} onClick={this.changeColor.bind(this, c)}> c- is argument we pass
      Click on me!
</button>
```
