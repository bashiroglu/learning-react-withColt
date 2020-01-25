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

- exact means this exact path and it is wrapped with Switch, Switch basically say only one of them can be rendered per time.
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

- We can also render 404 page, for this we need to create 404 page component, after that we can we say if non of the routes won't match, render this page by putting it at the end and not giving any route. In this case we have to use Switch other wise we will always display 404 because we don't have any route for that.

- We can also redirect by using one of features of react-router-dom. We write if block in ur render method to prevent something we want user can not do, and inject below code there as a component, when user enter if block by result of his or her actions, user will be redirected to the where we want, in this example to homepage. It works as below

```
 <Redirect to='/' />
```

another way of redirecting is history.push, history is object hold all urls history, if we want to add, we can push new url to that object. But before that we make sure that that component have access to our props.

```
this.props.history.push(`/food/${this.state.query}`);
```

- if we compare to this two redirecting features, we can see that history keep the history of our url requests as a result we can use and go back, but redirect doesn't. So, It means in successful requests we can use history push but otherwise we have to use redirect.

- if we want to pass history or other router props to any component which is not rendered by Route component, in that case we can pass by using withRouter. it is higer order function which comes with react-router-dom. we can use it as below.

```
import { withRouter } from "react-router-dom";
export default withRouter(Navbar);
```