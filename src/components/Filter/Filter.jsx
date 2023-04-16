import { nanoid } from 'nanoid';

// class Filter extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleInputChange = e => {
//     const { value } = e.target;
//     this.setState({
//       inputValue: value,
//     });
//     this.props.onChange(this.state.inputValue);
//   };

//   render() {
//     const inputId = nanoid();
//     const { inputValue } = this.state;

//     return (
//       <div>
//         <label htmlFor={inputId}>Find contacts by name</label>
//         <input
//           type="text"
//           name="input"
//           value={inputValue}
//           id={inputId}
//           onChange={this.handleInputChange}
//         />
//       </div>
//     );
//   }
// }

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
