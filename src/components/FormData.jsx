import { useState } from 'react';
import Button from './Button';
import NoteInput from '../Inputs/NoteInput';
import SelectInput from '../Inputs/SelectInput';

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
            type='text'
            onChange={handleChange}
            value={formData.title}
            placeholder={'Add Note'}
            required
          />

          <SelectInput
            className='select-options'
            name='priority'
            label={'Select Priority:'}
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: 'High' },
              { value: 'Medium', label: 'Medium' },
              { value: 'Low', label: 'Low' },
            ]}
          />
          <SelectInput
            className='select-options'
            name='category'
            label={'Select Category:'}
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: 'Work' },
              { value: 'School', label: 'School' },
              { value: 'Personal', label: 'Personal' },
              { value: 'Meeting', label: 'Meeting' },
            ]}
          />

          <div className='description'>
            <textarea
              name='description'
              value={formData.description}
              placeholder='Add description'
              onChange={handleChange}
              required
              rows={5}
              columns={50}
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
