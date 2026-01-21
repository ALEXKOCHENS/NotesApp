import { useState } from 'react';
import Button from './Button';

const FormData = ({ heading, notes, addNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'High',
    category: 'Work',
    description: '',
  });

  //State  to toggle the form visibility
  const [isFormVisible, setVisibility] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    if (!formData.title || !formData.description) return;

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
    <>
      <div className='form-title'>
        <h1 htmlFor='Title'>{heading}</h1>

        <Button
          className='add-notes'
          onClick={() => setVisibility(!isFormVisible)}
        >
          {isFormVisible ? 'Close Form x' : 'Add Notes +'}
        </Button>
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div className='title-input'>
            <input
              name='title'
              type='text'
              placeholder='Add new note'
              value={formData.title}
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
          <Button type='submit' className='add-note'>
            Add Note
          </Button>
        </form>
      )}
    </>
  );
};

export default FormData;
