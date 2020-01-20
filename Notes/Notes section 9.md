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

- Passing functions to child components as a prop. We mainly keep our state in parent component and pass state and action functions of those states as a prop.

```
constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }


   render() {
    return (
      <div>
        <h1>First Number List</h1>
        <ul>
          {this.state.nums.map(n => (
            <NumberItem value={n} remove={() => this.remove(n)} />
          ))}
        </ul>
      </div>
    );
  }
  }
```

In child component

```
render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.props.remove}>X</button> //we refer action function in parent
        // and remove the element by useing remove function in parent.
      </li>
    );
  }
```

But propblem with above code is that. We create many new function when we bind them inline. That is why we have another solution.

In order to avoid this problem we can bind our parent action function in constructor and pass to child. In child we can refer it in our another function by refering it.

```
constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this); //we bind remove here
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>
          {this.state.nums.map(n => (
            <BetterNumberItem key={n} value={n} remove={this.remove} />
          ))}
        </ul>
      </div>
    );
  }
```

in child component.

```
constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this); //we bind handleRemove function in here
  }
  handleRemove(evt) {
    this.props.remove(this.props.value);
  }
   render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button> // we call it.
      </li>
    );
  }
```

- Another concept is key. Key is used by react to identify what is changed, added, removed, updated.

1.  key should be unique.
2.  we mainly use id of component as a key
3.  key should be used in every array iteration or loop of components.
4.  we can use uuid third party library to have unique ids.
5.  we can use index of element while iteration(but not good practice)
