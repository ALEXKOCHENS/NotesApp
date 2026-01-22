const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <p className='no-notes'>
        No Notes yet!!, Please add some notes to see them here
      </p>
    );
  }

  return (
    <>
      <p
        style={{
          width: '100%',
          fontSize: '20px',
          maxWidth: '400px',
          textAlign: 'left',
          margin: '7px 15px',
          padding: '15px',
          fontWeight: 'bold',
          color: 'purple',
        }}
      >
        Recent Notes:
      </p>
      <div className='notes'>
        {notes.map((note) => (
          <div key={note.id} className='note-list'>
            <span>
              <strong>Title:</strong> {note.title}
            </span>
            <span>
              <strong>Priority: </strong>
              {note.priority}
            </span>
            <span>
              <strong>Category:</strong> {note.category}
            </span>
            <span>
              <strong>Description:</strong>
              {note.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
