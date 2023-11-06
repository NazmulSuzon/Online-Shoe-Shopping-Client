import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouterProvider
} from "react-router-dom";
import NavBar from './Components/HomePage/NavBar/NavBar';
import Carousel from './Components/HomePage/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Carousel/>
      </Router>
    </div>
  );
}

export default App;
