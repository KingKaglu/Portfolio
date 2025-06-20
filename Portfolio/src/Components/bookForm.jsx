import React, { useState } from 'react';
import './BookForm.css';

const BookForm = ({ onSubmit, initialData = null }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [status, setStatus] = useState(initialData?.status || 'wantToRead');
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [notes, setNotes] = useState(initialData?.notes || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onSubmit({ title, author, status, rating, notes });
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
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="wantToRead">Want to Read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <input
        type="number"
        placeholder="Rating (0–5)"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button type="submit">{initialData ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
