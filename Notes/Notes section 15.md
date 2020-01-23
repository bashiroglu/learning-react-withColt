When we want to delete any item from our main comp state we can use the code below

```
remove(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }
```

When we want to update we need 2 data, id to identify and the data(text, object etc) to update.

```
 update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
```


