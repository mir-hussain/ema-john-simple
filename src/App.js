import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      <main>
        <Shop></Shop>
      </main>
    </div>
  );
}

export default App;
