import './App.css';
import { useState } from 'react';
import { BookRow } from './components/BookRow'

function App() {
  const [bookid, setBookid] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('')
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  function add_book(e) {
    e.preventDefault();

    const book = {
      bookid,
      name,
      author,
    };     // update book

    if (edit) {
      let copy = books;
      Object.assign(copy[active], book)   // changing the value of copy[active] element to book
      setBooks([...copy]);
      setEdit(false);
      setActive(null);
      setBookid('');
      setName('');
      setAuthor('');
    }
    else {
      setBooks([...books, book]);  // update books array to current books array+new book appended at back
      setBookid('');
      setName('');
      setAuthor('');
    }
  }
  return (
    <>
      <div className="App">
        <h1>Book-Keeper Dashboard</h1>
        <form onSubmit={add_book}>
          <label>BookId</label>
          <input type="text" value={bookid} onChange={(e) => setBookid(e.target.value)}></input>
          <br></br>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          <br></br>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
          <br></br>
          <button>{edit ? "Update" : "Add"}Book</button>
        </form>
        <h2>Books</h2>
      </div>
      <BookRow books={books} setBooks={setBooks} setBookid={setBookid} setName={setName} setAuthor={setAuthor} setEdit={setEdit} setActive={setActive}></BookRow>
    </>
  );
}


export default App;
