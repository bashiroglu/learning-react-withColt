In React we handle input state ourselves, for this purpose we use function which update state.

We can write handleChange function for each input but there is also another way of updating respective state by using ES2015 JS feature.

```
constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }); //evt.target.name will be name //and email based on where we call it
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
```

- Passing state to parent component. This is the way we used before to pass event ocject or any argument to function cames with props from parent. It is the same structure here. We call the function by using this.props.FunctionActionName and pass state or any value from state. The rest will be handled by React
