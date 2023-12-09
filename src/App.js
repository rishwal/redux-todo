import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './features/todos/AddTodo';
import Main from './Components/Main/Main';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Main />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
