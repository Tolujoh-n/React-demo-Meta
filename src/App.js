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


// function johnImage(props) {
//   const userPic = <img src={profile} alt="planet-pic" />;
//   return userPic;
// }

function App() {
  return (
    <div className="App-code">
      <h1>Welcome to React</h1>

      <div>
      <img src={profile} alt="planet-pic" />
      </div>

      <Header name="john" color="orange" age={12} />
      <hr />
      <Nav />
      <hr />

      <div>
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
        <pics />
        <img src={pics} className="" alt="pics" style={{ width: "500px" }} />
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
