import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [searchText, setSearchText] = useState('');

  const colors = ['#f28b82', '#d7aefb' ,'#ffff66', '#0066cc', '#66ff66'];

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([
        { text: noteText, color: selectedColor, id: Date.now() },
        ...notes,
      ]);
      setNoteText('');
      setSelectedColor('#ffffff');
    }
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='container'>
      <div className="app-container">
        <h1>NotesApp</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <div className="note-input-container">
          <textarea
            placeholder="Enter your note here..."
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
          />
          <div className="color-picker">
            {colors.map(color => (
              <span
                key={color}
                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></span>
            ))}
          </div>
          <div className='add-button-container'>
          <button className="add-button" onClick={addNote}>ADD</button>
          </div>
        </div>
        <div className="notes-container">
          {filteredNotes.map(note => (
            <div
              key={note.id}
              className="note-card"
              style={{ backgroundColor: note.color }}
            >
              {note.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;