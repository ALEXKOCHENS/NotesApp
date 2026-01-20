import { useState } from 'react';

const FormData = ({ heading, notes, addNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'High',
    category: 'Work',
    description: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //Validation
    e.preventDefault();
    if (!formData.title) alert('Please add a note');
    if (!formData.description) alert('Please add a description');

    //create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    //add notes to state
    addNotes([newNote, ...notes]);

    //reset the form data

    setFormData({
      title: '',
      priority: 'High',
      category: 'Work',
      description: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='title-input'>
        <label htmlFor='Title'>{heading}</label>
        <input
          name='title'
          type='text'
          placeholder='Add new note'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='select-options'>
        <label htmlFor='select'>Select Priority:</label>
        <select
          type='text'
          name='priority'
          value={formData.priority}
          onChange={handleChange}
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
          name='category'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Work'>Work</option>
          <option value='School'>School</option>
          <option value='Personal'>Personal</option>
          <option value='Meeting'>Meeting</option>
        </select>
      </div>

      <div className='description'>
        <input
          name='description'
          type='textarea'
          value={formData.description}
          placeholder='Add description'
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='add-note'>
        Add Note
      </button>
    </form>
  );
};

export default FormData;
