import { useState, useEffect } from 'react';
import FormData from './components/FormData';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, addNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  // Adding notes to local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  //Function to delete a note.

  const deleteNote = (id) => {
    addNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <FormData heading='Notes App' notes={notes} addNotes={addNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
