import React, { useState, useEffect } from 'react';
import './bookManager.css';
import BookForm from './BookForm';

const BookManager = () => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('my-books');
    return saved ? JSON.parse(saved) : [];
  });

  const [editingBook, setEditingBook] = useState(null); // 👈 track which book is being edited

  useEffect(() => {
    localStorage.setItem('my-books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    const bookWithId = { id: crypto.randomUUID(), ...newBook };
    setBooks((prev) => [...prev, bookWithId]);
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const startEditing = (book) => {
    setEditingBook(book);
  };

  const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === editingBook.id ? { ...book, ...updatedBook } : book
      )
    );
    setEditingBook(null); // exit edit mode
  };

  return (
    <div className="book-manager">
      <h1>📚 My Book Tracker</h1>
      <BookForm
        onSubmit={editingBook ? updateBook : addBook}
        initialData={editingBook}
      />
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Status:</strong> {book.status}</p>
            <p><strong>Rating:</strong> {book.rating} ⭐</p>
            <p><strong>Notes:</strong> {book.notes}</p>
            <div className="buttons">
              <button onClick={() => startEditing(book)}>✏️ Edit</button>
              <button onClick={() => deleteBook(book.id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookManager;
