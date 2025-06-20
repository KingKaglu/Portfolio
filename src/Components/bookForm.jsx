// BookForm.jsx
import React, { useState, useEffect } from 'react';
import './BookForm.css';

const BookForm = ({ onSubmit, initialData = null }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('wantToRead');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setStatus(initialData.status);
      setRating(initialData.rating);
      setNotes(initialData.notes);
    } else {
      // Clear form when initialData is null (for add mode)
      setTitle('');
      setAuthor('');
      setStatus('wantToRead');
      setRating(0);
      setNotes('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert("Book title and author are required!");
      return;
    }
    onSubmit({ title, author, status, rating, notes });
    // Only clear form if in add mode (initialData is null)
    if (!initialData) {
      setTitle('');
      setAuthor('');
      setStatus('wantToRead');
      setRating(0);
      setNotes('');
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{initialData ? 'Edit Book Details' : 'Add New Book'}</h2>
      
      <div className="form-group">
        <label htmlFor="title">Book Title</label>
        <input
          id="title"
          type="text"
          placeholder="e.g., The Hitchhiker's Guide to the Galaxy"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Book Title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          placeholder="e.g., Douglas Adams"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          aria-label="Author"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          aria-label="Book Status"
        >
          <option value="wantToRead">Want to Read</option>
          <option value="reading">Reading</option>
          <option value="finished">Finished</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating (0-5 Stars)</label>
        <input
          id="rating"
          type="number"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          aria-label="Book Rating"
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes (Optional)</label>
        <textarea
          id="notes"
          placeholder="Add any personal notes about the book..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          aria-label="Book Notes"
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        {initialData ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
