import './App.css';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import movie from '../src/data/horror.json'

function App() {
  return (
    <div className="App">
      <BookList allBooks={movie} />
    </div>
  );
}

export default App;
