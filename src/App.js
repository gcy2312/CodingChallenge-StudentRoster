import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchPage from './components/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchPage></SearchPage>
      </header>
    </div>
  );
}

export default App;