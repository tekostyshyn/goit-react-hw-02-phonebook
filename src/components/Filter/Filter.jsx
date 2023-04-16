import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const inputId = nanoid();

  return (
    <div>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        type="text"
        name="input"
        value={value}
        id={inputId}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
