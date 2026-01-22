import { useState } from 'react';
import Button from './Button';
import NoteInput from './NoteInput';

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
          <NoteInput
            name={'title'}
            onChange={handleChange}
            value={formData.name}
            placeholder={'Add Note'}
          />
          <div className='select-options'>
            <label htmlFor='select'>Select Priority:</label>
            <select
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
            <NoteInput
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
