import {useState, useEffect } from 'react'

import './App.css'

function App() {
  const[books, setBooks] = useState([])

  const [title,setTitle] = useState('')
  const [releaseYear,setReleaseYear] = useState(0)

  const addBook = async () => {
      console.log('Adding book:', title, releaseYear)
      const bookData = {
        title,
        release_year: releaseYear
      };
      try{``
      const response = await fetch('http://127.0.0.1:8000/api/books/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
      });
      if (response.ok) {
        const newBook = await response.json();
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setTitle('');
        setReleaseYear(0);
      } 
    } catch (error) {
      console.error('Error adding book:', error)
    }
    
  }


  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try{
      const response = await fetch('http://localhost:8000/api/books')
      const data = await response.json()
      console.log(data)
      setBooks(data)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  return (
    <>
      <h1>
        Books website 
      </h1>
      <div>
        <input type="text" placeholder='Book title....'  onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input type="number" placeholder='Release Year....' onChange={(e) => setReleaseYear(e.target.value)} />
        <br />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>BOOK TITLE:</p>
            {book.title} 
            <br />
            <p>RELEASE YEAR:</p>
            {book.release_year}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
