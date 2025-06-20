import React, { useState, useEffect } from 'react';
import './bookManager.css';
import BookForm from './BookForm';

const BookManager = () => {
  const [books, setBooks] = useState(() => {
    // Initialize books from localStorage or an empty array
    const saved = localStorage.getItem('my-books');
    return saved ? JSON.parse(saved) : [];
  });

  const [editingBook, setEditingBook] = useState(null); // Track which book is being edited

  // Save books to localStorage whenever the books state changes
  useEffect(() => {
    localStorage.setItem('my-books', JSON.stringify(books));
  }, [books]);

  // Function to add a new book
  const addBook = (newBook) => {
    const bookWithId = { id: crypto.randomUUID(), ...newBook }; // Assign a unique ID
    setBooks((prev) => [...prev, bookWithId]);
  };

  // Function to delete a book
  const deleteBook = (id) => {
    // Confirm deletion with the user
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks((prev) => prev.filter((book) => book.id !== id));
    }
  };

  // Function to set the book to be edited
  const startEditing = (book) => {
    setEditingBook(book);
  };

  // Function to update an existing book
  const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === editingBook.id ? { ...book, ...updatedBook } : book
      )
    );
    setEditingBook(null); // Exit edit mode after update
  };

  // Group books by status for better organization
  const booksByStatus = books.reduce((acc, book) => {
    acc[book.status] = acc[book.status] || [];
    acc[book.status].push(book);
    return acc;
  }, {});

  const statusOrder = ['reading', 'wantToRead', 'finished'];

  return (
    <div className="book-manager">
      <h1 className="manager-title">📚 My Personal Book Tracker</h1>
      
      {/* BookForm component for adding/editing books */}
      <BookForm
        onSubmit={editingBook ? updateBook : addBook}
        initialData={editingBook}
      />

      <div className="book-sections">
        {statusOrder.map(statusKey => (
          booksByStatus[statusKey]?.length > 0 && (
            <div key={statusKey} className="book-status-section">
              <h2 className="status-heading">
                {statusKey === 'reading' ? 'Currently Reading' :
                 statusKey === 'wantToRead' ? 'Want to Read' :
                 'Finished Books'} ({booksByStatus[statusKey].length})
              </h2>
              <div className="book-list">
                {booksByStatus[statusKey].map((book) => (
                  <div className="book-card" key={book.id}>
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author"><strong>Author:</strong> {book.author}</p>
                    <p className="book-status"><strong>Status:</strong> {book.status}</p>
                    {book.rating > 0 && <p className="book-rating"><strong>Rating:</strong> {book.rating} ⭐</p>}
                    {book.notes && <p className="book-notes"><strong>Notes:</strong> {book.notes}</p>}
                    <div className="book-actions">
                      <button className="edit-btn" onClick={() => startEditing(book)}>✏️ Edit</button>
                      <button className="delete-btn" onClick={() => deleteBook(book.id)}>🗑️ Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
        {books.length === 0 && (
          <p className="no-books-message">No books added yet. Start by adding your first book above!</p>
        )}
      </div>
    </div>
  );
};

export default BookManager;