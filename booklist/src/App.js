import BookContextProvider from "./contexts/BookContext";
import NavBar from './components/NavBar'
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
        <BookContextProvider>
            <NavBar/>
            <NewBookForm/>
            <BookList/>
        </BookContextProvider>
    </div>
  );
}

export default App;
