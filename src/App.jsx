import { useState } from 'react';

import FormData from './components/FormData';
const App = () => {
  const [notes, addNotes] = useState([]);
  return (
    <div>
      <FormData heading='Notes App' notes={notes} addNotes={addNotes} />
    </div>
  );
};

export default App;
