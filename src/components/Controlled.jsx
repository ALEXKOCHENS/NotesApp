import { useState } from 'react';

const Controlled = ({ title }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form>
      <div className='title-input'>
        <label htmlFor='Title'>{title}</label>
        <input
          type='text'
          placeholder='Add new note'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='select-options'>
        <label htmlFor='select'>Select Priority</label>
        <select
          type='text'
          placeholder='Add new note'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>

      <div className='description'>
        <input
          type='textarea'
          value={description}
          placeholder='Add description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className='add-note'>Add Note</button>
    </form>
  );
};

export default Controlled;
