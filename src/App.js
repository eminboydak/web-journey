/* Default Imports */
import logo from './logo.svg';
import './App.css';

/* My Imports */
import Header from './layouts/Header';
import Landing from './layouts/Landing';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <Header />
        <Landing />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
