const NoteInput = ({ name, value, onChange, placeholder, type }) => {
  return (
    <div className='title-input'>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default NoteInput;
