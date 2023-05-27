import "./App.css";
import { NavLink } from "react-router-dom";
import { Payment } from "./pages/Payment";

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About us</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/'>Payment</NavLink>
          </li>
        </ul>
      </nav>
      <Payment />
    </div>
  );
}

export default App;
