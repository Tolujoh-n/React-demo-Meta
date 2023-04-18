import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
// import Math from './components/Main';
import logo from './logo.svg';
import pics from './pics.png';
import profile from './profile.png';
import Btn from "./components/Btn";
import Calculator from './components/calculator';


// for Calculator

import "./Calculator.css";
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';

// function johnImage(props) {
//   const userPic = <img src={profile} alt="planet-pic" />;
//   return userPic;
// }

function App() {
  return (

    <div className="App-code">
      <div>
        <h1>Welcome to React</h1>
        <ModeToggler />
      </div>

      <div>
        <Promo />
      </div>


      <div>
        <img src={profile} alt="planet-pic" />
      </div>

      <div>
        <Header name="john" color="orange" age={12} />
      </div>

      <hr />

      <div>
        <Nav />
      </div>

      <hr />

      <div>
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pics} className="" alt="pics" style={{ width: "500px" }} />
        <br />
        <Btn />
        <Calculator />
      </div>

      <div>
        <Sidebar />
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default App;
