import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create'
import TodoDetails from './TodoDetails'
import Completed from './Completed'
import EditTodo from './EditTodo'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/lists/:id">
              <TodoDetails/>
            </Route>
            <Route path="/completed">
              <Completed/>
            </Route>
            <Route path="/edit/:id">
              <EditTodo/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
