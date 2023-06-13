import './App.css';
import Counter from './components/Counter';
import UserDataJson from './components/User';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React test interview
        </h1>
        <Counter />

        <UserDataJson />
      </header>
    </div>
  );
}

export default App;


