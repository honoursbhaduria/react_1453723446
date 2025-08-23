import { use, useState } from 'react'

import './App.css'

function App() {
  const[books, setBooks] = useState([])


  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try{
      const response = await fetch('http://localhost:3000/books')
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
        <input type="text" placeholder='Book title....' />
        <br />
        <input type="number" placeholder='Release Date....' />
        <br />
        <button>Add Book</button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>BOOK TITLE:</p>
            {book.title} 
            <br />
            <p>RELEASE DATE:</p>
            {book.release_date}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
