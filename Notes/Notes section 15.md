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

When we want to disable some action based on condition, we can use the method below

```
    <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled ? null : doScore} // basically null won't do anything
    >
```

- if we want to access any module everywhere we can add it to index.js

```
import "@fortawesome/fontawesome-free/css/all.css";
```

- in order to add new class to our classes string, we can use string interpletation

```
if (locked) classes += 'Die-locked';
```

- when we want to set state after something we can use this kind of code, because seState is asynchrones function.

```
this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
```
