import { useState } from 'react';
import FormData from './components/FormData';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, addNotes] = useState([]);
  return (
    <div>
      <FormData heading='Notes App' notes={notes} addNotes={addNotes} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
