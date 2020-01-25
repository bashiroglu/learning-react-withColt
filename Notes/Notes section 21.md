## React Router dom

In react we use react-router-dom to manage server-side rendering. first we need to install to our project.

```
npm i react-router-dom
```

Then we need to wrap our who component with that.

```
  <BrowserRouter>
    <App />
  </BrowserRouter>,
```

We can use it like below:

```
<Switch>
    <Route exact path='/dog/hater' component={Hater} />
</Switch>
```

- exact means this exact path and it is wrapped with Switch, <Switch> basically say only one of them can be rendered per time.
  Path mean in which url we will render this component
  if we want to pass prop we can below syntax

```
<Route exact path='/dog' render={() => <Dog name='Biscuits' />} /> />
```

or this alternative syntax

```
<Route exact path="/dog">
    <Dog name="Biscuits" />
</Route>
```

Another functionality which comes from react-router-dom is header or changing the url.
We can this functionality by using components Link and NavLink. Only advantage of Navlink is that we can select active Link and adding it class of active (this is built in functionalilty). We can use like below:

```
<NavLink activeClassName="active-link" to="/">
//active-link is class in our css stylesheet and NavLink manage the rest
    About
</NavLink>
```

- We can pass the param by using rotueparams. Also it is possible to pass prop by using name component in here.

```
  <Route
   exact
    path='/food/:name'
    render={routeProps => <Food {...routeProps} />}
  />
```

with component and another sytax it will be passed automatically
