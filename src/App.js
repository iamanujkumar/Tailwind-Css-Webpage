import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Nav from './Component/Nav/Nav';
import Main from './Component/Main';
import Faq from './Component/Faq';

function App() {
  return (
    <div className="App">
      <div className="container ml-16">
      <Navbar/>
      <Nav/>
      <Main/>
      <Faq/>
      </div>
    </div>
  );
}

export default App;
