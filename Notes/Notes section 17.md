## React Lifecycle Methods

- #### ComponentDidMount

ComponentDidMount is one of React's built is functions. React call it after first render.
General flow is like this, constructor, first render ComponentDidMount, if we change state in ComponentDidMount, after ComponentDidMount render will be called again. Because of this reason ComponentDidMount is great places for fetch data from api and load state with fetched data.
But to fetch data in constructor is NOOO, because of how react works.
Because react render page before ComponentDidMount, we have to give initial state, otherwise react coudn't find our state related code in state and throw error.

```
async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let user = response.data;
    this.setState({ user });
  }
```

- #### ComponentDidUpdate

ComponentDidUpdate is one of React's built is functions, React call it after renders which were called because of state is changed. This is good place to optimise our components.

  - #### ComponentWillUnmount

ComponentWillUnmount is one of React's built is functions, React call it just after component get distroyed. It is unuseful to setState here because React won't call Redner after it.
