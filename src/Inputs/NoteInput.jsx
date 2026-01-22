const NoteInput = ({
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className='title-input'>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default NoteInput;
