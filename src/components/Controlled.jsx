import { useState } from 'react';

const Controlled = ({ title }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('High');
  const [category, setCategory] = useState('Work');
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
        <label htmlFor='select'>Select Priority:</label>
        <select
          type='text'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>

      <div className='select-options'>
        <label htmlFor='select'>Select Category:</label>
        <select
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='Work'>Work</option>
          <option value='School'>School</option>
          <option value='Personal'>Personal</option>
          <option value='Meeting'>Meeting</option>
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
