import { useState } from 'react';
import FormData from './components/FormData';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, addNotes] = useState([]);

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
