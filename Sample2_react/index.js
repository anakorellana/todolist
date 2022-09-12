function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'meet friend for lunch',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      }        
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}];
      setTodos(newTodos);
    }
    const removeTodo = index => {
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
  

    const Header = {
        padding: "10px 20px",
        textAlign: "center",
        color: "white",
        fontSize: "22px"
       }


    return(
        
      <div className="app" >
        <h1 style={ Header}>ToDos</h1>
        <div className="todo-list" style={{ paddingBottom: '6.5rem' }} >
          {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
        
      </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  