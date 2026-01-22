const SelectInput = ({ label, name, value, onChange, options, className }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
